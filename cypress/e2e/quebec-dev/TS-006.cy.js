describe("TS 006 Validate Affiliates program Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Validate 'Sign Up fro an account' - TC-AP-001", () => {
    cy.get('.ml-10 > [href="/affiliates"]').click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/affiliates"
    );
    cy.get(".secondary-font").contains("Sign up for an account").click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/users/sign_in"
    );
  });
  it("Validate 'Sign Up fro an account' - TC-AP-002", () => {
    cy.get('.ml-10 > [href="/affiliates"]').click();
    cy.get('.mt-8 > [href="/affiliates/new"]')
      .contains("Sign up for an account")
      .click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/users/sign_in"
    );
  });
  it.only("Validate 'Sign Up fro an account' - TC-AP-003", () => {
    cy.get('.ml-10 > [href="/affiliates"]').click();
    cy.get("a.font-semibold.underline")
      .should("have.attr", "href", "/pricing")
      .and("have.text", "5% hiring fee");
    // .click({ multiple: true });
    // cy.url().should(
    //   "eq",
    //   "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/pricing"
    // );
  });
});
