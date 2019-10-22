import ProductPrices from "./productPrices";
import ProductAttribute from "./productAttribute";
import ProductShipping from "./productShipping";

export default class Product {
  uniqueID: string;
  partNumber: string;
  fullImage: string;
  images: [string];
  name: string;
  prices: ProductPrices;
  shortDescription: string;
  longDescription: string;
  attributes: [ProductAttribute];
  shipping: ProductShipping;
  thumbnailImage: string;
  manufacture: string;

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
