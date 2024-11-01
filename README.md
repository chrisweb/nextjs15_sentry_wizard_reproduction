# Next.js 15 and sentry wizard

This project uses Next.js 15, it has a typescript configuration file for Next.js (next.config.ts is a new feature that got introduced in Next.js)

The problem: when using the Sentry wizard and you have a next.config.ts file, then the wizard will still create a next.config.js file

What is expected: Sentry wizard should detect the next.config.ts file and edit it (and not create a separate next.config.js)

## installation

command to launch CNA:

```shell
npx create-next-app@canary ./ --use-npm --typescript
```

CNA Q&A:

I didn't install ESLint and Tailwind to save time

```shell
√ Would you like to use ESLint? ... No
√ Would you like to use Tailwind CSS? ... No
√ Would you like your code inside a `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to use Turbopack for next dev? ... Yes
√ Would you like to customize the import alias (@/* by default)? ... Yes
√ What import alias would you like configured? ... @/*
```

If you then use the npx command for the wizard you will get this dependency error:

```shell
npm error ERESOLVE unable to resolve dependency tree
│  npm error
│  npm error While resolving: nextjs15_sentry_wizard_reproduction@0.1.0
│  npm error Found: next@15.0.3-canary.1
```

So before attempting to use the wizard you need to manually update the package.json and this overrides block:

```shell
    "overrides": {
        "next": "15.0.3-canary.1"
    }
```

Then you can use the command to launch the sentry wizard:

```shell
npx @sentry/wizard@latest -i nextjs
```

You get the warning about Turbo not being fully supported:

> Warning: The Sentry SDK doesn't yet fully support Turbopack in dev mode. The SDK will not be loaded in the browser, and serverside instrumentation will be inaccurate or incomplete. Production builds will still fully work. To continue this setup, if you are using Turbopack, temporarily remove `--turbo` from your dev command until you have verified the SDK is working as expected.

When the wizard is done, we remove the turbo flag from dev server command (as promised to the wizard):

```json
    "scripts": {
        "dev": "next dev",
        "dev-turbo": "next dev --turbopack",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
```

(I added a new turbo-dev script as backup)