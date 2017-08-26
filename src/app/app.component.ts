import { Component,Directive } from '@angular/core';
import {PaymentService} from "./pis/pis.component";
import {PISInstruction} from "./pis/pis.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: './charts/app.chart.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First APP';

  private userName:string = "chitesh";
/*
  private _accounts:Array<PISInstruction>=[
    {
      id:"1",
      title:"First",
      balance:10
    },
    new PISInstruction("2","Second",20)
]
*/



}
