const express = require('express');
const User = require('../controlllers/User');

const setupServer = () => {
  const app = express();

  app.use(express.json());

  // app.use("/", (req, res) => {
  //   res.send("welcome!")
  //     .status(200);
  // });

  app.get("/api/users", async (req, res)=> {
    res.send("world")
      .status(200);
  });

  app.post("/api/users", (req, res) => {
    const {username, password} = req.body;
    User.create(username, password);
    res.status(201)
    res.end();
  });

  return app;
};

module.exports = { setupServer };
