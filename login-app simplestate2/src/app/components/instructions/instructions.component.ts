import { Component, OnInit, Output, EventEmitter, Input, RendererStyleFlags2 } from '@angular/core';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  cancelFunc(){
    this.cancel.emit();
    }
}
