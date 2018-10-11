import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, animate, keyframes, style, state, group, query } from '@angular/animations';  

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css'],
  animations: [
    trigger('bounce',[
      state('bounceOut', style({
        opacity: 1
      })),
      state('bounceIn', style({
        opacity: 1
      })),
      transition('bounceIn=>bounceOut',[
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
      transition('bounceOut=>bounceIn',[
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
      ])
    ])
  ]
})
export class SingleitemComponent implements OnInit {
  product = new Product();
  @Input() cartNumber;
  isCartBounceOut:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartNumber += 1;
    this.toggleBounceButton();
  }

  backToSearch() {
    this.router.navigate(['/']);
  }

  toggleBounceButton() {
    this.isCartBounceOut = !this.isCartBounceOut;
  }


}

export class Product {
  itemId = 1;
  productDescription="These are export quality peanuts.";
  price = 10.00;
  productTitle = "Peanuts";
  productTags = ['peanuts', 'pallilu', 'groundnuts', 'verusenagapappu'];
  productImgUrl = "https://www.healthline.com/hlcmsresource/images/AN_images/AN288-Peanuts-Shells-732x549-thumb.jpg";
}
