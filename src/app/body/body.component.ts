import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../routinganimations';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [ slideInAnimation ]
})
export class BodyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
