exports.up = async function(knex) {
  await knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable;
    table.text('contents', 'mediumtext');
    table.integer('user_id')
      .unsigned();
    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('SET NULL');
    table.integer('subreaddit_id')
      .unsigned();
    table.foreign('subreaddit_id')
      .references('id')
      .inTable('subreaddits')
      .onDelete('CASCADE');
    table.timestamps(false, true);
  });

  await knex.raw(`
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON posts
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = async function(knex) {
return await knex.schema
  .dropTable('posts');
};