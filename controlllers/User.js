class User {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    try {
      return await this.db('users')
        .select('name')
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(name) {
    try {
      return await this.db('users')
        .select('name')
        .where('name', name)
        .timeout(1500);
    } catch(err) {
      return err;
    }
  };

  async create(username, password) {
    try {
      await this.db('users')
        .insert({
          name: username,
          password: password
        })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update() {
    
  };

  async delete() {
    
  };
};

module.exports = new User();