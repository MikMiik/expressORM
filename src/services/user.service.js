const { User } = require("@/models");
class UsersService {
  async getAll() {
    const users = await User.findAll();
    return users;
  }

  async getById(id) {
    const user = await User.findByPk(id);
    return user;
  }

  async create(data) {
    const user = await User.create(data);
    return user;
  }

  async update(id, data) {
    const user = await User.update(data, { where: { id } });
    return user;
  }

  async remove(id) {
    const result = await User.destroy({ where: { id } });
    return result;
  }
}

module.exports = new UsersService();
