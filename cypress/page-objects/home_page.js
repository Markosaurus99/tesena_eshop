import { customElement } from "../helpers/custom-element";
import { HeaderSection } from "./header_section";
import { ItemDetailPage } from "./item_detail_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.tesenaEshopUrl = Cypress.env("tesena_eshop_url");
    this.itemTshirt = customElement(
      ":nth-child(2) > .products > :nth-child(1) > .product-miniature > .thumbnail-container > .thumbnail-top > .thumbnail > picture > img"
    );
  }
  openTesenaEshop() {
    cy.visit(this.tesenaEshopUrl);
    return this;
  }
  clickOnItemTshirt() {
    this.itemTshirt.get().click();
    return new ItemDetailPage();
  }
}
