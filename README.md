# Pre-req:

1. node
2. npm

# Install all project dependencies using: npm install

including but not limited to:

- playwright
- dotenv
- faker
- cross-env
- zod

# Install playwright browsers:

- npx playwright install

# Add app credentials in the corresponding env file

example: .env.qa
VALID_EMAIL, VALID_PWD

# head to script section and pick up any script which will kick start a test

for example: to runt his script: test:qa:headed:mock

- go to the project root and run following
- npm run test:qa:headed:mock

# To run a gerenal test

- npx playwright test path/to/filename.spec.ts --headed

# To start execution in debug mode

- npx playwright test --ui
