# NetflixGPT

  # Modular Architecture (or) Principles

    /src
      /assets
        /styles
        /images
        /fonts

    /infrastructure
      /config
      /models
      /theme

    /modules
      /components
      /constants
      /data
      /hooks
      /pages
      /services
      /stores

    /routes
      /routes.tsx
      
    /shared
      /constants
      /data
      /hooks
      /pages
      /services
      /stores
      /layouts
      /ui

Modular Architecture Principles
Pros:

  Separation of Concerns:
   - Each module has a specific responsibility, making the codebase easier to understand and maintain.
  Reusability:
   - Modules can be reused across different parts of the application or even in different projects.
  Scalability:
   - The application can grow by adding new modules without affecting existing ones.
  Maintainability:
   - Bugs and issues can be isolated within specific modules, making them easier to fix.
  Testability:
   - Modules can be tested independently, improving the overall test coverage and reliability of the application.
  Collaboration:
   - Different teams can work on different modules simultaneously without interfering with each other.
  Cons of Classic Architecture:

  Tight Coupling:
   - Components are often tightly coupled, making it difficult to change one part of the application without affecting others.
  Poor Scalability:
   - As the application grows, the codebase becomes harder to manage and understand.
  Difficult Maintenance:
   - Fixing bugs or adding new features can be challenging due to the interdependencies between components.
  Limited Reusability:
   - Code is often not reusable across different parts of the application or in other projects.
  Testing Challenges:
   - Testing can be more difficult because components are not isolated and may depend on the state of other parts of the application.

Commands for Setting Up a Modular Architecture

  Create Directory Structure:

    mkdir -p src/assets/{styles,images,fonts}
    mkdir -p src/infrastructure/{config,models,theme}
    mkdir -p src/modules/{components,constants,data,hooks,pages,services,stores}
    mkdir -p src/routes
    mkdir -p src/shared/{constants,data,hooks,pages,services,stores,layouts,ui}

  Initialize a New Project:

    npm init -y

  Install Dependencies:

    npm install react react-dom
    npm install --save-dev typescript @types/react @types/react-dom

  Set Up TypeScript Configuration:

    npx tsc --init

  Create Entry Point:

    touch src/index.tsx

  Set Up Routing:

    npm install react-router-dom

  Create Routes File:

    touch src/routes/routes.tsx

  Set Up ESLint and Prettier:

    npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

  Create ESLint Configuration:

    touch .eslintrc.json

  Create Prettier Configuration:

    touch .prettierrc

  By following these steps, you can set up a project that adheres to modular architecture principles, making it easier to manage, scale, and maintain.      

# Features

    - Login/Sign Up
      - redirect to Browser Page
    - Browser (after authentication)
      - Header
      - Main Movies
            - Trilar in Background
            - Titile & Descriptions
        - Movie Suggestions
            - MovieLists 
    - NetflixGPT
      - Search Bar
      - Movie Suggestions



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
