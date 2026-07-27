import { Locator, Page } from "@playwright/test";

export class SignOutPage {
  readonly page: Page;
  readonly signOutBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.signOutBtn = this.page.getByRole("button", { name: "Sign Out" });
  }

  async signOut() {
    await this.signOutBtn.click();
  }
}
