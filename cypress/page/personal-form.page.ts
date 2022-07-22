/* eslint-disable cypress/no-force */
class PersonalFormPage {
  private personalFormPageURL: string;
  private firstNameInput: string;
  private lastNameInput: string;
  private emailInput: string;
  private genderInput: string;
  private birthInput: string;
  private mobileInput: string;
  private hobbiesInput: string;
  private addressInput: string;
  private stateInput: string;
  private cityInput: string;
  private submitButton: string;
  private modal: string;

  constructor() {
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form";
    this.firstNameInput = "#firstName";
    this.lastNameInput = "#lastName";
    this.emailInput = "#userEmail";
    this.genderInput = "input[name='gender']";
    this.birthInput = "#dateOfBirthInput";
    this.mobileInput = "#userNumber";
    this.hobbiesInput = "#hobbiesWrapper input[type='checkbox']";
    this.addressInput = "#currentAddress";
    this.stateInput = "#state input";
    this.cityInput = "#city input";
    this.submitButton = "#submit";
    this.modal = ".modal-content";
  }

  public visitFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }

  public submitForm(data: IPersonalFormData): void {
    cy.get(this.firstNameInput).type(data.firstName);
    cy.get(this.lastNameInput).type(data.lastName);
    cy.get(this.emailInput).type(data.email);
    cy.get(this.genderInput)
      .filter(`[value="${data.gender}"]`)
      .check({ force: true });
    cy.get(this.birthInput).type("{selectall}").type(data.dateOfBirth);
    data.hobbies.forEach((hobbie) => {
      cy.get(this.hobbiesInput)
        .filter(`[value="${HobbiesOptions[hobbie]}"]`)
        .check({ force: true });
    });
    cy.get(this.mobileInput).type(data.mobileNumber);
    cy.get(this.addressInput).type(data.currentAddress);
    cy.get(this.stateInput).type(data.state, { force: true }).type("{enter}");
    cy.get(this.cityInput).type(data.city, { force: true }).type("{enter}");
    cy.get(this.submitButton).type("{enter}", { force: true });
  }

  public validateItems(
    expectedMessage: string,
    expectedValues: IPersonalFormData
  ) {
    const date = new Date(expectedValues.dateOfBirth);
    const month = date.toLocaleString("default", {
      month: "long",
    });
    const day = date.getDate();
    const year = date.getFullYear();

    cy.get(this.modal).should("contain", expectedValues.firstName);
    cy.get(this.modal).should("contain", expectedValues.lastName);
    cy.get(this.modal).should("contain", expectedValues.email);
    cy.get(this.modal).should("contain", expectedValues.mobileNumber);
    cy.get(this.modal).should("contain", expectedValues.gender);
    cy.get(this.modal).should("contain", expectedValues.hobbies.join(", "));
    cy.get(this.modal).should("contain", `${day} ${month},${year}`);
    cy.get(this.modal).should("contain", expectedValues.currentAddress);
    cy.get(this.modal).should("contain", expectedValues.state);
    cy.get(this.modal).should("contain", expectedValues.city);
    cy.get(this.modal).should("contain", expectedMessage);
  }
}

interface IPersonalFormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  mobileNumber: string;
  hobbies: Array<"Sports" | "Reading" | "Music">;
  currentAddress: string;
  state: string;
  city: string;
}

const HobbiesOptions = {
  Sports: 1,
  Reading: 2,
  Music: 3,
} as const;

export { PersonalFormPage, IPersonalFormData };
