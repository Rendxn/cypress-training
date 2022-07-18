class MenuContentPage {
  private tShirtMenu: string;
  private dressesMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.tShirtMenu = "li:nth-child(3) > a[title='T-shirts']";
    this.dressesMenu = ".sf-menu > li:nth-child(2) > a[title='Dresses']";
    this.menuContentPageURL = "http://automationpractice.com/";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}

export { MenuContentPage };
