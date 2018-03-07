import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map,filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService{
   
    private hobbies=new BehaviorSubject<any>(['coding','music']);
    public hobby=this.hobbies.asObservable();
    constructor(private http:Http){

    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(res=>res.json()));
    }

    changeHobby(hoby){
        this.hobbies.next(hoby);
    }
}

