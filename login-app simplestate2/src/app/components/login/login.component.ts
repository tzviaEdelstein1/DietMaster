import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { MyUserService } from '../../shared/services/my-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DietService } from '../../shared/services/diet.service';
import { Diet } from '../../shared/models/diet.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  dietFromServer: Diet
  constructor(private myUserService: MyUserService, private router: Router, private dietService: DietService) { }
  myUser: User;
  ngOnInit() {
    this.myUser = new User();

  }

  onSubmit(LoginForm: NgForm) {
    this.myUserService.login2(LoginForm.value.email, LoginForm.value.password)
      .subscribe((u: User) => {
        localStorage.removeItem('CurrentUser');
        localStorage.setItem('CurrentUser', JSON.stringify(u));
        console.log(u, u.firstName);
        this.dietService.getDiet(u.id).subscribe((u: Diet) => {
        this.dietFromServer = u;
        this.dietFromServer.endDate=new Date( this.dietFromServer.endDate);
        console.log("date"+this.dietFromServer.endDate);
        console.log(this.dietFromServer.endDate.getDate())
          if (
            this.dietFromServer.endDate.getDate()== new Date().getDate() &&
            this.dietFromServer.endDate.getFullYear() == new Date().getFullYear()
            && this.dietFromServer.endDate.getMonth() == new Date().getMonth()) {
            this.router.navigateByUrl('/finishDiet');
          }
          else
            this.router.navigateByUrl('/calander');
        });
        console.log(this.dietFromServer);

      }
        , (e: HttpErrorResponse) => alert(e.status + " " + e.statusText));

  }
}
