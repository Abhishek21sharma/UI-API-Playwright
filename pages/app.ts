import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class App {
  //private properties
  //look at the naming convention
  private _loginPage?: LoginPage;

  //it will create a page property and assigned it to
  constructor(private page: Page) {}

  /**
   * Getter methods to return pages if they don't exists , otherwise return the already created one
   */

  get login(): LoginPage {
    return (this._loginPage ??= new LoginPage(this.page));

    //it means is ??=
    //if (this._loginPage === null || this._loginPage === undefined) {
    //this._loginPage = new LoginPage(this.page);
    //}
    //return this._loginPage;
  }
}
