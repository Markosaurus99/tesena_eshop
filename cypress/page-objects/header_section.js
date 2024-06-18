import { customElement } from "../helpers/custom-element";
import { LoginPage } from "./login_page";

export class HeaderSection {
  constructor() {
    this.signInButton = customElement(".user-info > a");
    this.basketButton = customElement("#_desktop_cart");
    this.languageSelectButton = customElement("#_desktop_language_selector");
    this.currencySelectButton = customElement("#_desktop_currency_selector");
    this.contactUsButton = customElement("#contact-link");
    this.tesenaLogo = customElement("img[alt='PrestaShop']");
    this.accountUsername = customElement(
      "a[title='Zobrazit můj zákaznický účet'] span[class='hidden-sm-down']"
    );
    this.searchBar = customElement("input[placeholder='Hledat v katalogu']");
  }
  accountUsernameHasText(username) {
    this.accountUsername.get().should("contain.text", username);
    return this;
  }
  clickSignIn() {
    this.signInButton.get().click();
    return new LoginPage();
  }
  clickBasketButton() {
    this.basketButton.get().click();
    //return BasketPage
  }
}
