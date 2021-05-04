'use strict';

module.exports = (options, app) => {
  // return 一个异步方法
  console.log(options, app);
  return async function printDate(ctx, next) {
    console.log('通过中间件打印当前日期：', new Date());
    await next();
  };
};
