const express = require('express');
const app = express();
const firebase = require("firebase/app");
//port
const port = 4000;
//My UNIQUE configuration information for firebase
const firebaseConfig = {
    apiKey: "AIzaSyBPvoDlu_DQ7J8PoWiqdKdoSwumnFoyuIQ",
    authDomain: "dynamic-web-exercise-fiv-d5059.firebaseapp.com",
    projectId: "dynamic-web-exercise-fiv-d5059",
    storageBucket: "dynamic-web-exercise-fiv-d5059.appspot.com",
    messagingSenderId: "71481793142",
    appId: "1:71481793142:web:ba87482d994bd59cc59d57"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
// const singlePostRoute = require("./routes/singlePost");
// const createPostRoute = require("./routes/createPost");

app.use("/", indexRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });