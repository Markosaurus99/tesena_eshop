import { customElement } from "../helpers/custom-element";
import { HomePage } from "./home_page";

export class RegistrationPage {
  constructor() {
    this.genderMaleRadioButton = customElement("#field-id_gender-1");
    this.firstNameInput = customElement("#field-firstname");
    this.lastNameInput = customElement("#field-lastname");
    this.emailInput = customElement("#field-email");
    this.passwordInput = customElement("#field-password");
    this.birthdayInput = customElement("#field-birthday");
    this.termsAgreementRadioButton = customElement(
      "input[value='1'][name='psgdpr']"
    );
    this.customerPrivacyRadioButton = customElement(
      "input[value='1'][name='customer_privacy']"
    );
    this.submitButton = customElement("button[type='submit']");
  }
  clickAgreePrivacy() {
    this.customerPrivacyRadioButton.get().check();
    this.customerPrivacyRadioButton.get().should("be.checked");
    return this;
  }
  clickAgreeTerms() {
    this.termsAgreementRadioButton.get().check();
    this.termsAgreementRadioButton.get().should("be.checked");
    return this;
  }
  selectGender() {
    this.genderMaleRadioButton.get().check();
    this.genderMaleRadioButton.get().should("be.checked");

    return this;
  }
  typeBirthday(birthday) {
    this.birthdayInput.get().type(birthday);
    return this;
  }
  typeFirstName(firstname) {
    this.firstNameInput.get().type(firstname);
    return this;
  }
  typeLastName(lastname) {
    this.lastNameInput.get().type(lastname);
    return this;
  }
  typeEmail(email) {
    this.emailInput.get().type(email);
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
}
