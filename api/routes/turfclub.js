const express = require('express');
const router = express.Router() ;
const cheerio = require('cheerio')
const request  = require('request');


// https://github.com/s-string/sg-scapper/blob/master/src/main/java/com/superstring/sgscrapper/SgScapperApplication.java
router.get('/' , (req , res, next) => {

    request('http://www.turfclub.com.sg/Racing/Pages/RaceCards.aspx' , (error , res,body) =>{
        const $ = cheerio.load(body)
        var raceCardTable = $('.STC_Gdv > *') //table
        console.log(raceCardTable.find('.STC_Gdv_Row'))
           

      



    });

    res.status(200).json({
        message :'turfclub GET work',
   }); 

});


module.exports = router;
