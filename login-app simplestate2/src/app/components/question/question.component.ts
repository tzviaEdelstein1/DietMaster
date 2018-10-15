import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RendererStyleFlags3 } from '@angular/core/src/render3/renderer';
import { Router } from '@angular/router';
import { FinishDietComponent } from '../finish-diet/finish-diet.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private router: Router,private modal: NgbModal) { }

  ngOnInit() {
  }
yes()
{
  this.close.emit();
  const modalRef = this.modal.open(FinishDietComponent,
    { size: 'lg' });
    modalRef.componentInstance.cancel.subscribe(() => {
      modalRef.close();
    });
}
no()
{
 this.close.emit();
}
}
