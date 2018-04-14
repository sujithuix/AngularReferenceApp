import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Data binding
  //interpolation

  text: string = "Binding";

  // 'text' is called property
  // The value of 'text' which is passed to teh template is 'Binding'

  getTitle(): string {
    return this.text;
  }
  carMake: string = "BMW";
  carModel: string = "M5";

  color: string = "#e88e1a";

// event and property binding binding

  clickCount: number = 0;

  clickCounter() {
    this.clickCount = this.clickCount+1;
    console.log('clicked')
  }

  // Two way binding using ng-model
  
   formFeildValue: string ="";
   
   
}
