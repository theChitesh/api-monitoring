import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class TestService{



  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private commentsUrl = 'http://localhost:8080/hello';


   getCurrentTime(){
     console.log("ready to call service");
         return this.http.get('http://date.jsontest.com')
          .map(res =>res.json())
       }


       postJSON(){
         console.log("in POST json method");
         var json =   JSON.stringify({var1: 'test', var2: 3});

         var params = 'json='+json;
         var headers = new Headers();

         headers.append('Content-Type', 'application/x-www-form-urlencoded');
         return this.http.post(' http://validate.jsontest.com/',params,{
           headers:headers
         })
         .map(res => res.json());
       }


  // Fetch all existing comments
  getComments() : Observable<Comment> {

    console.log("in get comment");

      // ...using get request
      return this.http.get(this.commentsUrl)
                     // ...and calling .json() on the response to return data
                      .map((res:Response) => res.json())
                      //...errors if any
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


}
