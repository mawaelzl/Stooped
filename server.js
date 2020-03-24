var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://admin:password123@ds159546.mlab.com:59546/heroku_8w12nv6j",
  { useUnifiedTopology: true },
  function(err, client) {
    if (err) {
      throw err;
    }

    const collection = client.db("heroku_8w12nv6j").collection("numberOfBars");
    const getNumberOfBarsElement = async () =>
      collection.findOne({}) || { id: null, numberOfBars: 0 };
    const getNumberOfBars = async () =>
      (await getNumberOfBarsElement()).numberOfBars || 0;
    const setNumberOfBars = async newNumberOfBars => {
      await collection.deleteMany({});
      await collection.insertOne({ numberOfBars: newNumberOfBars });
      return (await collection.findOne({})).numberOfBars;
    };
    const increaseNumberOfBars = async () => {
      const numberOfBarsElement = await getNumberOfBarsElement();
      return await setNumberOfBars(numberOfBarsElement.numberOfBars + 1);
    };
    const decreaseNumberOfBars = async () => {
      const numberOfBarsElement = await getNumberOfBarsElement();
      return await setNumberOfBars(numberOfBarsElement.numberOfBars - 1);
    };

    var app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, "frontend/build")));

    app.get("/numberOfBars", async function(req, res, next) {
      const numberOfBars = await getNumberOfBars();
      res.send(`${numberOfBars}`);
    });

    app.get("/numberOfBars/inc", async function(req, res, next) {
      const numberOfBars = await increaseNumberOfBars();
      res.send(`${numberOfBars}`);
    });

    app.get("/numberOfBars/dec", async function(req, res, next) {
      const numberOfBars = await decreaseNumberOfBars();
      res.send(`${numberOfBars}`);
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
    });

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);
