exports.up = async function(knex) {
    await knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('name', 255)
        .unique()
        .notNullable();
      table.string('password', 255).notNullable();
      table.timestamps(false, true);
    });

    await knex.raw(`
    CREATE TRIGGER update_timestamp
    BEFORE UPDATE
    ON users
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp();
  `);
 };
  
 exports.down = async function(knex) {
  return await knex.schema
    .dropTable('users');
 };
 
