class ProductPrices {
  offerPrice: Number;
  listPrice: Number;
  cardPrice: Number;
  discount: Number;
  discountPercentage: Number;
  ripleyPuntos: Number;
  $$cache: {
    cached: boolean;
    created: Number;
  };
  formattedOfferPrice: String;
  formattedListPrice: String;
  formattedCardPrice: String;
  formattedDiscount: String;

  constructor() {
    this.offerPrice = 0;
    this.listPrice = 0;
    this.cardPrice = 0;
    this.discount = 0;
    this.discountPercentage = 0;
    this.ripleyPuntos = 0;
    this.$$cache = {
      cached: false,
      created: 0
    };
    this.formattedOfferPrice = "";
    this.formattedListPrice = "";
    this.formattedCardPrice = "";
    this.formattedDiscount = "";
  }
}

export default class Product {
  uniqueID: String;
  partNumber: String;
  fullImage: String;
  images: [String];
  name: String;
  prices: ProductPrices;
  shortDescription: String;
  longDescription: String;

  constructor() {
    this.uniqueID = "";
    this.partNumber = "";
    this.fullImage = "";
    this.images = [""];
    this.name = "";
    this.prices = new ProductPrices();
    this.shortDescription = "";
    this.longDescription = "";
  }
}
