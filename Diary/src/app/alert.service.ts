import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertUser(message:string){
    alert(message)
  }
  constructor() { }
}
