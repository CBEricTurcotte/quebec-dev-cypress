describe("TS 008 Validate Contact Us Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate Contact Us - TC-CU-001", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
  });
  it.only("Validate Contact Us Form - TC-CU-002", () => {
    cy.get("#contactus").scrollIntoView();
    cy.get('input[placeholder="Name"]')
      .should("be.visible")
      .type("Test Cypress");
    cy.get('input[placeholder="Company"]')
      .should("be.visible")
      .type("Test Cypress");
    cy.get('input[placeholder="Email"]')
      .should("be.visible")
      .type("Test@Cypress.com");
    cy.get('input[placeholder="Subject"]')
      .should("be.visible")
      .type("Test Cypress");
    cy.get('textarea[placeholder="Message"]')
      .should("be.visible")
      .type("Test Cypress for contact us form");
    cy.contains("Submit");
  });
  it("Validate Name field - TC-CU-003", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.get('input[placeholder="Name"]');
  });
  it("Validate Company field - TC-CU-004", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.get('input[placeholder="Company"]');
  });
  it("Validate email field - TC-CU-005", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.get('input[placeholder="Email"]');
  });
  it("Validate Subject field - TC-CU-006", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.get('input[placeholder="Subject"]');
  });
  it("Validate Message field - TC-CU-007", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.get('textarea[placeholder="Message"]');
  });
  it("Validate Submit functionality - TC-CU-008", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
    cy.contains("Submit");
  });
});
