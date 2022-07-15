export class ProductAddedModalPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = "a[title='Proceed to checkout']";
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}
