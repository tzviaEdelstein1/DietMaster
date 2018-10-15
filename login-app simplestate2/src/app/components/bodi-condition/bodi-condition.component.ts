import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { DietService } from '../../shared/services/diet.service';
import { Bodi_condition } from '../../shared/models/bodi_condition.model';
import { User } from '../../shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodi-condition',
  templateUrl: './bodi-condition.component.html',
  styleUrls: ['./bodi-condition.component.css']
})
export class BodiConditionComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Input() fromMenu:boolean=false;
  user:User;
 age:number=null;
 fg:string="ss";
bodi_condition:Bodi_condition;

  constructor(private dietService:DietService,private router: Router) { }
  ngOnInit() {
    this.bodi_condition=new Bodi_condition();
this.user = JSON.parse(localStorage.getItem('CurrentUser'));
// var now = new Date()
// debugger;
//    this.age=7;
//    new Date().getFullYear();
//  now.getFullYear()- this.user.BornDate.getFullYear();
  }
  onSubmit() {
    debugger;
this.bodi_condition.idUser=this.user.id
this.bodi_condition.gender="female";
    this.dietService.bodi_condition(this.bodi_condition)
    .subscribe((u:Bodi_condition)=>{ console.log("new", u);
     this.bodi_condition=u;
     if(!this.fromMenu)
     this.router.navigateByUrl('/result');
     else
     this.cancelFunc();
   }
   , (e:HttpErrorResponse)=>console.log(e.status+" "+e.statusText));
 
  }
  cancelFunc(){
    this.cancel.emit();
    }
}
