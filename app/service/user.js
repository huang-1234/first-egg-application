'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async getUserInfo() {
    const userInfo = {
      name: 'hsq',
      age: 18,
    };
    return userInfo;
  }
}
module.exports = UserService;
