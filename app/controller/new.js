'use strict';
const Controller = require('egg').Controller;
class NewController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'new Pages';
    const newslist = await this.service.new.getNewsList();
    console.log('newslist=============================================================================================================================================');
    console.log('可以输出newslist or newslist.result[0]');
    console.log(newslist.result[0]);
    // console.log(newslist);
    // ctx.body = newslist.result;
    const newslistArr = newslist.result;
    await ctx.render('news', {
      admin: 'hsq',
      newslistArr,
    });
  }
  // details
  async getNewsDetail() {
    const { ctx } = this;
    // ctx.body = 'NewsDetail';
    const query = ctx.query;
    // console.log('query=====================', query); // { aid: '503' }
    const detail = await ctx.service.new.getNewsDetail(query.aid);
    console.log('detail:===', detail);
    ctx.render('newsdetail', {
      detail,
    });
  }
  //
  async content() {
    this.ctx.body = 'new content';
    const query = this.ctx.query;
    console.log(query);
  }
  async newlist() {
    const params = this.ctx.params;
    console.log(params);
    this.ctx.body = 'new list';
  }
}
module.exports = NewController;
