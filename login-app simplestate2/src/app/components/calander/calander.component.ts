import { Component, OnInit, EventEmitter, Output, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarEventAction, CalendarMonthViewDay, CalendarEventTitleFormatter } from 'angular-calendar';
// import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, subMonths, addMonths, addWeeks, subWeeks, startOfWeek, startOfMonth, endOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefineMenuComponent } from '../define-menu/define-menu.component';
import { DietService } from '../../shared/services/diet.service';
import { IAte } from '../../shared/models/IAte.model';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user.model';
import { Diet } from '../../shared/models/diet.model';
import { CustomEventTitleFormatter } from './custom-event-title-formatter ';
import { min } from 'rxjs/operator/min';
import { detachEmbeddedView } from '@angular/core/src/view';
import { DefineDayComponent } from '../define-day/define-day.component';
import { SumCaloriesPerDay } from '../../shared/models/SumCaloriesPerDay.model';

type CalendarPeriod = 'day' | 'week' | 'month';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: addDays,
    week: addWeeks,
    month: addMonths
  }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: subDays,
    week: subWeeks,
    month: subMonths
  }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth
  }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth
  }[period](date);
}


@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CalendarEventTitleFormatter

    }
  ]
})
export class CalanderComponent implements OnInit {

dateClicked:Date;
  message: string = "";
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: CalendarPeriod = 'month';
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  iate: IAte;
  user: User;
  dietFromServer: Diet;
  minDate: Date = new Date();
  maxDate: Date = addMonths(new Date(), 1);
  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;
  CaloriesPerDay: Map<string, number>;
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  ngOnInit(): void {
  }
  events: CalendarEvent[] = [];



  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private dietService: DietService) {
    debugger;
    console.log(this.CaloriesPerDay);
    this.CaloriesPerDay = new Map<string, number>();



    console.log(this.minDate);
    console.log(this.maxDate);
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
    this.dietService.getDiet(this.user.id)
      .subscribe((diet: Diet) => {
        this.dietFromServer = diet;
        this.dietService.getAllSumCaloriesPerDay(this.dietFromServer.id)
          .subscribe((sum: SumCaloriesPerDay[]) => {
            console.log(sum);
            sum.forEach(a => {
              a.date = new Date(a.date);
              this.CaloriesPerDay.set(a.date.getFullYear().toString() + a.date.getMonth().toString() + a.date.getDate().toString(), a.foodCalories);
              this.addOneEvent(a.date);
            });
          }
            , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
        this.minDate = new Date(this.dietFromServer.startDate);
        this.maxDate = new Date(this.dietFromServer.endDate);

        this.addEvent();

      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));

  }
  increment(): void {
    this.changeDate(addPeriod(this.view, this.viewDate, 1));
  }

  decrement(): void {
    this.changeDate(subPeriod(this.view, this.viewDate, 1));
  }

  today(): void {
    this.changeDate(new Date());
  }

  //  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.dateClicked=date;
    if (date >= this.minDate && date <= this.maxDate) {
      const modalRef = this.modal.open(DefineDayComponent,
        { size: 'lg' });
      modalRef.componentInstance.date = date;

      this.dietService.checkIAte(this.dietFromServer.id, date)
        .subscribe((u: IAte) => {
          this.iate = u;
          modalRef.componentInstance.saveData.subscribe((date: Date) => {
            modalRef.close();
          });
          modalRef.componentInstance.cancel.subscribe(() => {
            modalRef.close();
          });
          modalRef.componentInstance.sumCalories.subscribe((sumCalories: number) => {
            this.CaloriesPerDay.set(date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString(), sumCalories);
            this.addOneEvent(date);
            //send to server add sumcaloriesperday
          })
          modalRef.componentInstance.saveStandart = false;
          if (this.iate == null)
            modalRef.componentInstance.isStandart = true;
          else
            modalRef.componentInstance.isStandart = false;
        }
          , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
    }
    else
      alert("this date is not in your diet duration");
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    alert("hello");
    this.modalData = { event, action };
    const modalRef = this.modal.open(DefineDayComponent,
      { size: 'lg' });
    modalRef.componentInstance.saveData.subscribe((date: Date) => {
      modalRef.close();
    });
    modalRef.componentInstance.cancel.subscribe(() => {
      modalRef.close();
    });
    modalRef.componentInstance.sumCalories.subscribe((sumCalories: number) => {
      this.CaloriesPerDay.set(this.dateClicked.getFullYear().toString() + this.dateClicked.getMonth().toString() + this.dateClicked.getDate().toString(), sumCalories);
      this.addOneEvent(this.dateClicked);
      //send to server add sumcaloriesperday
    })

  }
  caloriesPerDate() {
    //how many coloried did i ate in current date
    //this is the title of the event
  }
  addEvent(): void {

    let CurrentEvent: CalendarEvent;
    let Eventdate = new Date(this.minDate);
    let Eventcolor;
    while (Eventdate < this.maxDate || (Eventdate.getFullYear() == this.maxDate.getFullYear() &&
      Eventdate.getMonth() == this.maxDate.getMonth() &&
      Eventdate.getDate() == this.maxDate.getDate())) {
      let TitleEvent = "You did not visit in this day";
      CurrentEvent = {
        start: new Date(Eventdate),
        end: new Date(Eventdate),
        title: TitleEvent,
        color: colors.yellow,
        actions: this.actions
      }
      this.events.push(Object.assign({}, CurrentEvent));
      Eventdate.setDate(Eventdate.getDate() + 1);
      this.refresh.next();
    }
  }
  addOneEvent(date: Date) {
    debugger;
    let CurrentEvent: CalendarEvent;
    let Eventdate = new Date(date);
    let Eventcolor;
    let TitleEvent: string;
    let sum=this.CaloriesPerDay.get(Eventdate.getFullYear().toString() + Eventdate.getMonth().toString() + Eventdate.getDate().toString());
    console.log("CaloriesPerDay" + sum);
    let sumperday=new SumCaloriesPerDay();
    sumperday.idDiet=this.dietFromServer.id;
    sumperday.date=date;
    sumperday.foodCalories=sum;
    if (sum!= undefined) {
      this.dietService.addSumCaloriesPerDay(sumperday)
     .subscribe((u:SumCaloriesPerDay)=>{ console.log(u);    
    }
    , (e:HttpErrorResponse)=>console.log(e.status+" "+e.statusText));
      TitleEvent = "You ate in this day " + sum + " calories";

      var index = 0;
      while (index != -1) {
        index = this.events.findIndex((elt) => (elt.start.getFullYear().toString() + elt.start.getMonth().toString() + elt.start.getDate().toString()
          === Eventdate.getFullYear().toString() + Eventdate.getMonth().toString() + Eventdate.getDate().toString()));
        if (index != -1) {
          this.events.splice(index, 1);
          this.refresh.next();
        }
      }
    }
    else
      TitleEvent = "You did not visit in this day";
    CurrentEvent = {
      start: new Date(Eventdate),
      end: new Date(Eventdate),
      title: TitleEvent,
      color: colors.yellow,
      actions: this.actions
    }
    this.events.push(Object.assign({}, CurrentEvent));
    this.refresh.next();

  }
  dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
    this.prevBtnDisabled = !this.dateIsValid(
      endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
    );
    this.nextBtnDisabled = !this.dateIsValid(
      startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
    );
    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (!this.dateIsValid(day.date)) {
        // day.cssClass = 'cal-disabled';
      }
    });
  }


}
