## Typescript Library Starter

Use this repo to start developing your own javascript library. 
The setup is minimalist but includes everything you will need to create a library which you can later use
 in any js project.
 
 The starter is based on the standard tsconfig file with sensible defaults following best practices.
 
 We include linting, tests and a build script.
 
 ### Linter
 For linting, ts-lint is included. We have extended airbnb's linting rules and enforce them also in tests. 
 Linting based on the Airbnb rules is currently considered a standard but you can overwrite any rule in the tslint.json 
 file.
 
 ### Tests
 We use jest and enzyme for testing. There are commands to run tests, coverage and we use istanbul to enforce 100% code 
 coverage in our build script. 
 
 ### Build
 At build we run the linter, tests, test coverage and enforce 100% coverage(this can be changed in package json), types 
 are automatically exported alongside compiled code.
 
 ### Usage
 The starter support es6 and is compiled down to es5. You can use it for React, VueJS or any other JS framework 
 component development. Just clone the project and run npm start. This will watch for changes and you can start 
 development. Check package.json for scripts and details.
