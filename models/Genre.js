class Genre {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    try {
      return await this.db('genres')
        .select(['name', 'created_at', 'updated_at'])
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(name) {
    //WIP
  };

  async create(name) {
    try {
      await this.db('genres')
        .insert({ name: name })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update(name, edits) {
    //WIP
  };

  async delete(name) {
    //WIP
  };
};

module.exports = new Genre();