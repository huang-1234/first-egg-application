'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.index);
  router.get('/news', controller.new.index);
  router.get('/news/detail', controller.new.getNewsDetail);
  router.get('/news/content', controller.new.content);
  router.get('/news/newlist', controller.new.newlist);
};
