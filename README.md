# Get Start

## Install NodeJS

Install NodeJS LTS version higher than 12 from: https://nodejs.org/

## Clone the repo

Use `git clone .....` in your terminal to clone the project.

## Add environment variables file

Remember to add the `.env` file in the root of project with the environment variables.

## Install all dependencies

You need to run this command in your terminal at the root of project. This will install all its dependencies using:

```bash
npm install
```

Note: the dependencies of the project are in `package.json` file.

## Util scripts

We have some util scripts in `package.json` file:

| Script                                         | Description                                         | Notes                                                                                                                      |     |     |
| ---------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| `npm run start:dev`                            | Run and start the project                           |                                                                                                                            |     |     |
| `npm run migration:generate name-of-migration` | Generate a migration with the name that you provide | If you modified or created an entity, the migration will be generated with the queries to make the changes in the database |     |     |
| `npm run migration:up`                         | Run the pending migrations                          | This will generate a migration at the root of project. You need to move to src/database/migrations                         |     |     |
| `npm run migration:down`                       | Revert the migrations                               |                                                                                                                            |     |     |
| `npm run seed:run`                             | Run seeds to get fake data in database              | The seeds are in src/database/seeds                                                                                        |     |     |
| `npm run seed:config`                          | Return the config of seeds                          | The config of seeds is in ormconfig.json file                                                                              |     |     |
| `npm run test`                                 | Run tests                                           |                                                                                                                            |     |     |
| `npm run lint`                                 | Run linter to check the format of the code          | Some rules are in tslint.json                                                                                              |     |     |

# How works the project

## Description

### What tools are we using?

The project works with TypeScript, TypeORM (as ORM and seeder), Jest (for tests) and ExpressJS (as the router).

### Structure

The source of project is in `src` folder. So, The project starts in `server.ts` file, that uses `app.ts`. This files are separated because we need to have only the server for Jest configuration.
In this source code, you can see some folders. Below is a brief description of them:

- Database: This folder contains the `dataSource.ts` file that allows the connection with the database. Also, contains some folders that have to do with database. The `migrations` folder contains the changes in the database (inserts, deletes, new tables, etc.) and you can create and do some things with them with the scripts that are in `package.json`. The `entities` folder contains the model of each entity. The `factories` folder contains the factories that are used in `seeds` folder.
- Exceptions: Contains all exceptions that the API can return.
- Middleware: Contains the **validation** middlewares.
- Components: Contains the folders that have to do with controllers of the endpoints.

### Environment variables

When you add a new environment variable, you need to add it also in the validation file of env vars `validateEnv.ts` and in the drive of the project.
