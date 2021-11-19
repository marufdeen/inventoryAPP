require('dotenv').config()
// require app
const  app = require('./app');
// require database connection
require('../dataBaseConnection')
// require the app url and port configuration
const { appName, url, port, enviroment } = require( './config/serverConfig');

if(enviroment == 'production'){
 app
}
else{
// Start the server
app.listen(port, () => console.log(`${appName} server started on ${enviroment}: ${url}:${port}`));

}
