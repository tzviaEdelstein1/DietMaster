import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    
})
export class AppComponent {

  constructor(private router: Router,private modal: NgbModal) {
  }
  title = 'app';
  onRegister() {
    const modalRef = this.modal.open(RegisterComponent,
      { size: 'lg' });
      modalRef.componentInstance.close.subscribe(() => {
        modalRef.close();
      });
  }
  onLogin() {
    const modalRef = this.modal.open(LoginComponent,
      { size: 'lg' });
      modalRef.componentInstance.close.subscribe(() => {
        modalRef.close();
      });
  }
}
