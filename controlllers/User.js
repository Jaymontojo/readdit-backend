class User {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    
  };

  async findOne() {
    
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
    }
  };

  async update() {
    
  };

  async delete() {
    
  };
};

module.exports = new User();