import { Component, OnInit } from '@angular/core';
import { student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stu:student[]=[
    new student(1,'lalit',8866777141,'Male','ahmedabad',12000),
    new student(2,'priyen',9624062317,'Male','ahmedabad',8000)
  ]
  rno:number;
  name:string;
  mno:number;
  gender:string;
  city:string;
  fees:number;
  i:number;
  x:number;
  constructor() { }

  ngOnInit() {
  }
  onadd()
  {
    this.stu.push(new student(this.rno,this.name,this.mno,this.gender,this.city,this.fees));
  }
  ondelete()
  {
    this.stu.splice(this.i,1);
  }
  onupdate(x)
  {
    this.stu[x].fees=parseInt(prompt('enter fees to be changed'));
  }
}
