import { UploadPage, DownloadPage } from "../page";
import { join } from "path";

describe("when using files", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  const uploadFilename = "example.json";
  const downloadFilename = "sampleFile.jpeg";
  const downloadFolder = "cypress/downloads";
  const downloadPathname = join(downloadFolder, downloadFilename);

  before("visit upload demo site", () => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });

  it("should be uploaded", () => {
    uploadPage.visitUploadSite();
    uploadPage.uploadFile(uploadFilename);
    uploadPage.getUploadedFileName().should("contain.text", uploadFilename);
  });

  it("should be downloaded", () => {
    downloadPage.visitDownloadSite();
    downloadPage.downloadFile();
    cy.readFile(downloadPathname).should("exist");
  });
});
