import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Diet } from '../../shared/models/diet.model';
import { DietService } from '../../shared/services/diet.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-finish-diet',
  templateUrl: './finish-diet.component.html',
  styleUrls: ['./finish-diet.component.css']
})
export class FinishDietComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  user: User;
  idDiet: any;
  bmr: number;
  avg:number=0;
  massage1:string;
  massage2:string;
  endDate:Date;
  constructor(private dietService:DietService,private router: Router) { }
  ngOnInit() {
  this.user = JSON.parse(localStorage.getItem('CurrentUser'));
  console.log("idUser" + this.user.id);
  this.dietService.getDiet(this.user.id)
  .subscribe((u: Diet) => {
this.idDiet=u.id;
this.endDate=new Date(u.endDate);
if (
  this.endDate.getDate()== new Date().getDate() &&
  this.endDate.getFullYear() == new Date().getFullYear()
  && this.endDate.getMonth() == new Date().getMonth())
  this.massage2="The day has come to end your diet !Well done, you held it all the way";
  else
  this.massage2="Too bad you did not hold it all the way";
this.dietService.getResult(this.idDiet)
.subscribe(res => {this.bmr =Math.abs(Math.round(res)) ;
   console.log("bmr"+this.bmr);
   this.dietService.CalcAvgSumCaloriesPerDay(this.idDiet)
   .subscribe(r => {
     this.avg = Math.abs(Math.round(r)); 
     console.log("avg"+this.avg);
     if(this.avg>this.bmr)
     this.massage1="We're really sorry for you. but you did not meet the diet requirements. Maybe next time you'll be more successful. Do not despair!";
     else
     this.massage1="We are proud of your achievements! You have successfully fulfilled all the requirements of the diet. We wish you never need this site again";
    });
  });
          });
      
  }
  newDiet(){
      this.cancel.emit();
    this.router.navigateByUrl('/newDiet');
  }
}
