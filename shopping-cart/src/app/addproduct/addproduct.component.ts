import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    productTitle: new FormControl(),
    productDescription: new FormControl(),
    productPrice: new FormControl(),
    productImgUrl: new FormControl()
  })

  ngOnInit() {
  }

}
