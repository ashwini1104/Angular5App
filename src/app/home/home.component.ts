import { Component,OnInit } from '@angular/core';

import { DataService } from './../../service/data.service';

import { DataModel } from './../model/data.model';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styles:[ `
    
    ` ]
})

export class HomeComponent implements OnInit{

    name:string;
    address:address;
    hobbies:string[];
    count:number;
    hoby:string;
    isHobbies:boolean=false;
    eventdata:string;

    model:DataModel;
    constructor(private dataService:DataService){
        this.model=new DataModel();
    }

    ngOnInit(){
        this.name='Ashwini Rane';
        this.dataService.hobby.subscribe(res=>this.hobbies=res);
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
        this.address={'city':'Jalgao','state':'MH'};
    }

    addHobbies(){
        if(this.hobbies.indexOf(this.hoby)!=-1)
            return false;
        if(this.hoby.trim()=='')
            return false;
        this.hobbies.push(this.hoby);
        this.hoby='';
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
        return true;
    }

    removeHobbies(i){
        this.hobbies.splice(i,1);
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
    }

    toggleHobbies(){
        this.isHobbies=!this.isHobbies;
    }

    getNote(evt){
        this.eventdata=evt;
    }
}

interface address{
    city:string;
    state:string;
}