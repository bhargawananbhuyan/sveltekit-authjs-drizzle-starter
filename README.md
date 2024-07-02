# SvelteKit starter with authentication using AuthJS, PostgreSQL database with Drizzle ORM and TailwindCSS

Create a .env file and fill in the values.

```
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

DATABASE_URL=
```

Any other authentication provider can be added just by getting the credentials and adding them to the `.env` with the syntax `AUTH_PROVIDER_ID` and `AUTH_PROVIDER_SECRET`. Also, we need to declare the provider in the `./src/auth.ts` file just like it's declared for GitHub provider.

New SQL tables can be added in `./src/database/schema` folder. Then it should be imported in the `index.ts` file in the same folder like it's done for the `users` table. To run generate the migrations, run `bun run db:generate` and to migrate them to the database run `bun run db:migrate`.
