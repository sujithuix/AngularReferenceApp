import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reference App';

 
  Counter:number = 5;

  Increment(){
     this.Counter++;
     console.log(this.Counter);
  }

  Decrement(){
    this.Counter--;
    console.log(this.Counter);
  }

}
