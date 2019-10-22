import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { SwiperConfigInterface, SwiperComponent } from "ngx-swiper-wrapper";

import { Product } from "../types";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: Product;
  quantity = 1;
  selectedImage = 0;

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: "horizontal",
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const partNumber = this.route.snapshot.paramMap.get("partNumber");
    this.productService
      .getProduct(partNumber)
      .subscribe(product => (this.product = product));
  }

  navSwiper(index: number) {
    this.selectedImage = index;
    this.componentRef.directiveRef.setIndex(index);
  }

  onIndexChange(index: number): void {
    this.selectedImage = index;
  }

  changeQuantity(value: number) {
    console.log(this.product);
    const result = this.quantity + value;
    this.quantity = result > 1 ? result : 1;
  }
}
