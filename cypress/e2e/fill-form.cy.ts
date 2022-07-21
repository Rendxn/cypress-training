import { PersonalFormPage, IPersonalFormData } from "../page";

describe("when filling a form", () => {
  const personalInformation: IPersonalFormData = {
    firstName: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
    state: "NCR",
    city: "Delhi",
  };

  const expectedModalMessage = "Thanks for submitting the form";

  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
    personalFormPage.visitFormPage();
  });

  it("should be submitted", () => {
    personalFormPage.submitForm(personalInformation);

    personalFormPage.validateItems(expectedModalMessage, personalInformation);
  });
});
