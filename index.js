import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//cloud atlas version

const CONNECTION_URL = 'mongodb+srv://karthik123:123123123@cluster0.jomus.mongodb.net/newdb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,() => console.log(`server running on port:${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);