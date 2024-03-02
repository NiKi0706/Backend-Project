//index.js
'use strict'
import{Users} from './users';

export const Posts = require('./posts');
export const Likes = require('./likes');

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});