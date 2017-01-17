import { async, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
describe('ProductListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/product/product-list.component.spec.js.map