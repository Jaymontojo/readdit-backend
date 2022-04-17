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
    try {
      return await this.db('subreaddits')
        .select(['name', 'created_at', 'updated_at'])
        .where('name', name)
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async create(name, genre_id) {
    try {
      await this.db('subreaddits')
        .insert({
          name: name,
          genre_id: genre_id
        })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update(name, edits) {
    try {
      await this.db('subreaddits')
        .where("name", name)
        .update(edits)
        .timeout(1500);
      return 'Successfully Updated!'
    } catch(err) {
      return err;
    };
  };

  async delete(name) {
    //WIP
  };
};

module.exports = new Subreaddit();