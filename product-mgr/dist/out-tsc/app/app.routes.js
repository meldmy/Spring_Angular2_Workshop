import { RouterModule } from '@angular/router';
import { ProductListComponent } from "./product/product-list.component";
import { ProductUpdateComponent } from "./product/product-update.component";
var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ProductListComponent },
    { path: ':id', component: ProductUpdateComponent }
];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=D:/Angular2/ng-workshop-starter-master/product-mgr/src/app/app.routes.js.map