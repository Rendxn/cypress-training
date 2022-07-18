export class PaymentStepPage {
  private payByBankWireBtn: string;

  constructor() {
    this.payByBankWireBtn = ".bankwire";
  }

  public payByWire(): void {
    cy.get(this.payByBankWireBtn).click();
  }
}
