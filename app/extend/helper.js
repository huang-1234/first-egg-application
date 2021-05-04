'use strict';
/*
  里面的放将被挂载到this.app上，所以在外被调用需在this.app上调用
*/
const sd = require('silly-datetime');
module.exports = {
  formatTime(dt) {
    // this是helper对象，在其他地方可以调用helper方法
    // this.app => context对象
    // this.app => application对象

    // dt时间戳
    const dt13bit = dt * 1000;
    return sd.format(new Date(dt13bit), 'YYYY-MM-DD HH:mm');
  },
  getHelperData() {
    return 'getHelperData';
  },
};
