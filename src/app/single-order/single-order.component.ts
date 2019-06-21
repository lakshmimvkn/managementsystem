import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 binding={
   sno:"1",
   details:"field name1:feild value1",
   address:"field name1:feild value1",
   contact:"field name1:feild value1"

 }

 
}
