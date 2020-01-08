import proxy from 'http-proxy-middleware';

module.exports = app => {
  app.use(proxy('/api', {
    target: 'https://via.placeholder.com/',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }));
};