const mongoose = require('mongoose');


const dbConnection = () => {
    
        mongoose.connect(process.env.MONGO_URI,
            {
                dbName : "INSTITUTE_HUB"
            }
        )
        .then(() => {
            console.log('database connection successfully...')
        })
        .catch((err) => {
            console.log(err);
            process.exit();
        })

}

module.exports = dbConnection;