import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  arr:Task[]=[
    new Task(1,'email to manager','pending'),
    new Task(2,'push your code to github','pending'),
    new Task(3,'Go for movie','done')
  ]
  staarr:string[]=[
   'done',
   'pending'
  ]
  ondelete(item:Task)
  {
    this.arr.splice(this.arr.indexOf(item),1);
  }
  onupdate(item:Task)
  {
    if (item.Status == 'done')
    {
      item.Status = 'pending';
    }
    else {
      item.Status = 'done';
    }
  }
  onadd(x,y,z)
  {
    this.arr.push(new Task(x,y,z));
  }
  constructor() { }

  ngOnInit() {
  }

}
