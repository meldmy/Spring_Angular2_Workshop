import { async, TestBed } from '@angular/core/testing';
import { ProductAddComponent } from './product-add.component';
describe('ProductAddComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductAddComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/product/product-add.component.spec.js.map