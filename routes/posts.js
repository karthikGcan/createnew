import express from 'express';
import  {getPosts , createPost} from '../controllers/posts.js'
import PostMessage from '../models/postMessage.js'


const router = express.Router();

//localhost:5000/posts
router.get('/', async (req,res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }} );
router.post('/', async (req,res) => {
    const cbody = req.body;
    console.log(cbody);
    const newpost = new PostMessage(cbody);
    try {
        const verifiedUser = await PostMessage.find(cbody);
        // await newpost.save();
        res.status(201).json(verifiedUser);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
} );

export default router;