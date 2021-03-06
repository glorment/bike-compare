const express= require('express');
const app =express()
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const crcRoutes= require('./api/routes/crc')
const turfclubRoutes = require('./api/routes/turfclub')


mongoose.connect('mongodb://'+
                    process.env.MONGO_ATLAS_USER+
                    ':'+
                    process.env.MONGO_ATLAS_PW+
                    '@cluster0-shard-00-00-3tbkc.mongodb.net:27017,cluster0-shard-00-01-3tbkc.mongodb.net:27017,cluster0-shard-00-02-3tbkc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
                    {useNewUrlParser : true}
                    );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin' , '*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization ')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods' , 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({});
    }
    next();
})

app.use('/crc', crcRoutes);
app.use('/turfclub',turfclubRoutes);

app.use((req , res  ,next ) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use( (error , req , res  ,next ) =>{
    res.status(error.status || 500 ) ;
    res.json ({
        error:{
            message : error.message
        }
    });
} );
module.exports = app;