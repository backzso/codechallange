const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = { connectToMongoDB };

