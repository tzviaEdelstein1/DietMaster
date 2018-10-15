import {Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { DietService } from '../../shared/services/diet.service';
import { Diet } from '../../shared/models/diet.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Meal } from '../../shared/models/Meal.model';
import { Product } from '../../shared/models/Product.model';
import { ProductOfMeal } from '../../shared/models/ProductOfMeal.model';


@Component({
  selector: 'app-define-day',
  templateUrl: './define-day.component.html',
  styleUrls: ['./define-day.component.css']
})
export class DefineDayComponent implements OnInit {
  
  @Output() saveData = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() sumCalories = new EventEmitter();
  @Input() date: Date;
  @Input() isStandart: boolean = false;
  @Input() saveStandart: boolean = true;
  
  constructor(private dietService: DietService) { }

  ngOnInit() {
   
  
}
save()
{
this.saveData.emit(this.date);
}
cancelFunc()
{
  this.cancel.emit(this.date);
}
sumCaloriesFunc(sumCalories:number)
{
this.sumCalories.emit(sumCalories);
}
}
