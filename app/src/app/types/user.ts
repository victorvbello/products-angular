export default class User {
  avatar: string;
  name: string;
  email: string;
  provider: string;
  token: string;

  constructor() {
    this.avatar = "";
    this.name = "";
    this.email = "";
    this.provider = "";
    this.token = "";
  }
}
