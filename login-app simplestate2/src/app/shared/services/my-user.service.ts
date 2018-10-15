import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { User } from '../imports'
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError, retry } from 'rxjs/operators';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { useAnimation } from '@angular/core/src/animation/dsl';
// import 'rxjs/add/operator/map';
import { debug, error } from "util";
import 'rxjs/Rx';
import { User } from '../models/user.model';
@Injectable()
export class MyUserService {
  constructor(private http: Http, private httpclient: HttpClient) { }
  login(email, password) {
    console.log(email);
    this.http.get("http://localhost:49926/api/users?password=" + password + "&email=" + email).
      subscribe(res => {
        console.log("res:", res.json());
        return res.json()
      })

  }
  login3(email, password) {
    console.log(email);
    this.http.get("http://localhost:49926/api/users?id=" + 5).
      subscribe(res => {
        console.log("res:", res.json());
        return res.json()
      })

  }
  login2(email:string, password:string) : Observable<User>{
    console.log("before",  email);
    return this.httpclient.get("http://localhost:58095/login/"+email+"/"+password)
    .map((r: User) => r)
    .catch((r: HttpErrorResponse) => Observable.throw(r)); 
      //   console.log("res:", res.json());
      //   return res.json()
      // },  err => console.log("err"))
  }
  register(newUser: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(newUser);
    return this.http.post("http://localhost:49926/api/users", newUser, options).
      subscribe(res => {
        console.log("res:", res.json());
        localStorage.removeItem('CurrentUser');
        localStorage.setItem('CurrentUser', JSON.stringify(res.json()));
        return res.json()
      })
  }
  register2(newUser2: User): Observable<User> {
    console.log(newUser2);
    return this.httpclient.post("http://localhost:58095/register", newUser2)
    .map((r: User) => r)
      .catch((r: HttpErrorResponse) => Observable.throw(r));
  }
}
