var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./product.service";
export var ProductUpdateComponent = (function () {
    function ProductUpdateComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.fetchProduct(id);
        });
    };
    ProductUpdateComponent.prototype.fetchProduct = function (id) {
        var _this = this;
        this.productService.get(id)
            .subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductUpdateComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.update(this.product)
            .subscribe(function (r) {
            _this.router.navigate(['/', 'list']);
        });
    };
    ProductUpdateComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }
        this.productService.delete(this.product)
            .subscribe(function (r) {
            _this.router.navigate(['/', 'list']);
        });
    };
    ProductUpdateComponent = __decorate([
        Component({
            selector: 'app-product-update',
            templateUrl: './product-update.component.html',
            styleUrls: ['./product-update.component.css']
        }), 
        __metadata('design:paramtypes', [ProductService, ActivatedRoute, Router])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/product/product-update.component.js.map