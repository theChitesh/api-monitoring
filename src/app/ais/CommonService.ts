import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }           from './Comment.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private commentsUrl = 'http://localhost:8080/hello';

/*
      getCurrentTime(){
            return this._http.get('http://date.jsontest.com')
             .map(res =>res.json())
          }
*/
     // Fetch all existing comments
     getComments() : Observable<any> {

       console.log("in get comment");

         // ...using get request
         return this.http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
