const mongoose = require("mongoose");
//Database Connection
// local connection = process.env.DATABASE_URL
// 'mongodb+srv://root:hacker1993@cluster0.a44xf.mongodb.net/inventoryAPP?retryWrites=true&w=majority'
mongoose.connect( process.env.DATABASE_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

module.exports = mongoose;