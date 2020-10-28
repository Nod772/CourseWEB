import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl = "/api/Product";
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

}



