const express = require('express');
const router = express.Router() ;

router.get('/' , (req , res, next) => {
   res.status(200).json({
        message :'crc GET work'
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
