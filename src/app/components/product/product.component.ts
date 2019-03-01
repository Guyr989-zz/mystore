import { element } from 'protractor';
import { ProductService } from './../../product.service';
import { Product } from './../../product';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public allProducts = [];
  public errorMsg: string;
  constructor(private productService: ProductService) { }
  message: string;


  ngOnInit() {

    this.productService.currentMessage.subscribe(message => this.message = message);

    this.productService.getProducts().subscribe(data => this.allProducts = data
      , error => this.errorMsg = 'No data avilable'
    );
  }


  newMessage(product) {
    this.productService.changeMessage(product);
  }

  remove(id) {
    for (let i = 0; i < this.allProducts.length; i++) {
      const element = this.allProducts[i];
      if (element.id == id) {
        this.allProducts.splice(i, 1);
      }
    }
  }

}
