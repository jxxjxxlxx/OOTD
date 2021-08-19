// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, "../.env") });
// require ("../config/dbConnection");
// const bcrypt = require("bcrypt");

// const User = require("../models/User");

// const salt = 10;

// const users = [
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: "https://i.imgur.com/gBB3U1H.png",
// 	},
// 	{
// 		userName: "Bianca",
// 		email: "bianca@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: "https://i.imgur.com/eWTReh4.png",
// 	},
// 	{
// 		userName: "Cindy",
// 		email: "cindy@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: "https://i.imgur.com/DYAmBoX.png"
// 	},
// 	{
// 		userName: "Daniela",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},
// 	{
// 		userName: "Anna",
// 		email: "anna@mail.com",
// 		password: bcrypt.hashSync("1234", salt),
// 		profileImg: 
// 	},



// ];


// async function seedUsers() {
// 	try {
// 		await User.collection
// 			.drop()
// 			.catch((e) => console.log("No collection.."));

// 		const createdUsers = await User.create(users);
// 		console.log(createdUsers);
// 		process.exit();
// 	} catch (e) {
// 		console.log(e);
// 		process.exit();
// 	}
// }

// seedUsers();
