import ProductPrices from "./productPrices";
import ProductAttribute from "./productAttribute";
import ProductShipping from "./productShipping";

export default class Product {
  uniqueID: String;
  partNumber: String;
  fullImage: String;
  images: [String];
  name: String;
  prices: ProductPrices;
  shortDescription: String;
  longDescription: String;
  attributes: [ProductAttribute];
  shipping: ProductShipping;
  thumbnailImage: String;
  manufacture: String;

  constructor() {
    this.uniqueID = "";
    this.partNumber = "";
    this.fullImage = "";
    this.images = [""];
    this.name = "";
    this.prices = new ProductPrices();
    this.shortDescription = "";
    this.longDescription = "";
    this.attributes = [new ProductAttribute()];
    this.shipping = new ProductShipping();
    this.thumbnailImage = "";
  }
}
