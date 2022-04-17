class Subreaddit {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    try {
      return await this.db('subreaddits')
        .select(['name', 'genre_id', 'created_at', 'updated_at'])
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(name) {
    //WIP
  };

  async create(name) {
    //WIP
  };

  async update(name, edits) {
    //WIP
  };

  async delete(name) {
    //WIP
  };
};

module.exports = new Subreaddit();