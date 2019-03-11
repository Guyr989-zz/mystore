import { Product } from './../../../../../../myStore/src/app/product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  allProducts = [];

  constructor(private ps: ProductService) {
    this.ps.getProducts().subscribe(data => this.allProducts = data);
  }


  ngOnInit() {

  }

  filterInput(e) {
    var text = e.target.value.toLowerCase();
    var productName = document.getElementsByClassName('product-name');
    var items = document.getElementsByClassName('product-details');
    Array.from(productName).forEach(function (productName) {
      var itemName = productName.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        productName.parentElement.parentElement.parentElement.style.display = 'block';
      } else {
        productName.parentElement.parentElement.parentElement.style.display = 'none';
      }
    }
    );
  }

  orderItems(e) {
    // this.allProducts.sort((a, b) => a.name.rendered.localeCompare(b.name.rendered));
    console.log(e);
    console.log(this.allProducts);
  }

}
