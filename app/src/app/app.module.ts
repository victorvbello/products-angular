import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { httpInterceptorProviders } from "./http-interceptors/index";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
