import { customElement } from "../helpers/custom-element";
import { AddedItemToBasketPage } from "./item_to_basket_page";

export class ItemDetailPage {
  constructor() {
    this.addToBasket = customElement(".add > .btn");
  }
  addItemToBasket() {
    this.addToBasket.get().click();
    return new AddedItemToBasketPage();
  }
}
