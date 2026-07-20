//https://www.rahulshettyacademy.com/client/#/auth/login

import { Locator, Page } from "@playwright/test";
import { UserCredentials } from "../types/users";

export class LoginPage {
  readonly page: Page;
  readonly emailBox: Locator;
  readonly passwordBox: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailBox = this.page.getByPlaceholder("email@example.com");
    this.passwordBox = this.page.getByPlaceholder("enter your passsword");
    this.loginBtn = this.page.getByRole("button", { name: "Login" });
  }

  async navigateTo(): Promise<void> {
    console.log("feature data is: " + process.env.ENABLE_NEW_DASHBOARD);
    console.log("URL is: " + process.env.BASE_URL);
    await this.page.goto("");
  }

  /**
   *Accepts the userCredential interface keeping the signature clean (basically accepting object but in a cleaner way)
   */

  async loginAs(user: UserCredentials): Promise<void> {
    await this.emailBox.fill(user.user);
    await this.passwordBox.fill(user.password);

    //check if role exists as this is optional
    if (user.role) {
      //select the role here
    }

    await this.loginBtn.click();
  }
}
