/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620051710689_6330';

  // add your middleware config here
  // 配置中间件
  config.middleware = [ 'printdate' ];
  // {app_root}/config/config.default.js
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置用户公共配置
  config.api = 'http://www.phonegap100.com/appapi.php';

  return {
    ...config,
    ...userConfig,
  };
};
