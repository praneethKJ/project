const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/Notes";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectToMongo;
