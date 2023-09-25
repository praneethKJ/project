const connectToMongo = require('./db');
const express = require('express')
// Call the function to connect to MongoDB
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())
app.use('/api/upload', require('./routes/upload'));
app.use('/api/play',require('./routes/play'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});