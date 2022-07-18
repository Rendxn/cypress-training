export class AddressStepPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = "button[name='processAddress']";
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}
