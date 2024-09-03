describe("TS 007 Validate Quebec dev Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Visits Quebec-Dev web site", () => {
    cy.visit("/");
  });
  it("Validate nav-bar elements - TC-QD-001 -", () => {
    // cy.visit("https://sleepy-springs-78051-2160681ab30d.herokuapp.com/");
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
    cy.contains("Register").and("be.visible");
  });
  it("Validate nav-bar elements - TC-QD-001 -", () => {
    cy.contains("Developers").and("be.visible");
    cy.contains("Pricing").and("be.visible");
    cy.contains("Bootcamps").and("be.visible");
    cy.contains("Affiliate program").and("be.visible");
    cy.contains("Sign in").and("be.visible");
    cy.contains("Register").and("be.visible");
  });
  it("Validate Quebec.dev icon navigation - TC-QD-002 -", () => {
    cy.contains("Developers").click();
    cy.get('svg:contains("Quebec Dev logo")').click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/"
    );
  });
  it("Validate Developers navigation - TC-QD-003 -", () => {
    cy.contains("Developers").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/"
    );
  });
  it("Validate Pricing Navigation - TC-QD-004 -", () => {
    cy.contains("Pricing").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/pricing"
    );
  });
  it("Validate Bootcamps Navigation - TC-QD-005 -", () => {
    cy.contains("Bootcamps").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/bootcamps"
    );
  });
  it("Validate Sign in navigation - TC-QD-006 -", () => {
    cy.contains("Sign in").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/users/sign_in"
    );
  });
  it("Validate Register Navigation - TC-QD-007 -", () => {
    cy.contains("Register").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/users/sign_up"
    );
  });
  it("Validate See all candidates - TC-QD-008 -", () => {
    cy.contains("See all candidates").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/developers"
    );
  });
  it("Validate Subscribe - TC-QD-009 -", () => {
    cy.contains("Subscribe").click();
    // cy.url().should(
    //   "eq",
    //   "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/"
    // );
  });
  it("Validate See all events button - TC-QD-010 -", () => {
    cy.contains("See all events").click();
    // cy.url().should(
    //   "eq",
    //   "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/"
    // );
  });
  it("Validate Propose an event button - TC-QD-011 -", () => {
    cy.contains("Propose an event").click();
    // cy.url().should(
    //   "eq",
    //   "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/"
    // );
  });
});
