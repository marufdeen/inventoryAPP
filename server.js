require('dotenv').config()
// require app
const  app = require('./src/app');
// require database connection
require('./dataBaseConnection')
// require the app url and port configuration
const { appName, url, port, enviroment } = require( './src/config/serverConfig');

if(enviroment == 'production'){
 app
}
else{
// Start the server
app.listen(port, () => console.log(`${appName} server started on ${enviroment}: ${url}:${port}`));

}
