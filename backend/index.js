import express from 'express';
import cors from 'cors';
import { connectToMongo } from './db.js';
import uploadRoutes from './routes/upload.js';

// Call the function to connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes for uploading and playing videos
app.use('/api/upload', uploadRoutes);
// app.use('/api/play', require('./routes/play'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
