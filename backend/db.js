import mongoose from 'mongoose';

const mongoURI = `mongodb://0.0.0.0:27017/video`;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

export { connectToMongo }; // Exporting the connectToMongo function
