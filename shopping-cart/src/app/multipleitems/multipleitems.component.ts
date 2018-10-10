import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multipleitems',
  templateUrl: './multipleitems.component.html',
  styleUrls: ['./multipleitems.component.css']
})
export class MultipleitemsComponent implements OnInit {
  product = new Product();
  products = [this.product, this.product, this.product, this.product, this.product, this.product, this.product,this.product, this.product];
  constructor(private router:Router) { }

  ngOnInit() {
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
