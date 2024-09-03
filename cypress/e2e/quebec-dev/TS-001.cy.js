describe("TS 001 Validate Register Account page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it.skip("Register Functionality - TC-RF-001", () => {
    cy.contains("Register").click();
  });
  it("Validate Page URL - TC-RF-002 -", () => {
    cy.contains("Register").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/users/sign_up"
    );
  });
  it("Validate Register Fields - TC-RF-003 -", () => {
    cy.contains("Register").click();
    cy.get(".mt-6").contains("Create your account");
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
    cy.get("#user_password_confirmation").should("be.visible");
    cy.get(":nth-child(6) > .w-full")
      .should("be.visible")
      .and("have.text", "Register");
  });
  it.only("Validate E-mail Fields - TC-RF-004 -", () => {
    cy.contains("Register").click();
    cy.get("#user_email").type("test.gmail.com").focus();
    cy.get(":nth-child(6) > .w-full").and("have.text", "Register").click();
    cy.get(".error-message-selector").should("be.visible");
  });
});
