const mongoose = require('mongoose');

const dbConnection = async () => {

    // const host = {
    //     local: "127.0.0.1",
    //     docker: "mongo"
    // }

    const mongo_cnn = "mongodb://mongo:WQcjY0T1IpnEJ5TD0wtC@containers-us-west-35.railway.app:5880"

    try {

        mongoose.set("strictQuery", false);

        await mongoose.connect(mongo_cnn, {
            useNewUrlParser: true,
        });

        console.log('Database is running on mongoDB')

    } catch (error) {
        console.log(error);
        throw new Error('Error initializing the database');
    }

}

module.exports = {
    dbConnection
}
