export default class ProductPrices {
  offerPrice: number;
  listPrice: number;
  cardPrice: number;
  discount: number;
  discountPercentage: number;
  ripleyPuntos: number;
  $$cache: {
    cached: boolean;
    created: number;
  };
  formattedOfferPrice: string;
  formattedListPrice: string;
  formattedCardPrice: string;
  formattedDiscount: string;

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
