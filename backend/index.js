import express, { Router, request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModels.js";
import router from "./routes/booksRoute.js";
import cors from 'cors'

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],                                                                                                             

//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack Tutorial");
});

app.use('/books',router)  

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  }); 