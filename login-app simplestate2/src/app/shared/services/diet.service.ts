import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Bodi_condition } from '../models/bodi_condition.model';
import { Meal } from '../models/Meal.model';
import { Diet } from '../models/diet.model';
import { Dailymenu } from '../models/DailyMenu.model';
import { User } from '../models/user.model';
import { Product } from '../models/Product.model';
import { Measure } from '../models/Measure.model';
import { ProductsMeasure } from '../models/ProductsMeasure.model';
import { ProductOfMeal } from '../models/ProductOfMeal.model';
import { ProductOfMealIAte } from '../models/ProductOfMealIAte.model';
import { IAte } from '../models/IAte.model';
import { DatePipe } from '@angular/common';
import { MyExercize } from '../models/MyExercize.model';
import { Exercise } from '../models/Exercise.model';
import { DailyExercize } from '../models/DailyExercize.model';
import { SumCaloriesPerDay } from '../models/SumCaloriesPerDay.model';
// import { formatDate } from '@angular/common';
// import { map } from 'rxjs/operators';
// import { forEach } from '@angular/router/src/utils/collection';
@Injectable()
export class DietService {
 
  data: any;
  AllMeals: Meal;
  // d:DefineDayComponent;
  user: User;
  constructor(@Inject(LOCALE_ID) private locale: string,private http: Http, private HttpClient: HttpClient, private httpService: Http) {
    this.user = JSON.parse(localStorage.getItem('CurrentUser'));

  }




  getMeal(name:string) : Observable<Meal>{
  
    return this.HttpClient.get("http://localhost:58095/getMeal/"+name)
    .map((r: Meal) => r)
    .catch((r: HttpErrorResponse) => Observable.throw(r));
  }


 
  newDiet(newDiet: Diet) {
    console.log(newDiet);
    return this.HttpClient.post("http://localhost:58095/addDiet", newDiet)
    .map((r: Diet) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r));
  }
  addSumCaloriesPerDay(sum: SumCaloriesPerDay) {
    return this.HttpClient.post("http://localhost:58095/addSumCaloriesPerDay", sum)
    .map((r: SumCaloriesPerDay) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r));
  }
  getAllMeals(): Observable<Meal[]> {
    return this.HttpClient.get("http://localhost:58095/getAllMeals")
      .map((response: Meal[]) => response)
      .catch((response: HttpErrorResponse) => Observable.throw(response));
  }
  getAllSumCaloriesPerDay(idDiet): Observable<SumCaloriesPerDay[]> {
    return this.HttpClient.get("http://localhost:58095/getAllSumCaloriesPerDay/"+idDiet)
      .map((response: SumCaloriesPerDay[]) => response)
      .catch((response: HttpErrorResponse) => Observable.throw(response));
  }
  bodi_condition(bodi_condition: Bodi_condition):Observable<Bodi_condition>  {
      console.log(bodi_condition);
      return this.HttpClient.post("http://localhost:58095/adding", bodi_condition)
      .map((r: Bodi_condition) => r)
        .catch((r: HttpErrorResponse) => Observable.throw(r));
    }
    getAllProducts(): Observable<Product[]> {
      return this.HttpClient.get("http://localhost:58095/getAllProduct")
        .map((response: Product[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }

    getAllMeasure(): Observable<Measure[]> {
      return this.HttpClient.get("http://localhost:58095/getAllMeasure")
        .map((response: Measure[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }

    getAllProductsMeasure(): Observable<ProductsMeasure[]> {
      return this.HttpClient.get("http://localhost:58095/getAllProductsMeasure")
        .map((response: ProductsMeasure[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }

    getDailyMenubyIdDiet( idDiet:number): Observable<Dailymenu[]> {
      return this.HttpClient.get("http://localhost:58095/getDailyMenu/"+idDiet)
        .map((response: Dailymenu[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }
    AddIAte(newIAte: IAte[],idMeal:number,idDiet:number,date:Date): Observable<IAte[]> {
    let stringDate=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
      return this.HttpClient.post("http://localhost:58095/addIate/"+idMeal+"/"+idDiet+"/"+stringDate, newIAte)
      .map((r: IAte) => r)
        .catch((r: HttpErrorResponse) => Observable.throw(r));
    }
    AddMyExercise(newMyExercise: MyExercize[],idDiet:number,date:Date): Observable<MyExercize[]> {
      let stringDate=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
        return this.HttpClient.post("http://localhost:58095/addMyExercize/"+idDiet+"/"+stringDate, newMyExercise)
        .map((r: MyExercize) => r)
          .catch((r: HttpErrorResponse) => Observable.throw(r));
      }
    AddStandartDailyMenu(newDailyMenu: Dailymenu[],idMeal:number,idDiet:number): Observable<Dailymenu[]> {

      console.log("from service"+newDailyMenu);
      return this.HttpClient.post("http://localhost:58095/AddDailyMenu/"+idDiet+"/"+idMeal, newDailyMenu)
      .map((r: Dailymenu) => r)
        .catch((r: HttpErrorResponse) => Observable.throw(r));
    }
    AddStandartExercise(newExercise: DailyExercize[],idDiet:number): Observable<DailyExercize[]> {

      console.log("from service"+newExercise);
      return this.HttpClient.post("http://localhost:58095/AddDailyExercize/"+idDiet, newExercise)
      .map((r: DailyExercize) => r)
        .catch((r: HttpErrorResponse) => Observable.throw(r));
    }
    getDiet(idUser:number) : Observable<Diet>{
      
      console.log("from service id user"+idUser);
      return this.HttpClient.get("http://localhost:58095/getDiet/"+idUser)
      .map((r: Diet) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r)); 
    
    }
    getDailyMenuByMeal( idDiet:number): Observable<ProductOfMeal[]> {
      return this.HttpClient.get("http://localhost:58095/getDailyMenuByMeal/"+idDiet)
        .map((response: Dailymenu[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }
    getDailyExercize( idDiet:number): Observable<DailyExercize[]> {
      return this.HttpClient.get("http://localhost:58095/getDailyExercize/"+idDiet)
        .map((response: DailyExercize[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }
    checkIAte( idDiet:number,  date:Date) : Observable<IAte>{ 
      let d=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
      console.log(d);
     
      return this.HttpClient.get("http://localhost:58095/checkIAte/"+idDiet+"/"+d)
      .map((r: IAte) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r)); 

    }
    checkMyExercize( idDiet:number,  date:Date) : Observable<MyExercize>{ 
      let d=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
      console.log(d);
     
      return this.HttpClient.get("http://localhost:58095/checkMyExercize/"+idDiet+"/"+d)
      .map((r: MyExercize) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r)); 

    }

    getIAteByMeal( idDiet:number,date:Date): Observable<ProductOfMealIAte[]> {
      let d=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
      return this.HttpClient.get("http://localhost:58095/getIAteByMeal/"+idDiet+"/"+d)
        .map((response: IAte[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }
    getMyExercize( idDiet:number,date:Date): Observable<MyExercize[]> {
      let d=date.getDate().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getFullYear().toString();
      return this.HttpClient.get("http://localhost:58095/getMyExercize/"+idDiet+"/"+d)
        .map((response: MyExercize[]) => response)
        .catch((response: HttpErrorResponse) => Observable.throw(response));
    }
    getResult(idDiet:number):Observable<number>{
      return this.HttpClient.get("http://localhost:58095/calculateDailyCalories/"+idDiet).map((response: number) => response)
      .catch((response: HttpErrorResponse) => Observable.throw(response));;
    }
    CalcAvgSumCaloriesPerDay(idDiet:number):Observable<number>{
      return this.HttpClient.get("http://localhost:58095/CalcAvgSumCaloriesPerDay/"+idDiet).map((response: number) => response)
      .catch((response: HttpErrorResponse) => Observable.throw(response));;
    }
  }


