// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig : {
    apiKey: "AIzaSyCrFHf3gTQZYgFK6IyHn2qdynxfPcZwEMM",
    authDomain: "rumi-web-app-dc4af.firebaseapp.com",
    databaseURL: "https://rumi-web-app-dc4af.firebaseio.com",
    projectId: "rumi-web-app-dc4af",
    storageBucket: "rumi-web-app-dc4af.appspot.com",
    messagingSenderId: "353669083115"
  },
};
