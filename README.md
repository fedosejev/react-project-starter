# Simple, minimalistic and easy-to-maintain React.js project starter kit

Includes:
+ React.js v15
+ Redux
+ JavaScript ES2016
+ Webpack 2
+ Jest 20
+ Simple project structure
+ Additional helpful Bash scripts
+ SCSS
+ Bootstrap

## Install

1. `yarn`

## Run

1. `npm run start`
2. Open `http://localhost:8080` in a web browser.

## Test

1. `npm run test`

## Build

1. `npm run build`

## Project Structure

+ `source` - all source files.
  + `js` - all JavaScript files.
    + `components` - all React.js component files.
      + `Application.js` - React.js component that encapsulates the entire React.js application.
    + `index.js` - main React.js application file that renders `Application.js` component.
  + `index.html` - main HTML file.
+ `docs` - all build files.
  + `js` - all JavaScript files.
    + `app.[hash].js` - bundled (and minified) JavaScript file.
  + `index.html` - main HTML file.

## Helpful Bash Scripts

#### `./commit-and-push-to-github.sh`

Commits all changes in working directory and pushes them to GitHub.

#### `./publish-on-github-pages.sh`

Runs `npm run build` and `./commit-and-push-to-github.sh`.

## React.js Tutorials

Check [React.Tips](http://react.tips) for React.js tutorials for beginners.

## Author

[Artemij Fedosejev](http://artemij.com)
