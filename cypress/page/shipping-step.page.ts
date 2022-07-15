export class ShippingStepPage {
  private termsInput: string;

  private proceedToCheckoutBtn: string;

  constructor() {
    this.termsInput = "#cgv";
    this.proceedToCheckoutBtn = "button[name='processCarrier']";
  }

  public acceptTerms(): void {
    cy.get(this.termsInput).click();
  }

  public goToCheckout(): void {
    cy.get(this.proceedToCheckoutBtn).click();
  }
}
