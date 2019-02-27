import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {


  private _url = 'https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json';
  private clickMessage: string;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }

 

}
