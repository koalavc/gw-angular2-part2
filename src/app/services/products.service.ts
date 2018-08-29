import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private api: ApiService) { }

  calculateProducts(products){
    products.forEach(product => {
      return product.forEach();
    })
  }

  getProducts() {
    return this.api.get('/products');
  }
}
