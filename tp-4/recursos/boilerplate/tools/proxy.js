import proxy from 'http-proxy-middleware';

const serverProxy = proxy(['/api'], {
  target: 'http://jsonplaceholder.typicode.com',
  pathRewrite: {'^/api' : ''},
  changeOrigin: true,
  secure: false,
  logLevel: 'debug'
});

export default serverProxy;