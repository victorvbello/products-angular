export default class ProductAttribute {
  displayable: boolean;
  name: string;
  usage: string;
  value: string;
  constructor() {
    this.displayable = false;
    this.name = "";
    this.usage = "";
    this.value = "";
  }
}
