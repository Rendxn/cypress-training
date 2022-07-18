import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let expectedDressesNames: Array<string>;
  let expectedDressesNumber: number;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    expectedDressesNames = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
    expectedDressesNumber = 5;
    menuContentPage.visitMenuContentPage();
  });

  it("show the available dresses", () => {
    menuContentPage.goToDressesMenu();

    dressesListPage.validateItemsNames(expectedDressesNames);
    dressesListPage.validateItemsNumber(expectedDressesNumber);
  });
});
