const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helpPostSchema = new Schema ({
    postingUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    occasionOfOutfit: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    problemComment: {
      type: String,
      required: true,
    },
    postingTime: { type: Date, default: Date.now }
})

const HelpPost = mongoose.model("HelpPost", helpPostSchema)
module.exports = HelpPost;