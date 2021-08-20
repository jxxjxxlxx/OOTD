const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: { 
    type: String, 
    required: true
    },

    postId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel'
    },

    onModel: {
    type: String,
    required: true,
    enum: ['CoolPost', 'HelpPost']
    },

    userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    },

    commnetedTime: { type: Date, default: Date.now }
    });

const Comment = mongoose.model("Commnet", commentSchema);


module.exports = Comment;
