import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://192.168.0.109:9999/product'

  constructor(private http: HttpClient) { }

  getProduct()
  {
    return this.http.get(this.url);
  }
}
