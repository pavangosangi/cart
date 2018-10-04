import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'search-items',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('fade',[
      transition('',[
        style({opacity:0}),
        animate(2000)
      ]),
      transition('',[
        animate('0.5s ease-out', keyframes([
          style({ 
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
          }),
          style({ 
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
        ]))
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchTerm:string = "";
  searchResults = [];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onInputChange() {
    if(!this.searchTerm) {
      this.searchResults = [];
      return;
    }
    this.searchResults = [
      {tag:"peas", itemId: 1},
      {tag:"peanuts", itemId: 2},
      {tag:"roasted peanuts", itemId: 3},
      {tag:"pallilu", itemId: 2},
      {tag:"pea nuts", itemId: 2},
      {tag:"salted peanuts", itemId: 6},
      {tag:"peanut butter", itemId: 7},
      {tag:"palli pachadi", itemId: 8},
      {tag:"pelli patti", itemId: 9},
      {tag:"peanut cake", itemId: 10}
    ];
  }

  redirect(searchResult) {
    this.searchTerm = searchResult.tag;
    this.searchResults = [];
    //this.router.navigate(['/getItem/'+itemId]);
  }


}
