import express from "express";

import {BACKEND_URL} from "@repo/common/config";

console.log(BACKEND_URL);

const app = express();

app.get("/",(req,res) => {
    res.json({
        message: "Hello World"
    })
})

app.listen(5000,()=>{
    console.log("backend up and running on 5000");
})