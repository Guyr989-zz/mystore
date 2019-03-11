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

    this.productService.currentMessage.subscribe(data => this.message = data);

    this.productService.getProducts().subscribe(data => this.allProducts = data
      , error => this.errorMsg = 'No data avilable'
    );
  }


  newMessage(product) {
    this.productService.changeMessage(product);
  }

  scrollToProductDetails() {
    if (window.innerWidth < 1024) {
      let el = document.getElementById('details');
      el.scrollIntoView();
    }
  }

  remove(id: number) {
    if (confirm('You are about to delete the product. are you sure?')) {

      for (let i = 0; i < this.allProducts.length; i++) {
        const element = this.allProducts[i];
        if (element.id == id) {
          this.allProducts.splice(i, 1);
        }
      }
    }
  }

}
