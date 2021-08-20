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
      },
    itemInformation: String,
		occasionOfOutfit: {
		type: String,
		enum: ["office", "school", "date", "festival", "travel", "special day", "sport", "weekend", "other"]
		},
    image: String,
    outfitMoodComment: String,
})

const CoolPost = mongoose.model("CoolPost", coolPostSchema)
module.exports = CoolPost;