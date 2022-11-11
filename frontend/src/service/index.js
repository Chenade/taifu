import api from './api';
import manage from './manage';

function service(app) {
  const global = app.config.globalProperties;
  global.api = api;
  global.manage = manage;
}

export default service;
