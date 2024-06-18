import { HomePage } from "../page-objects/home_page";
import { faker } from "@faker-js/faker";
import moment from "moment";

describe("Tesena eshop e2e tests", () => {
  it("Register, login, add item to basket  ", () => {
    const randomFirstname = faker.person.firstName();
    const randomLastname = faker.person.lastName();
    const randomEmail = faker.internet.exampleEmail();
    const randomPassword = faker.internet.password();
    const randomBirthDate = moment().format("DD.MM.YYYY");

    new HomePage()
      .openTesenaEshop()
      .clickSignIn()
      .clickRegister()
      .selectGender()
      .typeFirstName(randomFirstname)
      .typeLastName(randomLastname)
      .typeEmail(randomEmail)
      .typePassword(randomPassword)
      .typeBirthday(randomBirthDate)
      .clickAgreeTerms()
      .clickAgreePrivacy()
      .clickSubmit()
      .accountUsernameHasText(randomFirstname + " " + randomLastname)
      .clickOnItemTshirt()
      .addItemToBasket()
      .clickContinueToCheckout();
    // Test bych dokončil, ale zastavil jsem se na tom, že mi item zmizí z košíku
  });
});
