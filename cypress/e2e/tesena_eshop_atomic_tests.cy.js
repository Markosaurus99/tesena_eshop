import { HomePage } from "../page-objects/home_page";

describe("Tesena Eshop Header Section Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    new HomePage().openTesenaEshop();
  });
  it("Tesena logo is visible", () => {
    new HomePage().tesenaLogo.isVisible();
  });

  it("Contact us button is visible", () => {
    new HomePage().contactUsButton.isVisible();
  });

  it("Contact us button has text", () => {
    new HomePage().contactUsButton.containsText("Kontaktujte nás");
  });

  it("Login button is visible", () => {
    new HomePage().signInButton.isVisible();
  });

  it("Login button has text", () => {
    new HomePage().signInButton.containsText("Přihlásit se");
  });

  it("Currency selector is visible", () => {
    new HomePage().currencySelectButton.isVisible();
  });

  it("Currency selector has text", () => {
    new HomePage().currencySelectButton.containsText("Měna");
  });

  it("Basket button is visible", () => {
    new HomePage().basketButton.isVisible();
  });

  it("Basket button has text", () => {
    new HomePage().basketButton.containsText("Košík");
  });

  it("Searchbar is visible", () => {
    new HomePage().searchBar.isVisible();
  });

  it("Language selector is visible", () => {
    new HomePage().languageSelectButton.isVisible();
  });
});
