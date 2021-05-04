'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const newslist = await this.service.new.getNewsList();
    const user = await this.service.user.getUserInfo();
    // const { ctx } = this;
    // 在app上调用自定义的方法
    console.log(this.app.formatTime());
    // ctx
    console.log(this.ctx.helper.getHelperData());

    // 调用request.js在this.ctx.request对象上
    console.log(this.ctx.request.getRequestTest());

    //
    await this.ctx.render('home', {
      newslist,
      user,
    });
  }
}

module.exports = HomeController;
