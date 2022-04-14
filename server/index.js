const express = require('express');
const db = require('../database/knex');
const PORT = process.env.PORT || 3000;
const app = express();

(async () => {
  try{
    await db.migrate.latest();
    app.get("/hello", (req, res)=> {
      res.send("world")
        .status(200);
    });

    app.listen(PORT , () => {
      console.log(`server is listening at http://localhost:${PORT}`);
    });
  } catch(err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();