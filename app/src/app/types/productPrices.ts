export default class ProductPrices {
  offerPrice: Number;
  listPrice: Number;
  cardPrice: Number;
  discount: Number;
  discountPercentage: Number;
  ripleyPuntos: Number;
  $$cache: {
    cached: Boolean;
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
