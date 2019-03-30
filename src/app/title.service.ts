import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  public title:string;

  constructor() { }

  setTitle(title){

    console.log('in service');
    
    if(title.length<1)
    {
      this.title ="My Profile";
    }
    else
    {
      this.title = title;
    }
    return this.title;
  }

}
