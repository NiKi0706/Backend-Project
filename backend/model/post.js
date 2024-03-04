
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 const PostSchema = new Schema({
   title: {
    type: String,
    trim: true, 
    required: true 
   },
   description: { 
    type: String, 
    trim: true, 
    required: true 
   },

   image: { 
    type: String,
    trim: true, 
    required: true},

   userId: { 
    type: Schema.Types.ObjectId,
    ref: 'user' 
    },
   likes: {
     type: Number,
     default: 0
    },

 }, {
    timestamps: true,
    collection: "Post"
 });



 const Post = mongoose.model('Post', PostSchema);
 module.exports = Post;