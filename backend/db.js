import mongoose from 'mongoose';

const connectToMongo = async () => {
    const mongoURI = process.env.MONGO_URI;
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

export { connectToMongo }; // Exporting the connectToMongo function
