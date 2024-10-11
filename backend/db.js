const mongoose = require("mongoose");

var mongourl = "mongodb+srv://karthikshivakumar3231:Ragu%401243@cluster0.tyk5p.mongodb.net/karthikdb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongourl,{useUnifiedTopology :true, useNewUrlParser: true} )

var connection = mongoose.connection



connection.on('error',() => {
    console.log("failed to connect mongodb")

})

connection.on('connected', () => {
    console.log("connected sussefully to mongodb")
})
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
module.exports = mongoose;
//mongodb+srv://karthikshivakumar3231:Ragu@1243@cluster0.tyk5p.mongodb.net/karthikdb