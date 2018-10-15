import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../models/Product.model';
import { Observable } from 'rxjs/observable'
import { Exercise } from '../models/Exercise.model';
import { DailyExercize } from '../models/DailyExercize.model';
import { MyExercize } from '../models/MyExercize.model';
// import { DailyExercize } from '../models/DailyExercize.model';
@Injectable()
export class ExercizeService {

  constructor(private HttpClient: HttpClient) { }
  getAllExercize(): Observable<Exercise[]> {
    return this.HttpClient.get("http://localhost:58095/getAllExercise")
      .map((response: Exercise[]) => response)
      .catch((response: HttpErrorResponse) => Observable.throw(response));
  }

  AddDailyExercize(newDailyExercize: DailyExercize): Observable<DailyExercize> {
    console.log(newDailyExercize);
    return this.HttpClient.post("http://localhost:58095/AddDailyExercize", newDailyExercize)
    .map((r: DailyExercize) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r));
  }
  AddMyExercize(newMyExercize: MyExercize): Observable<MyExercize> {
    console.log(newMyExercize);
    return this.HttpClient.post("http://localhost:58095/AddMyExercize", newMyExercize)
    .map((r: DailyExercize) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r));
  }
}



