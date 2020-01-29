# contacts-app
This is a demo microservice with parsing endpoints.

## Getting Started

1. Create a local .env file and verify node version with `npm run env:init`
    * Update the newly created .env file with your local environment variables
2. `npm install` in the root directory
3. `npm start`
4. Base url will be `http://localhost:7000/api`

## Test Coverage
Run all tests with `npm run test`. Also run unit tests only with `npm run test:unit` or integration tests only with `npm run test:integ`.
Coverage can then be found by visiting `http://localhost:7000/coverage/`

## Healthcheck endpoint
Use this endpoint to check that the service is running `http://localhost:7000/_healthz`
