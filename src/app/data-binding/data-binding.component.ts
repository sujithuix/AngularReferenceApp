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

text:string = "Binding";

  // 'text' is called property
  // The value of 'text' which is passed to teh template is 'Binding'

}
