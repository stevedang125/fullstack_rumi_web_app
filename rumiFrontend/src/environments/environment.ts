// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDLmiEfb3saF_A2xYBhGTKN0sqrg2VPlgA",
    authDomain: "rumi-website-mobile-app.firebaseapp.com",
    databaseURL: "https://rumi-website-mobile-app.firebaseio.com",
    projectId: "rumi-website-mobile-app",
    storageBucket: "rumi-website-mobile-app.appspot.com",
    messagingSenderId: "391392634983"
  }
};
