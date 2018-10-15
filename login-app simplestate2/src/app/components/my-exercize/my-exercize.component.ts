import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ExercizeService } from '../../shared/services/exercize.service';
import { DietService } from '../../shared/services/diet.service';
import { User } from '../../shared/models/user.model';
import { Exercise } from '../../shared/models/Exercise.model';
import { DailyExercize} from '../../shared/models/DailyExercize.model';
import { Diet } from '../../shared/models/diet.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MyExercize } from '../../shared/models/MyExercize.model';

@Component({
  selector: 'app-my-exercize',
  templateUrl: './my-exercize.component.html',
  styleUrls: ['./my-exercize.component.css']
})
export class MyExercizeComponent implements OnInit {
  map:Map<number,Exercise>;
  @Output() saveData: EventEmitter<any> = new EventEmitter();
  @Input() date: Date;
  @Input() isStandart: boolean = false;
  @Input() saveStandart: boolean = true;
  constructor(private exersizeService:ExercizeService,private dietService:DietService) {
    this.map=new Map<number,Exercise>();
   }
  DailyExercize:DailyExercize[]=[];
  MyExercizes:MyExercize[]=[];
  MyExercize:MyExercize;
  exercizes:Exercise[]=[];
  user:User;
  DietFromServer: Diet;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
    console.log("idUser" + this.user.id);
    this.dietService.getDiet(this.user.id)
      .subscribe((u: Diet) => {
       
        console.log("diet" + u);
        this.DietFromServer = u;
      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
        this.MyExercize=new MyExercize();
        //getAllExercize
        this.exersizeService.getAllExercize()
          .subscribe((u: Exercise[]) => {
            console.log(u);
    
            this.exercizes = u;
            this.exercizes.forEach(element => {
              this.map.set(element.id,element);
            });
            console.log("exercizes", this.exercizes);
    
          }
            , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));

           
                if(this.date==undefined)
                this.isStandart = true;
                else{
                  debugger;
                this.dietService.checkMyExercize(36, this.date)
                .subscribe((u: MyExercize) => {         
                  if (u == null)
                    this.isStandart = true;
                  else
                   this.isStandart = false;        
                }
                  , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));
        
              }
        
                if(this.isStandart==true)
            { 
               this.dietService.getDailyExercize(this.DietFromServer.id).subscribe((response: DailyExercize[]) => {
                  this.DailyExercize = response;
                });} 
        else{
        
          this.dietService.getMyExercize(36,this.date).subscribe((response: MyExercize[]) => {
            this.MyExercizes = response;
          });
        
        }
        
              }
               
  
  onElementAdded(){}
  onElementDeletedDailyExercize(DailyExercize:DailyExercize){}
  onElementDeletedMyExercize(MyExercize:MyExercize){}
  changeShow() {
    debugger;
    if(this.isStandart==true){   
        let dailyExercize = new DailyExercize();      
        this.DailyExercize.push(dailyExercize);}
        else{
        let NewMyExercize = new MyExercize();       
        this.MyExercizes.push(NewMyExercize);
        }
      }
}
