export class OrderSummaryPage {
  private messageSelector: string;
  private _expectedMessage: string;

  public get expectedMessage(): string {
    return this._expectedMessage;
  }
  public set expectedMessage(value: string) {
    this._expectedMessage = value;
  }

  constructor() {
    this.messageSelector = ".cheque-indent .dark";
    this._expectedMessage = "Your order on My Store is complete.";
  }

  public getConfirmationMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.messageSelector);
  }
}
