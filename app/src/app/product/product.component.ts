import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Product } from "../types";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const partNumber = this.route.snapshot.paramMap.get("partNumber");
    this.productService
      .getProduct(partNumber)
      .subscribe(product => (this.product = product));
  }

  goBack(): void {
    this.location.back();
  }
}
