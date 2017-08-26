import {Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
import {AccountCommonService} from './account.services';
import {Account} from './account.model';


@Component({
    selector: 'accountService',
    templateUrl: './ais.component.html'
    //styleUrls: ['./accounts_list.component.css']
  })
export class AccountService{

/*
  private _accounts:Array<Account>;

    private _accountCommonService:AccountCommonService;

    constructor(accountCommonService: AccountCommonService){
      this._accountCommonService = accountCommonService;
      var promise = this._accountCommonService.getAll();
      promise.then(accounts => this._accounts = accounts);
    }

*/

  public value:string= "test";

  public getComments(){
    this.value = "Button is working";
    return this.value;
  }


}
