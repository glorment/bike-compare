const request  = require('request');

const cheerio = require('cheerio')


exports.get_all_brand = function() {
   
    var retList = [];
    request('http://www.chainreactioncycles.com/hk/en/sitemap' , (error,res , body) =>{
        const $ = cheerio.load(body)
        $('script').toArray().forEach(element => {
            var linkContainer = $(element).html();
            if(linkContainer.includes('buildLinksContainer' , 'brand') && linkContainer.includes( 'brand') ){
                    var matches = linkContainer.match(/\{(.*?)\}/);
                    if (matches) {
                        var submatch = matches[1];
                        submatch.split(',').forEach( val => {
                            
                            var keyValuePair =val.split("=");
                            if(keyValuePair.length > 0 ){
                                try{
                                    
                                   retList.push( {
                                    brandName  :keyValuePair[0].trim() , 
                                    url : keyValuePair[1].trim()
                                   
                                    });
                                    console.log(keyValuePair[0].trim(),  keyValuePair[1].trim())
                                } catch(e)    {}
                            }
                        //        console.log(keyValuePair[0].trim(),  keyValuePair[1].trim())
                                // const  crc=  new Crc({
                                //     _id : mongoose.Types.ObjectId(),
                                //     brandName : keyValuePair[0].trim() , 
                                //     url : keyValuePair[1].trim()
                                // })

                                // crc.save()
                                // .then(result =>{
                                //     console.log(result)
                                // })
                                // .catch(err =>{
                                //     console.log(err)
                                // });

                           
                        } )
                        
                    }
            }

        });
       
    } )

}