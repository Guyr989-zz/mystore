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
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.allProducts = data);
  }

  remove(i) {
   
  }

}
