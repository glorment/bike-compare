const express = require('express');
const router = express.Router() ;
const request  = require('request');

const Crc = require('../models/crc.model');
const mongoose = require('mongoose');
const crcParser = require('../parsers/crc')

router.get('/' , (req , res, next) => {
    var brands = crcParser.get_all_brand();




   res.status(200).json({
        message :'crc GET work',
        data: brands

   }); 
});



router.post('/' , (req , res, next) => {
    res.status(200).json({
         message :'crc POST work'
    }); 
 });
 


 router.get('/:id' , (req , res, next) => {
    const id = req.params.id;
    res.status(200).json({
         message :'crc POST work'
    }); 
 });


module.exports = router;




