# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Make sure you run this from the /frontend directory

## Release Process

Once you have merged your changes into the master branch, you will need to change the start script in the package.json file from:

    "start": "react-scripts start"

to:

    "start": "node server/server.js"