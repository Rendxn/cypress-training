import { UploadPage } from "../page";

describe("when given a file", () => {
  let uploadPage: UploadPage;
  const filename = "example.json";

  before("visit upload demo site", () => {
    uploadPage = new UploadPage();
    uploadPage.visitUploadSite();
  });

  it("should be uploaded", () => {
    uploadPage.uploadFile(filename);

    uploadPage.getUploadedFileName().should("contain.text", filename);
  });
});
