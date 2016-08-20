# Simple, minimalistic and easy-to-maintain React.js project starter kit

Includes:
+ React.js v15
+ JavaScript ES2015
+ Gulp
+ Browserify
+ Simple project structure
+ Additional helpful Bash scripts
+ Bootstrap

## Install

1. `npm install`
2. `npm install --global http-server`

## Run

1. `gulp`
2. `http-server ./build`
3. Open `http://localhost:8080` in a web browser.

## Project Structure

+ `source` - all source files.
  + `js` - all JavaScript files.
    + `components` - all React.js component files.
      + `Application.jsx` - React.js component that encapsulates the entire React.js application.
    + `app.jsx` - main React.js application file that renders `Application.jsx` component.
  + `index.html` - main HTML file.
+ `build` - all build files.
  + `js` - all JavaScript files.
    + `app.js` - bundled (and minified) JavaScript file.
  + `index.html` - main HTML file.

## Helpful Bash Scripts

#### `./commit-and-push-to-github.sh`

Commits all changes in working directory and pushes them to GitHub.


#### `./build-for-production.sh`

Exports environment variable and runs Gulp task.

#### `./publish-on-github-pages.sh`

Runs `./commit-and-push-to-github.sh`, `./build-for-production.sh` and pushes `./build` directory to `gh-pages` branch on GitHub.

#### `./serve-build-files.sh`

Serves static files from `./build` directory on `http://localhost:8080` without caching.

## React.js Tutorials

Check [React.Tips](http://react.tips) for React.js tutorials for beginners.

## Author

[Artemij Fedosejev](http://artemij.com)