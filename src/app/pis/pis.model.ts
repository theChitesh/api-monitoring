export class PISInstruction{

  // public initiatingPartyAccountNubmer:string
  public id:string
  public title:string
  public balance:string


  public constructor(id:string, title:string,balance:string){

    this.id = id;
    this.title = title;
    this.balance = balance;

  }


}
