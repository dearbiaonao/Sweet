const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1/hu";

mongoose.connect(DB_URL, {useNewUrlParser: true});

mongoose.connection.on("connected", () => {
    console.log("数据库连接成功");
})

mongoose.connection.on("disconnected", () =>{
    console.log("数据库连接断开")
})

mongoose.connection.on("error", () =>{
    console.log("连接错误")
})

module.exports = mongoose;