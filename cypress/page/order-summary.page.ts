export class OrderSummaryPage {
  private messageSelector: string;

  constructor() {
    this.messageSelector = ".cheque-indent .dark";
  }

  public getConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.messageSelector);
  }
}
