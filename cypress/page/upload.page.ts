export class UploadPage {
  private uploadSiteURL: string;
  private fileInput: string;
  private submitButton: string;
  private uploadedFileNameElem: string;

  constructor() {
    this.uploadSiteURL = "https://the-internet.herokuapp.com/upload";
    this.fileInput = "#file-upload";
    this.submitButton = "#file-submit";
    this.uploadedFileNameElem = "#uploaded-files";
  }

  public visitUploadSite(): void {
    cy.visit(this.uploadSiteURL);
  }

  public uploadFile(filename: string): void {
    cy.get(this.fileInput).attachFile(filename);
    cy.get(this.submitButton).click();
  }

  public getUploadedFileName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.uploadedFileNameElem);
  }
}
