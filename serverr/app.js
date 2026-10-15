const express = require("express");


const app = express() // server create ho chuka hain

 app.listen(3000, ()=> {
    console.log("server is running on port 3000");
 }) // server ko start karta hain