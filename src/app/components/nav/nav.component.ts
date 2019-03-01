import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filterInput(e) {
    var text = e.target.value.toLowerCase();
    var productName = document.getElementsByClassName('product-name');
    var items = document.getElementsByClassName('product-details');
    Array.from(productName).forEach(function (productName) {
      var itemName = productName.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        productName.parentNode.parentNode.parentNode.style.display = 'block';
      } else {
        productName.parentNode.parentNode.parentNode.style.display = 'none';
      }
    }
    );
  }

}
