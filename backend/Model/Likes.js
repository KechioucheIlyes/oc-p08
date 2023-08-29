const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
    nbLikes: { type: Number, default: 0 }
});

const Likes = mongoose.model('Likes', LikesSchema);

module.exports = Likes;