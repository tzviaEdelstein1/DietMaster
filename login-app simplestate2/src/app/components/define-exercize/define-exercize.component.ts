import { Component, OnInit } from '@angular/core';
import { ExercizeService } from '../../shared/services/exercize.service';
import { Exercise } from '../../shared/models/Exercise.model';
import { HttpErrorResponse } from '@angular/common/http';
import { DailyExercize } from '../../shared/models/DailyExercize.model';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { DietService } from '../../shared/services/diet.service';
import { Diet } from '../../shared/models/diet.model';
@Component({
  selector: 'app-define-exercize',
  templateUrl: './define-exercize.component.html',
  styleUrls: ['./define-exercize.component.css']
})
export class DefineExercizeComponent implements OnInit {

  constructor(private exersizeService:ExercizeService,private dietService:DietService) { }
  exercizes: Exercise[] = [];
  dailyExercize:DailyExercize;
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



    this.dailyExercize=new DailyExercize();
    //getAllExercize
    this.exersizeService.getAllExercize()
      .subscribe((u: Exercise[]) => {
        console.log(u);

        this.exercizes = u;
        console.log("products", this.exercizes);

      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));

  }
  onSubmit(){
  
    this.dailyExercize.idDiet=this.DietFromServer.id;
   console.log(this.dailyExercize) ;
   this.exersizeService.AddDailyExercize(this.dailyExercize)
   .subscribe((u:DailyExercize)=>{ console.log(u);

  }
  , (e:HttpErrorResponse)=>console.log(e.status+" "+e.statusText));

  }


}
