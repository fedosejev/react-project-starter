# Simple React.js Project Starter Kit

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

`./commit-and-push-to-github.sh` - commits all changes in working directory and pushes them to GitHub.
`./build-for-production.sh` - exports environment variable and runs Gulp task.
`./publish-on-github-pages.sh` - runs `./commit-and-push-to-github.sh`, `./build-for-production.sh` and pushes `./build` directory to `gh-pages` branch on GitHub.

## Author

[Artemij Fedosejev](http://artemij.com)