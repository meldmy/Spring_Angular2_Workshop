import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Product} from "./product.model";

@Injectable()
export class ProductService {
  baseUrl = '/data/admin/product';

  constructor(private http: Http) {
  }

  query(): Observable<Array<Product>> {
    return this.http.get(this.baseUrl).map(r => r.json());
  }

  get(id: number) : Observable<Product> {
    return this.http.get(this.baseUrl + '/' + id).map(r => r.json());
  }
  add(product: Product) : Observable<any> {
    return this.http.post(this.baseUrl, product).map(r => r.json());
  }
  update(product: Product) : Observable<any> {
    return this.http.put(this.baseUrl + '/' + product.id, product)
      .map(r => r.json());
  }

  delete(product: Product) : Observable<any> {
    return this.http.delete(this.baseUrl + '/' + product.id, product)
      .map(r => r.json());
  }
}
