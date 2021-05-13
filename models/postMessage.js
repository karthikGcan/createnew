import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
   username :String,
   password: String
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;