describe("TS 008 Validate Contact Us Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate Contact Us - TC-CU-001", () => {
    cy.get("#contactus").scrollIntoView().should("be.visible");
  });
  it("Validate Contact Us Form - TC-CU-002", () => {
    cy.get("#contactus").scrollIntoView();
    cy.get('input[placeholder="Name"]').should("be.visible");
  });
});
