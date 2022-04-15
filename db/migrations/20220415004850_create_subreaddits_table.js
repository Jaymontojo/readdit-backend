exports.up = async function(knex) {
  await knex.schema.createTable('subreaddits', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable;
    table.integer('genre_id')
      .unsigned();
    table.foreign('genre_id')
      .references('id')
      .inTable('genres')
      .onDelete('SET NULL');
    table.timestamps(false, true);
  });

  await knex.raw(`
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON subreaddits
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = async function(knex) {
return await knex.schema
  .dropTable('subreaddits');
};