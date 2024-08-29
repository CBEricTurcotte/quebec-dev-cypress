const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    watchForFileChanges: false, // Prevents auto-saving (auto-reloading) on file change
  },
});
