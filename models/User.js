class User {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    try {
      return await this.db('users')
        .select(['name', 'created_at', 'updated_at'])
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(name) {
    try {
      return await this.db('users')
        .select(['name', 'created_at', 'updated_at'])
        .where('name', name)
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async create(name, password) {
    try {
      await this.db('users')
        .insert({
          name: name,
          password: password
        })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update(name, edits) {
    try {
      await this.db('users')
        .where("name", name)
        .update(edits)
        .timeout(1500);
      return 'Successfully Updated!'
    } catch(err) {
      return err;
    };
  };

  async delete(name) {
    try {
      await this.db('users')
        .where('name', name)
        .del()
        .timeout(1500);
        return 'Successfully Deleted!';
    } catch(err) {
      return err;
    };
  };
};

module.exports = new User();