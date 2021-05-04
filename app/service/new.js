// eslint-disable-next-line strict
const Service = require('egg').Service;

class NewService extends Service {
  async index() {
    const list = [ 1111, 2222, 333 ];
    // new服务调用user服务
    // const userInfo = await this.service.user.getUserInfo();
    // console.log(userInfo);
    // 试一下在service里面调用Controller,结果： Cannot read property 'config' of undefined
    // const HomeController = this.app.controller.home.index;
    // console.log(HomeController);
    return list;
  }
  // 通过接口获取数据
  async getNewsList() {
    // this.ctx.curl可以获取远程数据
    const api = this.config.api + '?a=getPortalList&catid=20&pages=1';
    const response = await this.ctx.curl(api);
    console.log(new Date(), 'getNewsList=========================================================================');
    // 可以输出response或者他的属性
    // console.log(response); // 返回的是Buffer
    // console.log(response.data);
    //
    // const data = JSON.parse(response.data);
    const data = JSON.parse(response.data.toString('utf8'));
    // 可以输出data，就是转码后的全部内容，也可以输出data.result[0]
    console.log('可以输出data，就是转码后的全部内容，也可以输出data.result[0]');
    // console.log('Buffer.toString:', data);
    console.log('data.result[0] of Buffer.toString:', data.result[0]);
    return data;
  }
  // 获取文章详情
  async getNewsDetail(aid) {
    const api = this.config.api + `?a=getPorttalArticle&aid=${aid}`;
    const res = await this.ctx.curl(api);
    console.log(new Date(), 'getNewsDetail=========================================================================');
    const detailData = JSON.parse(res.data);
    console.log('detailData:==========', detailData);
    if (!detailData.success) {
      console.log(detailData.message);
      return [ detailData.success, detailData.message ];
      // eslint-disable-next-line no-unreachable
    }
    return detailData.result;
  }

}

module.exports = NewService;
