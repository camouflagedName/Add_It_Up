# Add It Up!

## Introduction

Add It Up! is a browser-based and mobile responsive web app that renders two random integers 0 < n > 100. Users are provided an interactive screen where they input and submit their answer along with a timer, currently set at 15 seconds. Upon answering within the give time frame, feedback is given to the user informing them whether their answer is correct. Users have the option to continue upon answering correctly and incorrectly. The user's overall score is displayed and updated after each new question is rendered.

## Build

Add It Up! was built using React 18.1.0 and Bootstrap 5.1.3.


## Deployment
If running from a local directory:
1. Clone the repo
2. `cd` into the root folder
3. Install any dependencies using `npm install` in the command line
4. Run `npm start`
A broswer window should open and take you directly to http://localhost:3000/. If not, check the port number in your command line and use the port provided.

*Make sure you have `npm` installed before running*

To run from GitHub Pages:
1. Update "homepage" in `/package.json` file with your repo information
2. On the cmd line run `npm install --save gh-pages` or `yarn add gh-pages`to install GitHub Pages
3. Run `npm run deploy` to deploy the site
*You should be able to visit your site at https://{username}.github.io/{repo_name} by replacing username and repo_name with your GitHub username and repo name*


## Contributions
If you would like to contribute or modify, use the following instructions to set up a local development environment:

1. `cd` into the root folder
2. Install dependencies using `npm install` in the command line
3. Use your favorite text editor or IDE to begin (this was built with VS Code).
4. When testing, use your browser's dev console to inspect output written to the console.

Add It Up! was written using React.JS and Bootstrap. If using an additional library, be sure to check for any conflicts. For instance, if use jQuery, add `<script>jQuery.noConflict()</script>` in the `<head>` element of `index.html`.

### Contributions to consider:
UI Features:
- adding user options and improving accessibility, including: dark mode, font sizing, and aria-labels
- adding multiple problems
- adding multipe operations
- increasing problem complexity

When adding a feature, `cd` into `src/components` folder and add a new js or jsx file. Make sure to import this into the App.js file.

Backend:
- At this time, Add It Up! does not have storage persistence and cannot hold or maintain user data. To add a server/api to the project, consider using NodeJS (https://nodejs.org/) and Express (https://expressjs.com/). The three of these can be integrated together with little to no conflict, as they are all based on JavaScript.

## Questions or Issues
Contact me at michael.a.hazeltine@gmail.com with any questions.
GitHub: https://github.com/camouflagedname