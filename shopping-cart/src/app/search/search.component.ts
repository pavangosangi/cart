import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { SearchService } from '../services/search.service';

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
  constructor(private router:Router, private service:SearchService) { }

  ngOnInit() {
    //this.service.getSearchResults()
    //  .subscribe(response=> {
    //    this.posts = response.json();
    //  })
  }

  onInputChange() {
    if(!this.searchTerm) {
      this.searchResults = [];
      return;
    }
    this.searchResults = this.service.getSearchResults(this.searchTerm);
  }

  redirect(searchResult) {
    this.searchTerm = "";
    this.searchResults = [];
    this.togglePlace();
    this.toggleSearchButton();
    this.toggleButton();
    this.router.navigate(['/singleitem']);
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
