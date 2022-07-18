export class SignInStepPage {
  private sigInBtn: string;
  private emailInput: string;
  private passwdInput: string;

  constructor() {
    this.sigInBtn = "#SubmitLogin > span";
    this.emailInput = "#email";
    this.passwdInput = "#passwd";
  }

  public signIn(
    email = "aperdomobo@gmail.com",
    passwd = "WorkshopProtractor"
  ): void {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwdInput).type(passwd);
    cy.get(this.sigInBtn).click();
  }
}
