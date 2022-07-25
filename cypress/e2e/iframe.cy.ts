import { IframePage } from "cypress/page";

describe("iframe navigation and meta", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
    iframePage.visit();
  });

  it("should have a title", () => {
    iframePage.getFrameTitle().should("eq", "HTML Tutorial");
  });

  it("should navigate inside iframe", () => {
    iframePage.goToCssPageInFrame();
    iframePage.getFrameTitle().should("eq", "CSS Tutorial");
  });
});
