import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Exercise } from '../../shared/models/Exercise.model';

@Component({
  selector: 'app-new-exercize',
  templateUrl: './new-exercize.component.html',
  styleUrls: ['./new-exercize.component.css']
})
export class NewExercizeComponent implements OnInit {
  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();
  @Output()
  elementadded: EventEmitter<any> = new EventEmitter();
  @Input()
  ExercizeId:number;
  @Input()
  MyExercize:Exercise;
  constructor() { }

  ngOnInit() {
    debugger;
  }

}
