import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

import { DataModel } from './../model/data.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() model:DataModel;
  @Output() myevent=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  notifyParent(){
    this.myevent.emit('Event send from child to parent');
  }

}
