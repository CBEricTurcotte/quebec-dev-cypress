describe("Quebec-Dev e2e", () => {
  it("Visits Quebec-Dev web site", () => {
    cy.visit("https://sleepy-springs-78051-2160681ab30d.herokuapp.com/");
  });
//   it.skip("Validate nav-bar elements TC-QD-001 ", () => {
//     cy.get('.ml-10 > [href="/developers"]').should("be.visible");
//   });
});
