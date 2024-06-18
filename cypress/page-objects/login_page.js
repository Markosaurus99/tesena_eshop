import { customElement } from "../helpers/custom-element";
import { HomePage } from "./home_page";
import { RegistrationPage } from "./registration_page";

export class LoginPage {
  constructor() {
    this.emailInput = customElement("#field-email");
    this.passwordInput = customElement("#field-password");
    this.submitButton = customElement("#submit-login");
    this.registerButton = customElement("div[class='no-account'] a");
  }

  typeEmail(email) {
    this.emailInput.get().type(email);
    this.emailInput.get().should("contain.text", email);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }
  clickSubmit() {
    this.submitButton.get().click();
    return new HomePage();
  }
  clickRegister() {
    this.registerButton.get().click();
    return new RegistrationPage();
  }
}
