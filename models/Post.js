class Post {
  constructor() {
    this.db = require('../db/knex');
  };

  async findMany() {
    try {
      return await this.db('posts')
        .select(['*'])
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async findOne(id) {
    try {
      return await this.db('posts')
        .select('*')
        .where('id', id)
        .timeout(1500);
    } catch(err) {
      return err;
    };
  };

  async create(title, contents, user_id, subreaddit_id) {
    try {
      await this.db('posts')
        .insert({
          title: title,
          contents: contents,
          user_id: user_id,
          subreaddit_id: subreaddit_id
        })
        .timeout(1500);
      return "Successfully created"
    } catch(err) {
      return err;
    };
  };

  async update(id, edits) {
    try {
      await this.db('posts')
        .where("id", id)
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

module.exports = new Post();