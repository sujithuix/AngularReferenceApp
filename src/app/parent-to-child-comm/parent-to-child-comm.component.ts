import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-parent-to-child-comm',
  templateUrl: './parent-to-child-comm.component.html',
  // styleUrls: ['./parent-to-child-comm.component.css']
})
export class ParentToChildCommComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() count: number;
  

}
