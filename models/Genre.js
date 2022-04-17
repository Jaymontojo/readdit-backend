class Genre {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    //WIP
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