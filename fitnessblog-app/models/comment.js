import { Schema as _Schema, model } from "mysql";
const Schema = _Schema;

const comments = new Schema({
  comment: { type: String, trim: true, required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'posts' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default model("comments", comments);