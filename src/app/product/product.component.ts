import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  b:string = '../assets/images (3).jpg'
  i:number;
  arr:number[]=[]
  a:number=0;
  pro:product[]=[
    new product(1,
  'Mobile',20000,'Image','vivo',5)
    ]
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=50;i++)
    {
      this.arr.push(i);
    }
  }

  ondelete(item:product)
  {
    this.pro.splice(this.pro.indexOf(item),1)
  }
  onupdate(item: product)
  {
    if (item.soh > 4)
    {
        item.soh = item.soh + 1;
    }

}
onadd(a,b,c,d,e,f)
    {
      this.pro.push(new product(a,b,c,d,e,f));
    }
  }
