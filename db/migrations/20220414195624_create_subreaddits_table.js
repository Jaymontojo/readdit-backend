exports.up = async function(knex) {
  return await knex.schema
    .createTable('subreaddits', (table) => {
      table.increments('id');
      table.string('name', 255).notNullable;
    });
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTable('subreaddits');
};
