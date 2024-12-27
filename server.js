const app = require('./app');
const dbConnection = require('./database/db');


app.listen(process.env.PORT,() =>{
    dbConnection();
    console.log('server running on 5000 port');
})