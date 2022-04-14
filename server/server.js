const express = require('express');

const setupServer = () => {
  const app = express();

  app.use(express.json());
  
  app.use("/", (req, res) => {
    res.send("welcome!")
      .status(200);
  });

  app.get("/hello", (req, res)=> {
    res.send("world")
      .status(200);
  });

  return app;
};

module.exports = { setupServer };
