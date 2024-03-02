
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TAG = 'Comment'

const commentSchema = new Schema({
  comment: { type: String, trim: true, required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
},{
  timestamps: true,
  collection:TAG
});

module.exports = mongoose.model(TAG, commentSchema);