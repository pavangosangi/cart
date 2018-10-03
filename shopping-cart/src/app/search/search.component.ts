import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'search-items',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm:string = "";
  constructor() { }

  ngOnInit() {
  }

  onInputChange() {
    let regex = "/p/gi"; 
    let str="peanut";
    
      console.log("peanut".search("/p/gi"));
  }



}
