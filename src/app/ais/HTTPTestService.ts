import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService{

     constructor (private _http: Http) {}



     getCurrentTime(){
       return this._http.get('http://date.jsontest.com')
        .map(res =>res.json())
     }


     postJSON(){

     }

}
