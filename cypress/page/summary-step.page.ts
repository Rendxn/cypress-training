export class SummaryStepPage {
  private proceedToCheckoutBtn: string;

  constructor() {
    this.proceedToCheckoutBtn = ".standard-checkout";
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}
