describe("Assertions, aliases, and custom commands", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Assertion Practice: login button is visible", () => {
    cy.get('[data-test="login-button"]').should("be.visible");
  });

  it("Assertion Practice: login logo has exact text", () => {
    cy.get(".login_logo").should("have.text", "Swag Labs");
  });

  it("Assertion Practice: username input has placeholder", () => {
    cy.get('[data-test="username"]').should(
      "have.attr",
      "placeholder",
      "Username",
    );
  });

  it("Negative Assertion: error message is not visible on load", () => {
    cy.get('[data-test="error"]').should("not.exist");
  });

  it("Alias Practice: reuse aliased element", () => {
    cy.get('[data-test="username"]').as("usernameInput");
    cy.get("@usernameInput").type("standard_user");
    cy.get("@usernameInput").should("have.value", "standard_user");
  });

  it("Custom Command: login helper works", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });
});
