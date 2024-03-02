
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 const postSchema = new Schema({
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


 
 module.exports = mongoose.model("Post", postSchema);