const express = require("express");
const  router  = express.Router();

const Room = require('../models/room')
const sample = require('../models/sample')


router.get('/getrooms',async(req,res) =>{
    try {
        const room = await Room.find({})
    return res.status(200).json({room})
    } catch (error) {
        return res.status(400).json({message:"error cant find data"})
        
    }
})

router.get('/sample',async(req,res) =>{
    try {
        const room = await sample.find({})
    return res.status(200).json({room})
    } catch (error) {
        return res.status(400).json({message:"error cant find data"})
        
    }
})


module.exports = router;

