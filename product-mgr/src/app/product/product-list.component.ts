import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService) {
  }

  addProduct(product: Product) {

    this.productService.add(product)
      .subscribe(r => {
        this.fetchProducts();
      });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.query().subscribe(products => {
      this.products = products;
    });
  }
}
