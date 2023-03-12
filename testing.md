[View original](https://www.nerd.vision/post/testing-a-typescript-project-with-jest-ts-jest)

---

#### **Prerequisites**

First, if we haven’t already, we need to install typescript and Jest

`y‍arn add --dev jest typescript`

#### **Installation**

Now we’ve installed Jest we can install **ts-jest** and its typings

‍`y‍arn add --dev ts-jest @types/jest`

#### **Basic Configuration**

We’re almost ready to test our code, but before we do, we need to configure our test environment. To do this, we need to generate our Jest config file:

`y‍arn ts-jest config:init`

You should now see a **jest.config.js** file in your project directory, and it should look something like this:

#### **Additional Configuration (Optional)**

We’d like to add a few more configurations to get even more from our test setup. Firstly, we’re going to add code coverage by adding the following:

![](https://assets.website-files.com/5c7536fc6fa90e7dbc27598f/5eff40019f73dd683fa8afa4_Screenshot%202020-07-03%20at%2016.25.35.png align="left")

This will report our code coverage in the console whenever we run the tests. In addition to this, it will also generate a report we can use in automated builds or as a visual representation of where the uncovered code branches, statements, functions and lines are located. These results will be created and stored in a new coverage directory, automatically generated when the tests are run.

![](https://assets.website-files.com/5c7536fc6fa90e7dbc27598f/5eff403fb2b4903c44b04b00_Screenshot%202020-07-03%20at%2016.27.01.png align="left")

We’d also like to have our tests have a coverage threshold so we can ensure code is tested to a sufficient standard. I’ve added a few extra options to my setup, here’s a quick overview of them:

![](https://assets.website-files.com/5c7536fc6fa90e7dbc27598f/5eff406223ddd8cfb6319dc4_Screenshot%202020-07-03%20at%2016.27.35.png align="left")

If you’ve been following along thus far, your complete **jest.config.js** should look like this:

```json
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      statements: 100,
      lines: 100,
    },
  },
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  roots: ["<rootDir>/src"],
};
```

#### **Creating a test**

Now, let's run the test and see the fruits of our labor:

`yarn test`

If you would like a more visual representation of the lines or branches you still need to cover, you can have a more detailed look by opening the **coverage/Icov-report/index.html** in your browser.
