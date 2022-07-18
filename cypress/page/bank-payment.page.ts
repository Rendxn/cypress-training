export class BankPaymentPage {
  private confirmOrderBtn: string;

  constructor() {
    this.confirmOrderBtn = "#cart_navigation .button-medium";
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click();
  }
}
