const express = require('express');
const router = express.Router() ;
const request  = require('request');

const cheerio = require('cheerio')


router.get('/' , (req , res, next) => {
    request ('http://www.chainreactioncycles.com/hk/en/sitemap' , (error,res , body) =>{
        const $ = cheerio.load(body)
        $('script').toArray().forEach(element => {
            var linkContainer = $(element).html();
            if(linkContainer.includes('buildLinksContainer' , 'brand') && linkContainer.includes( 'brand') ){
                
          //      if(linkContainer.indexOf('brand') > 0 ){

                    var matches = linkContainer.match(/\{(.*?)\}/);
                    if (matches) {
                        var submatch = matches[1];
                        submatch.split(',').forEach( val => {
                            
                            var keyValuePair =val.split("=");
                            if(keyValuePair.length > 0 )
                            try{
                                console.log(keyValuePair[0].trim(),  keyValuePair[1].trim())
                            } catch(e)    {}
                        } )
                        
                    }

                    // var firstq =  linkContainer.indexOf("{");
                    // var lastq = linkContainer.indexOf("}");
                    // var newlink = linkContainer.substr(firstq+1 ,linkContainer.length-1 )
                    // console.log(newlink)
                    
           //    }
            }

        });
       
    } )


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




