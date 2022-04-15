exports.up = async function(knex) {
  await knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.text('contents', 'mediumtext')
      .notNullable;
    table.integer('user_id')
      .unsigned();
    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('SET NULL');
    table.integer('post_id')
      .unsigned();
    table.foreign('post_id')
      .references('id')
      .inTable('posts')
      .onDelete('CASCADE');
    table.timestamps(false, true);
  });

  await knex.raw(`
  CREATE TRIGGER update_timestamp
  BEFORE UPDATE
  ON comments
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();
`);
};

exports.down = async function(knex) {
return await knex.schema
  .dropTable('comments');
};