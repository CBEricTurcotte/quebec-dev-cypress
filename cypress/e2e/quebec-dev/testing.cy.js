describe("Quebec-Dev e2e", () => {
  it("Visits Quebec-Dev web site", () => {
    cy.visit("https://sleepy-springs-78051-2160681ab30d.herokuapp.com/");
  });
  it("Validate nav-bar elements - TC-QD-001 -", () => {
    cy.visit("https://sleepy-springs-78051-2160681ab30d.herokuapp.com/");
    cy.get(".max-w-7xl > .justify-between > :nth-child(1)").should(
      "be.visible"
    );
    cy.get('.ml-10 > [href="/developers"]')
      .should("be.visible")
      .and("have.text", "Developers");
    cy.get('.ml-10 > [href="/pricing"]').and("have.text", "Pricing");
    cy.get('.ml-10 > [href="/bootcamps"]').and("have.text", "Bootcamps");
    cy.get('.ml-10 > [href="/affiliates"]').and(
      "have.text",
      "Affiliate program"
    );
    cy.get(".ml-4 > .text-red-100").and("have.text", "Sign in");
    cy.get(".ml-4 > .relative").and("have.text", "Register");
    cy.contains("Register");
  });
});
