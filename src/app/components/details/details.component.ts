import { element } from 'protractor';
import { Product } from './../../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  product: Product;
  successMsg: string;
  errMsg: string = '';
  element: string;
  isValid: boolean;


  ngOnInit() {
    this.productService.currentMessage.subscribe(message => this.product = message);
  }

  validateValues() {
    let currentProduct = Object.values(this.product);
    for (let i = 0; i < currentProduct.length; i++) {
      if (this.product.name === '') {
        this.errMsg = 'Please fill product name';
        this.isValid = false;
      }
      else if (currentProduct[i] === '') {
        this.errMsg = 'Please fill all fiels'
        this.isValid = false;
      }
      else if (currentProduct[i] < 1) {
        this.errMsg = `The price (${this.product.price}) is not valid`;
        this.isValid = false;
      }
    }
  }




  saveProduct() {
    this.isValid = true;
    this.product = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      id: this.product.id,
      date: this.product.date,
      thumbnailUrl: this.product.thumbnailUrl,
      url: this.product.url
    };

    this.validateValues();
    this.successMsg = '';
    if (this.isValid) {
      this.errMsg = '';
      this.successMsg = `Thank you for updating product: ${this.product.name}`;
    }

  }

}
