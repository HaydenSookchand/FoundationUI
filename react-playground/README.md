# hs-playground

## Hosting

Hosted on Netlify on https://haydens-showcase.netlify.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is used to showcase components built in the hs-showcase library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Integration with hs-showcase

### 1. Install the Library

    npm install foundation-component-lib

### 2. Usage

Import and use components from the library in your React project:

     import React from 'react';
     import ReactDOM from 'react-dom';
     import { Button } from 'foundation-component-lib ';

     const App = () => (
      <div>
        <Button label="Click me" />
      </div>
    );
    ReactDOM.render(<App />, document.getElementById('root'));`

### 3. Development (Testing Library Changes)

If you want to make changes to the library and test them in your project, follow these steps:

#### a. Clone the Library Repository

    git clone https://bitbucket.org/haydensookchand/hs-showcase/src/main/
    cd hs-playground

#### b. Install Dependencies

`npm install`

#### c. Build the Library

`npm run build`

### 4. NPM Link

To test changes locally without publishing the library to NPM, you can use `npm link`.

#### a. Link the Library

In the library directory:

`npm link`

#### b. Link in Your Project

In your project directory:

`npm link foundation-component-lib`

Now, any changes you make in the library will be reflected in your project without the need for a manual update or publishing to NPM.

### 5. Additional Information

- **Babel Configuration**: Babel is configured using `.babelrc` in the root of the project.
- **Rollup Configuration**: Rollup is configured using `rollup.config.js` in the root of the project.
