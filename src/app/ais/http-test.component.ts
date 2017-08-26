import {Component} from '@angular/core';
import{HTTPTestService} from "./HTTPTestService";
//import {CommonService} from "./CommonService";
import {TestService} from "./TestService";



@Component({
  selector:'http-test',
  template:`
    <button (click)="onTestGet()"> Test Get Request </button>
    <p> Output : {{getData}}  </p>
    <button (click)="onTestPost()"> Test Post Request </button>
    <p> Output : {{postData}}</p>
  `,
  providers: [HTTPTestService]
})
export class HTTPTestComponent{

  getData:string;
  postData:string;

//  constructor(private _httpService: HTTPTestService){}

  constructor (private _testService: TestService){};
  onTestGet(){
    alert("here");

    this._testService.getCurrentTime()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      err => alert(""),
      () => console.log("Get Finished")
    );
  }


onTestPost(){

  //conosle.log("inside test post method");

  this._testService.postJSON()
  .subscribe(
    data => this.postData = JSON.stringify(data),
    err => alert(""),
    () => console.log("Post Finished")
  )
  }

}
