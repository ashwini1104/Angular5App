import { Component, OnInit } from '@angular/core';

import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  post:Post[];
  hobbies:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.dataService.getPosts().subscribe(res=>this.post=res);
  
      this.dataService.hobby.subscribe(res=>this.hobbies=res);
    }


}

interface Post{
  id:number;
  title:string;
  body:string;
}
