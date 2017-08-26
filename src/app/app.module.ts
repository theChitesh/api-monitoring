import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaymentService} from "./pis/pis.component";
import { AppComponent } from './app.component';
import {AccountService} from "./ais/ais.component";
import{HTTPTestComponent} from "./ais/http-test.component";
//import {CommonService} from "./ais/CommonService";
import {TestService} from "./ais/TestService";
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
//import {DemoHeaderComponent} from "./charts/demo-header";
//import {ChartSectionComponent} from "./charts/chart-section.component";
//import {ChartsSectionComponent} from "./charts/charts-section";


@NgModule({
  declarations: [
    AppComponent,
    HTTPTestComponent,
    AccountService,
    PaymentService
    //DemoHeaderComponent,
    //ChartSectionComponent,
  //  ChartsSectionComponent
  ],
  imports: [
    BrowserModule,HttpModule,ChartsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
