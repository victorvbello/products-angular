import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./services/auth/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: "product/:partNumber",
    component: ProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "products",
    component: ProductListComponent,
    canActivate: [AuthGuardService],
    data: { title: "Products List" }
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
