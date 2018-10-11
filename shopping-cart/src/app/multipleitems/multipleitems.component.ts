import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multipleitems',
  templateUrl: './multipleitems.component.html',
  styleUrls: ['./multipleitems.component.css']
})
export class MultipleitemsComponent implements OnInit {
  product = new Product();
  products = [this.product, this.product, this.product, this.product, this.product, this.product, this.product,this.product, this.product];
  categories = [{name: "Bakery and Bread", key: "1"}, {name: "Oils", key: "2"},{name: "Pasta and Rice", key: "3"},{name: "Cereals", key: "4"},{name: "Frozen Foods", key: "5"}]
  category:string;
  constructor(private router:Router, route:ActivatedRoute) {
    route.queryParamMap.subscribe(param=>{
      this.category = param.get('category');

    })
   }

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
