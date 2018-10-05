import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';

@Component({
  selector: 'search-items',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('fadeSearchButton',[
      state('fadeOut', style({
        opacity: 1
      })),
      state('fadeIn', style({
        opacity: 0
      })),
      transition('fadeIn=>fadeOut',[
        animate('0.75s', keyframes([
          style({ offset: 0,
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          }),
          style({ offset: .2,
            opacity: 1,
            transform: 'scale3d(1.1, 1.1, 1.1)'
          }),
          style({ offset: .4,
            transform: 'scale3d(0.9, 0.9, 0.9)'
          }),
          style({ offset: .6,
            transform: 'scale3d(1.03, 1.03, 1.03)'
          }),
          style({ offset: .8,
            transform: 'scale3d(0.97, 0.97, 0.97)'
          }),
          style({ offset: 1,
            transform: 'scale3d(1, 1, 1)'
          }),
        ]))
      ]),
      transition('fadeOut=>fadeIn',[
        animate('0.75s', keyframes([
          style({ offset: 0,
            transform: 'scale3d(1, 1, 1)'
          }),
          style({ offset: .2,
            transform: 'scale3d(0.97, 0.97, 0.97)'
          }),
          style({ offset: .4,
            transform: 'scale3d(1.03, 1.03, 1.03)'
          }),
          style({ offset: .6,
            transform: 'scale3d(0.9, 0.9, 0.9)'
          }),
          style({ offset: .8,
            opacity: 1,
            transform: 'scale3d(1.1, 1.1, 1.1)'
          }),
          style({ offset: 1,
            opacity: 0,
            transform: 'scale3d(0.3, 0.3, 0.3)'
          })
        ]))
      ])
    ]),

    trigger('fade',[
      state('oldplace',style({
        opacity:0
      })),
      
      state('newplace',style({
        opacity:1
      })),

      transition('oldplace=>newplace',[
        animate('0.5s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
          style({ offset: 0,
            opacity: 0,
            transform: 'translateX(-200%)'
          }),
          style({ offset: .6,
            opacity: 1,
            transform: 'translateX(25px)'
          }),
          style({ offset: .75,
            opacity: 1,
            transform: 'translateX(-10px)'
          }),
          style({ offset: .9,
            opacity: 1,
            transform: 'translateX(5px)'
          }),
          style({ 
            offset: 1,
            opacity: 1,
            transform: 'translateX(0px)'
          })
        ]))
      ]),
      transition('newplace=>oldplace',[
        animate('0.5s ease-out', keyframes([
          style({ 
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
          }),
          style({ 
            offset: 1,
            opacity: 0,
            transform: 'translateX(-200%)'
          }),
        ]))
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchTerm:string = "";
  searchResults = [];
  atOldPlace:boolean=false;
  isSearchButtonFadeOut:boolean = false;
  isSearchButtonDisabled:boolean = true;
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
    this.searchTerm = "";
    this.searchResults = [];
    this.togglePlace();
    this.toggleSearchButton();
    this.toggleButton();
    //this.router.navigate(['/getItem/'+itemId]);
  }

  togglePlace() {
    this.atOldPlace = !this.atOldPlace;
  }

  toggleSearchButton() {
    this.isSearchButtonFadeOut = !this.isSearchButtonFadeOut;
  }

  toggleButton() {
    this.isSearchButtonDisabled = !this.isSearchButtonDisabled;
  }

  switchBoth() {
    this.togglePlace();
    this.toggleSearchButton();
    this.toggleButton();
  }


}
