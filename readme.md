# Rumi Web App:

This project is a personal reciept manager web app:
It supports:
1) Encrypted login/register for each user(bcrypt hash and salt password).
   After logged in, generate a token and save it to the local storage.
2) Friend lookup(angular pipe filter).
3) Friend edition, deletion and insertion by sending http put, delete, post request in authservice.
4) Auto update the friend list(asynchronous).
5) View recent logged in, bills.
6) Change your password, edit the bills.
7) Download the app.

This project utilizes the MEAN stack: MongoDB(mLab), Express, Angular5, and NodeJS.

## Run the Project!
To run the project, you have to first clone it:
```
$ git clone https://github.com/stevedang125/fullstack_rumi.git
```

After cloning, make sure you have Nodejs and Angular5 installed, cd into the project directory.
```
$ cd fullstack_rumi
```
Run the project!
```
$ npm install
then
$ npm start
or 
$ node server.js
$ nodemon server.js
```
Or:(this is what the npm start will do)
```
$ npm install
$ cd rumiFrontend && npm install && ng build
$ cd ..
$ node server.js
```
OR:
Install the backend dependencies:
```
$ npm install
```
Go into the Angular frontend folder and install the front end dependencies:
```
$ cd rumiFrontend
$ npm install
```
Build the frontend to the public folder so the backend can run it:
(the our directory in the angular-cli.json set to public folder: "outDir": "../public",)
```
$ ng build
```
If successful, the folder "public" created.
Go back to fullstack_rumi folder and run the server:
```
$ cd ..
$ node server.js
```

If all is successful, it should be available at your `localhost` on `port 8080` (`http://localhost:8080/`).

To use the live server for the front end, cd into rumiFrontend and run ng serve
```
$ cd rumiFrontend
$ ng serve
```
The live server is on `http://localhost:4200/`
Make sure you run the backend at the same time too:(`http://localhost:8080/`)
```
$ node server.js
```

To build the finish product, and run it with the backend:
(in the rumiFrontend run ng build, the output folder public will be created for the server to use) 
```
$ ng build
$ cd ..
$ node server
```
Now test it at localhost:8080


