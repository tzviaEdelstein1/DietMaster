import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefineDayComponent } from '../define-day/define-day.component';
import { detachEmbeddedView } from '@angular/core/src/view';
import { QuestionComponent } from '../question/question.component';
import { NutritioCalculatorComponent } from '../nutritio-calculator/nutritio-calculator.component';
import { ResultComponent } from '../result/result.component';
import { BodiConditionComponent } from '../bodi-condition/bodi-condition.component';
import { InstructionsComponent } from '../instructions/instructions.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  constructor(private router: Router,private modal: NgbModal) { }

  ngOnInit() {

  }
  // openCalander() {
  //   this.router.navigateByUrl('/calander');
  // }
  openBodiCondition(){
    const modalRef = this.modal.open(BodiConditionComponent,
      { size: 'lg' });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      });
      modalRef.componentInstance.fromMenu=true;
  }
  openResult(){
    const modalRef = this.modal.open(ResultComponent,
      { size: 'lg' });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      });
      modalRef.componentInstance.fromMenu=true;
  }
  finishDiet(){
    const modalRef = this.modal.open(QuestionComponent,
      { size: 'lg' });
      modalRef.componentInstance.close.subscribe(() => {
        modalRef.close();
      });
  }
  openNutritioCalculator(){
    const modalRef = this.modal.open(NutritioCalculatorComponent,
      { size: 'lg' });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      }); 
  }
  opendefineDay(){
    const modalRef = this.modal.open(DefineDayComponent,
      { size: 'lg' });
      modalRef.componentInstance.saveStandart = true;
    modalRef.componentInstance.isStandart = true;
    modalRef.componentInstance.saveData.subscribe((date: Date) => {
      modalRef.close();
    }); 
    modalRef.componentInstance.cancel.subscribe(() => {
      modalRef.close();
    }); 
  }
  home(){
    this.router.navigateByUrl('/home');
  }
  OpenInstructions(){ 
    const modalRef = this.modal.open(InstructionsComponent,
      { size: 'lg' });
      modalRef.componentInstance.cancel.subscribe(() => {
        modalRef.close();
      }); 
  }
}
