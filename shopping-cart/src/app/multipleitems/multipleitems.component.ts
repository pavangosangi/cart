import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multipleitems',
  templateUrl: './multipleitems.component.html',
  styleUrls: ['./multipleitems.component.css']
})
export class MultipleitemsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
