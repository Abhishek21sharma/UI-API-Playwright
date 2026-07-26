import { Page } from "@playwright/test";
import { LoginPage } from "@/pages/login.page";
import { DashboardPage } from "@/pages/dashboard.page";

export class App {
  private _loginPage?: LoginPage;
  private _dashboard?: DashboardPage;

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

  get dashboard(): DashboardPage {
    return (this._dashboard ??= new DashboardPage(this.page));
  }
}
