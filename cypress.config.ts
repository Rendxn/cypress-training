import { defineConfig } from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 20000;
      config.responseTimeout = 20000;

      return config;
    },
  },
});
