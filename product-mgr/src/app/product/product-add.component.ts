import {Component, Output, EventEmitter} from "@angular/core";
import {Product} from "./product.model";


@Component({
  selector: 'app-product-add',
  templateUrl:
    `<form #f="ngForm" (ngSubmit)="addProduct(f.value)">
        <input type="text" name="name" required ngModel />
        <input type="text" name="price" required ngModel />
        <button [disabled]="!f.valid">Add</button>
    </form>
    <br>`,
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  @Output() newProduct = new EventEmitter<Product>();

  addProduct(product: Product) {
    this.newProduct.emit(product);
  }
}
