describe("Login tests", () => {
  it("Login Test 1: valid credentials land on inventory page", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("Login Test 2: invalid password shows error", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match",
    );
  });

  it("Login Test 3: empty fields show validation message", () => {
    cy.visit("/");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username is required",
    );
  });
});
