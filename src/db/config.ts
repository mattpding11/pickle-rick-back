const mongoose = require('mongoose');

const dbConnection = async () => {

    // This is of my private enviroment from railway.app
    // If you can test you need to pass you local enviroment with mongo db (yo need to create a data base first)
    // Also can replace this variable for you own moungo_url online in another service
    const mongo_cnn = process.env.MONGO_URL;

    // if you have a own mongo cnn comment on the mongo_cnn above and replace for this:
    // const mongo_cnn = ""

    // To test only on develepoment proof this and comment on the above up and set the db_name const
    // const db_name = ""
    // const mongo_cnn = `mongodb://127.0.0.1:27017/${db_name}`

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
