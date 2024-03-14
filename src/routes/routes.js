import express from "express";

const router = express.Router()

router.post("/webhook",(req,res)=>{return console.log(req.body)})

export default router