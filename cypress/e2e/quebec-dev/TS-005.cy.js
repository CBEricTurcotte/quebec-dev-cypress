describe("TS 005 Validate Bootcamps Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Register Functionality - TC-RF-001", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
  });
});
