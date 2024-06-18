import { customElement } from "../helpers/custom-element";

export class AddedItemToBasketPage {
  constructor() {
    this.continueToCheckoutButton = customElement(
      ".cart-content-btn > .btn-primary"
    );
  }

  clickContinueToCheckout() {
    this.continueToCheckoutButton.get().click();
  }
}
