import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  no1:number;
  no2:number;
  flag:number;
  ans:number;
  y="";
  constructor() { }

  ngOnInit() {
  }
  onClick1(){
    this.y+="1";
  }
  onClick2(){
    this.y+="2";
  }
  onClick3(){
    this.y+="3";
  }
  onClick4(){
    this.y+="4";
  }
  onClick5(){
    this.y+="5";
  }
  onClick6(){
    this.y+="6";
  }
  onClick7(){
    this.y+="7";
  }
  onClick8(){
    this.y+="8";
  }
  onClick9(){
    this.y+="9";
  }
  onClick0(){
    this.y+="0";
  }
  onClickplus(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=1;
  }
  onClickminus(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=2;
  }
  onClickdiv(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=3;
  }
  onClickmul(){
    this.no1=parseInt(this.y);
    this.y="";
    this.flag=4;
  }
  onClickeq(){
    this.no2=parseInt(this.y)
    if(this.flag==1){
      this.ans=this.no1+this.no2;
      this.y=this.ans+""
    }
    else if(this.flag==2){
      this.ans=this.no1-this.no2;
      this.y=this.ans+""
    }
    else if(this.flag==3){
      this.ans=this.no1/this.no2;
      this.y=this.ans+""
    }
    else{
      this.ans=this.no1*this.no2;
      this.y=this.ans+""
    }
  }
}
