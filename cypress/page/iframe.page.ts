export class IframePage {
  private cssNavElement: string;
  private pageURL: string;
  private iframeTitle: string;
  private iframeSelector: string;
  private cssFrameUrl: string;

  constructor() {
    this.cssNavElement = "a[title='CSS Tutorial']";
    this.pageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeTitle = "#main h1";
    this.iframeSelector = "iframe[title='W3Schools HTML Tutorial']";
    this.cssFrameUrl = "https://www.w3schools.com/css/";
  }

  public visit(): void {
    cy.visit(this.pageURL);
  }

  public getFrameTitle(): Cypress.Chainable<string> {
    return cy.iframe(this.iframeSelector).find(this.iframeTitle).invoke("text");
  }

  public goToCssPageInFrame(): void {
    cy.iframe(this.iframeSelector).find(this.cssNavElement).click();
    this.frameNavigated();
  }

  private frameNavigated(): void {
    cy.frameLoaded(this.iframeSelector, {
      url: this.cssFrameUrl,
    });
  }
}
