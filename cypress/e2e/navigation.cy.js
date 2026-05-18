describe("Navigation tests", () => {
  it("Navigation Test 1: menu link opens inventory page", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_sidebar_link").should("be.visible").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("Navigation Test 2: visit cart then return to products", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get(".shopping_cart_link").click();
    cy.get(".title").should("have.text", "Your Cart");

    cy.get('[data-test="continue-shopping"]').click();
    cy.get(".title").should("have.text", "Products");
  });
});
