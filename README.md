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

then command to launch the sentry wizard:

```shell
npx @sentry/wizard@latest -i nextjs
```






