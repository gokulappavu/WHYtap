const express = require("express");
const connection = require("./config/connection");
const route = require("./routes/index");

require("dotenv").config();


const app = express();
app.use(express.json());

connection();

app.use("/v1", route);




app.use("/", (req, res)=>{
res.send("Working")
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${7000}`);
})