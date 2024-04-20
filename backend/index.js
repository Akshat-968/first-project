const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Welcome to our backend server");
});

const user = {
    name:"Akshat",
    age:20,
    batch:"BSc",
    branch:"Cloud Computing"
};

app.get("/user",(req,res)=>{
    if(user){
        res.status(200).send(user);
    }else{
        res.status(400).send("User doens not exists")
    }
});


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})

