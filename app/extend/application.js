'use strict';
// 在app上挂载自定义的方法
/*
npm i silly-datetime --save
*/
// const { helper } = require('silly-datetime');
module.exports = {
  formatTime(params) {
    // this就是app对象

    console.log(this.config.api, params);
    return this.config.api;
  },
};
