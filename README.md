# Employee Management API

This project allows users to perform CRUD (create, read, update, delete) operations on employee records.

## Technology used

- Node.js
"Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting" - Wikipedia

- Express.js
"Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js" - Wikipedia

- Jest
"Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly." - https://jestjs.io/

## Setting up the Project

1. Ensure that node.js and npm are installed.
2. Clone the git repository to a local folder.
```
git clone https://github.com/gitmurphy/internchallenge-petermurphy.git
```
3. Install project dependencies in root folder.
```
npm install
```

## Running the Project
The project has been configured to start by running index.js.
```
npm start
```

## Running Tests
Unit tests have been implemented using Jest. Run all tests using:
```
npm test
```

## API Endpoints
Use a tool like Postman or curl to test the REST API endpoints.

- GET /employees - Retrieve a list of all employees
- GET /employees/:id - Retrieve an employee by ID
- POST /employees - Create a new employee
- PATCH /employees/:id - Update an existing employee
- DELETE /employees/:id - Delete an employee
