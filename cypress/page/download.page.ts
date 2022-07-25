export class DownloadPage {
  private downloadSiteURL: string;
  private downloadButton: string;

  constructor() {
    this.downloadSiteURL = "https://demoqa.com/upload-download";
    this.downloadButton = "#downloadButton";
  }

  public visitDownloadSite(): void {
    cy.visit(this.downloadSiteURL);
  }

  public downloadFile(): void {
    cy.get(this.downloadButton).click();
  }
}
