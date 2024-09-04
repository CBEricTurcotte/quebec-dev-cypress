describe("TS 005 Validate Bootcamps Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Bootcamps Functionality - TC-BOO-000", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
    cy.url().should(
      "eq",
      "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/bootcamps"
    );
  });
  it("Validate CodeBoxx Academy link 'below coding bootcamps' - TC-BOO-001", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
    cy.get("figcaption.text-center")
      .find("a.underline")
      .should("have.text", "CodeBoxx Academy")
      .invoke("attr", "href")
      .then((href) => {
        // Do something with the href, like logging it
        cy.log(href);
      });
  });
  it("Validate CodeBoxx Academy link 'after Saint Petersburg' - TC-BOO-002", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
  });
  it("Validate CodeBoxx Academy link 'below About Codeboxx' - TC-BOO-003", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
  });
  it("Validate Learn More Button - TC-BOO-004", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
  });
  it("Validate CodeBoxx Foundation link - TC-BOO-005", () => {
    cy.get('.ml-10 > [href="/bootcamps"]').click();
  });
});
