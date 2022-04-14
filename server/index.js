const db = require('../database/knex');
const PORT = process.env.PORT || 3000;
const { setupServer } = require('./server');
const app = setupServer();

(async () => {
  try{
    await db.migrate.latest();
    app.listen(PORT , () => {
      console.log(`server is listening at http://localhost:${PORT}`);
    });
  } catch(err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();