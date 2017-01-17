import { Component, Output, EventEmitter } from '@angular/core';
import {Product} from "./product.model";
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  @Output() newProduct = new EventEmitter<Product>();
  addProduct(product: Product) {
    this.newProduct.emit(product);
  }
}
