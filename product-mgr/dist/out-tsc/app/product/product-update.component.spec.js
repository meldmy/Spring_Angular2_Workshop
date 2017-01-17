import { async, TestBed } from '@angular/core/testing';
import { ProductUpdateComponent } from './product-update.component';
describe('ProductUpdateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProductUpdateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProductUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/product/product-update.component.spec.js.map