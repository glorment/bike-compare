const mongoose=  require('mongoose');

const crcSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    brandName:String ,
    url:String

})

module.exports  = mongoose.model('Crc',crcSchema);