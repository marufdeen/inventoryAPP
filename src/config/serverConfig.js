const config = {
  appName: process.env.APP_NAME,
  port: process.env.APP_PORT,
  url: process.env.APP_URL || 'http://127.0.0.1',
  enviroment: process.env.APP_ENV || 'production',
};

module.exports = config;
