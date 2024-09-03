describe("TS 004 Validate Pricing Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate nav-bar Pricing Functionality - TC-PRI-001", () => {
    cy.get('.ml-10 > [href="/pricing"]').click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/pricing"
    );
  });
  it.only("Validate Go Monthly button - TC-PRI-002", () => {
    cy.get('.ml-10 > [href="/pricing"]').click();
    cy.get(".mt-4.flex").should(
      "have.text",
      "\n            $99\n            /month\n          "
    );
    cy.get("a.font-medium.text-red-950.underline").should(
      "have.attr",
      "href",
      "#hiring-fee"
    );
    cy.get(":nth-child(3) > .secondary-font > .button_to > .block").should(
      "have.text",
      "Go Monthly. Cancel Anytime"
    );
  });
});
