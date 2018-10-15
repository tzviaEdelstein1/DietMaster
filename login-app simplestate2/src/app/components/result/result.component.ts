import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefineMenuComponent } from '../define-menu/define-menu.component';
import { DefineDayComponent } from '../define-day/define-day.component';
import { DietService } from '../../shared/services/diet.service';
import { User } from '../../shared/models/user.model';
import { Diet } from '../../shared/models/diet.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bmr: number;
  user: User;
  idDiet: number;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Input() fromMenu:boolean=false;
  constructor(private modal: NgbModal, private dietService: DietService,private router: Router) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('CurrentUser'));
    console.log("idUser" + this.user.id);
    this.dietService.getDiet(this.user.id)
      .subscribe((u: Diet) => {
this.idDiet=u.id;
this.dietService.getResult(this.idDiet).subscribe(res => {this.bmr = Math.abs(Math.round(res)); console.log(this.bmr)});
      })
  
  }
  openDefineMenueModal() {
    this.cancelFunc();
    const modalRef = this.modal.open(DefineDayComponent,
      { size: 'lg' });

    modalRef.componentInstance.isStandart = true;
    modalRef.componentInstance.saveData.subscribe((date: Date) => {
      modalRef.close();
    });
    modalRef.componentInstance.cancel.subscribe(() => {
      modalRef.close();
    });
    this.router.navigateByUrl('/calander');
  }
  cancelFunc(){
    this.cancel.emit();
    }


}
