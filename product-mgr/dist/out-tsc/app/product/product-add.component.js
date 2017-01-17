var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
export var ProductAddComponent = (function () {
    function ProductAddComponent() {
        this.newProduct = new EventEmitter();
    }
    ProductAddComponent.prototype.addProduct = function (product) {
        this.newProduct.emit(product);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ProductAddComponent.prototype, "newProduct", void 0);
    ProductAddComponent = __decorate([
        Component({
            selector: 'app-product-add',
            templateUrl: './product-add.component.html',
            styleUrls: ['./product-add.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductAddComponent);
    return ProductAddComponent;
}());
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/product/product-add.component.js.map