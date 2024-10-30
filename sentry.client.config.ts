// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c6dda7f21d738794f998f44bdcb4e0c5@o4504017992482816.ingest.us.sentry.io/4507792998465536",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
