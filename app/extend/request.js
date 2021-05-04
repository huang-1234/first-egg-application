/*
  里面的方法将被挂载到this.ctx对象上
*/
'use strict';
module.exports = {
  getRequestTest() {
    console.log('getRequestTest:==', this);
    return 'getRequestTest';
  },

};
