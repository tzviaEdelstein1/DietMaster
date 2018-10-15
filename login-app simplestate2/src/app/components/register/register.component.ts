import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { MyUserService } from '../../shared/services/my-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myUserService: MyUserService, private router: Router) { }
  myUser: User;
  ngOnInit() {
    this.myUser = new User();
  }
  onSubmit() {
   this.myUserService.register2(this.myUser)
     .subscribe((u:User)=>{ console.log(u.BornDate);
      debugger;
      this.myUser=u;
      localStorage.removeItem('CurrentUser');
      localStorage.setItem('CurrentUser', JSON.stringify(u));
      this.router.navigateByUrl('/newDiet');
    }
    , (e:HttpErrorResponse)=>console.log(e.status+" "+e.statusText));
 
  
  }
}
