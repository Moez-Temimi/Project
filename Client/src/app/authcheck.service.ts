import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthcheckService {
loged:boolean=false;
  constructor() { }

  gettingToken(token:any){
    if(token){
      this.loged= true;
    }
    else {
      this.loged= false;
    }
  }

  verifying(){
    return this.loged
  }
}
