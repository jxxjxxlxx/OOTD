const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coolPostSchema = new Schema ({
    postingUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    itemDescription: 
      {
        type: String,
        enum: ["top", "bottom", "dress", "outer", "shoes", "accessary", "other"],
        required: true,
      },
    itemInformation: String,
		occasionOfOutfit: {
		type: String,
		enum: ["office", "school", "date", "festival", "travel", "special day", "sport", "weekend", "other"],
    required: true,
		},
    image: {
      type: String,
      required: true,
    },
    outfitMoodComment: String,
    postingTime: { type: Date, default: Date.now }
})

const CoolPost = mongoose.model("CoolPost", coolPostSchema)
module.exports = CoolPost;