import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: "product/:id", component: ProductComponent },
  {
    path: "products",
    component: ProductListComponent,
    data: { title: "Products List" }
  },
  { path: "", redirectTo: "/products", pathMatch: "full" }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
