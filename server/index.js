
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors(["https://connection-api.onrender.com","https://connection-9uht.onrender.com"]));

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://rajvardhanmane891:raj@cluster0.pfct39j.mongodb.net/booking?retryWrites=true&w=majority';
const PORT = 10000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("Database connected")))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);``


app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
})