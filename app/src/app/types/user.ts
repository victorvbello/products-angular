export default class User {
  avatar: String;
  name: String;
  email: String;
  provider: String;
  token: String;

  constructor(){
    this.avatar = "";
    this.name = "";
    this.email = "";
    this.provider = "";
    this.token = "";
  }
}
