const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helpPostSchema = new Schema ({
    postingUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    occasionOfOutfit: String,
    image: String,
    problemComment: String,
    postingTime: { type: Date, default: Date.now }
})

const HelpPost = mongoose.model("HelpPost", helpPostSchema)
module.exports = HelpPost;