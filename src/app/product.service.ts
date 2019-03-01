import { catchError } from 'rxjs/operators';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {


  private _url = 'https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json';
  private messageSource = new BehaviorSubject<any>('default message');

  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }


  changeMessage(message: any) {
    this.messageSource.next(message);
  }

}
