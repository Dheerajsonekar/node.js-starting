const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/contactUs", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
})

router.post("/submit-success", (req, res, next)=>{
    const {name, email} = req.body;
    console.log(name, email);
    res.redirect("/success");
})

router.get("/success", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "success.html"));
})

module.exports = router;