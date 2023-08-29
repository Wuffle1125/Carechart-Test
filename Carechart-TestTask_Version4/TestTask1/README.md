The project contains set of Firebase Cloud functions used by CarechartHarrison Web app

# Build and Test

1. Install NODE.JS v10 or higher ([https://nodejs.org/en/download](https://nodejs.org/en/download))
2. Install Firebase CLI ([https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli](https://firebase.google.com/docs/functions/get-started#set-up-node.js-and-the-firebase-cli))
3. Open CLI and go to project directory (`cd .\functions`)
4. Run `npm i` to install third party packages
5. After the intallation is complete run:
   1. `npm run build` to build for production
   2. `firebase deploy --only functions` to publish to Firebase Cloud ([https://firebase.google.com/docs/functions/get-started#deploy-functions-to-a-production-environment](https://firebase.google.com/docs/functions/get-started#deploy-functions-to-a-production-environment))

# How to run Firebase emulators

To run Firebase emulators follow these steps:

1. Install NODE.JS v10 or higher ([https://nodejs.org/en/download](https://nodejs.org/en/download))
2. Install Java version 1.8 or higher ([https://openjdk.java.net/install/](https://openjdk.java.net/install/))
3. Install Firebase CLI (run `npm install -g firebase-tools` in CLI)
4. Open CLI and go to the project directory (or open the project with VSCode and use its terminal)
5. Run `npm run serve` to start emulator (see [available commands](https://firebase.google.com/docs/emulator-suite/install_and_configure?authuser=0#startup) for details)

# Environments

There are 2 environments supported as of now: development ([CarechartHarrison-develop](https://console.firebase.google.com/u/1/project/carechartharrison-develop/overview)) and production ([CarechartHarrison](https://console.firebase.google.com/u/1/project/carechartharrison/overview)). Deployment is done using [`deploy:cd`](https://dev.azure.com/aquariusconsulting/CareChart/_git/firebase/commit/46cfab0a64dfdd2c8955d6ceb535d4aa0a7eed1b/?_a=contents&path=%2Ffunctions/package.json&line=10) command depending on `FB_PROJECT_ID` env var value
_FYI_: process.env.NODE_ENV === `production` for both `CarechartHarrison-develop` and `CarechartHarrison` (TODO: not clear where it's set). When running locally (`npm start`) it should be process.env.NODE_ENV === `development`


# How to debug ts with nodejs locally

1. npm install typescript --save
2. npm install ts-node --save-dev

# How to debug cloud functions (VSCode)

1. first terminal run: npm run build:watch
2. second terminal run: npm run debug
3. In VSCode select Run on the left side menu
4. select Debug configuration and press Start debugging
