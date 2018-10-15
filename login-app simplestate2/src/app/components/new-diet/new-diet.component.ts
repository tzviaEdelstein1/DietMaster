
import {Component,OnInit} from '@angular/core';
import {NgForm } from '@angular/forms';
import {URLSearchParams } from '@angular/http';
import {Diet} from '../../shared/models/diet.model';
import {DietService } from '../../shared/services/diet.service';
import { HttpErrorResponse } from '@angular/common/http';
import {User} from '../../shared/models/user.model';
import {Pipe, PipeTransform} from "@angular/core";
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector:'app-new-diet',
  templateUrl:'./new-diet.component.html',
  styleUrls:['./new-diet.component.css']
})
export class NewDietComponent implements OnInit {
user:User;
newDiet:Diet;
duration:number=null;
today:Date;
n:number;
  constructor(private dietService:DietService, private router: Router) {
   }
  ngOnInit() {
    
    this.newDiet=new Diet();
    this.today=new Date(Date.now());
  this.newDiet.startDate=new Date(Date.now());

    this.user=JSON.parse(localStorage.getItem('CurrentUser'));
  }
  onSubmit() {
   
    debugger;
    if(this.duration!=null)
    { 
this.newDiet.endDate=new Date();
this.newDiet.endDate.setDate(this.newDiet.endDate.getDate()+this.duration);

    }
this.newDiet.idUser=this.user.id;
this.dietService.newDiet(this.newDiet)
     .subscribe((u:Diet)=>{ console.log(u);
     
      this.newDiet=u;
      this.router.navigateByUrl('/bodi_condition');
    }
    , (e:HttpErrorResponse)=>console.log(e.status+" "+e.statusText));
  }
}
