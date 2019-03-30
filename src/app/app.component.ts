import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TitleService } from './title.service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;// 'My Account- User Profile';
  
  constructor (
     private titleservice : Title,
     private metaservice : Meta
    ,private objtitle : TitleService
  ){}
  ngOnInit(){
    this.titleservice.setTitle(this.title);
    
    
    this.title =this.objtitle.setTitle("");
  
    console.log(this.title);
    
  }



}
