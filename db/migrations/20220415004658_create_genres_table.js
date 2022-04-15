exports.up = async function(knex) {
  await knex.schema.createTable('genres', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable;
    table.timestamps(false, true);
  });

  await knex.raw(`
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON genres
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = async function(knex) {
return await knex.schema
  .dropTable('genres');
};