const { defineConfig } = require("cypress");

module.exports = defineConfig({
  crashReporting: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
    pageLoadTimeout: 180000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    chromeWebSecurity: false,
    blockHosts: ["events.backtrace.io", "*.backtrace.io"],
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
