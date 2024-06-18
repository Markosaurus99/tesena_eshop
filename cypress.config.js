const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    tesena_eshop_url: "http://37.27.17.198:8084/cs/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
