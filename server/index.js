import express  from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const CONNECTION_URL = 'mongodb+srv://root:root@cluster0.iwimqhc.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5555;


app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
  .catch((error) => console.log(error.message));

  


