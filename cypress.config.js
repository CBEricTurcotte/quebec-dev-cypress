const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://sleepy-springs-78051-2160681ab30d.herokuapp.com/", // Add the base URL here
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    watchForFileChanges: false, // Prevents auto-saving (auto-reloading) on file change
    chromeWebSecurity: false,
  },
});
