import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
// declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    // // loading templates js after dom render
    // $.getScript("../../assets/js/agency.js", function () {
    // });
    // $.getScript("../../assets/vendor/jquery/jquery.min.js", function () {
    // });
    // $.getScript("../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js", function () {
    // });

    // $.getScript("../../assets/vendor/jquery-easing/jquery.easing.min.js", function () {
    // });
    // $.getScript("../../assets/vendor/jquery-easing/jquery.easing.min.js", function () {
    // });
    // $.getScript("../../assets/vendor/jquery-easing/jquery.easing.min.js", function () {
    // });
    // $.getScript("../../assets/vendor/jquery-easing/jquery.easing.min.js", function () {
    // });

}
login()
{
  this.router.navigateByUrl('/login');
}
register()
{
  this.router.navigateByUrl('/register');
}
}
