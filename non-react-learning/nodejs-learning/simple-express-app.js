const express = require("express");

// express app
const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(8080);

const tempStore = [];
console.log("Receiving request");

// routes
app.get("/get", (req, res) => {
  console.log("get request");
  res.json(tempStore);
});

app.post("/post", (req, res) => {
  console.log("post request");
  tempStore.push(req.body);
  console.log(tempStore);
  res.json(tempStore);
});

console.log("Listening");
