import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// configure cors to allow requests from localhost:3000 and include the PATCH method
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'Content-Type', 'X-Auth-Token']
}));

const CONNECTION_URL = 'mongodb+srv://root:root@cluster0.iwimqhc.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5555;

app.use('/posts', postRoutes);

// handle preflight requests
app.options('/posts/:id', cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
  .catch((error) => console.log(error.message));


  


