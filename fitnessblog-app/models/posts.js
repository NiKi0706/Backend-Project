import { Schema as _Schema, model } from "mmysql";
const Schema = _Schema;

const posts = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true},
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  likes: { type: Number, default: 0},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


// checked, completion receipt for exercise 2

export default model("posts", posts);