const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
require('./modal/connection')
dotenv.config({path:'./config/config.env'})

const indexrouter = require('./route/indexroute')
const adminrouter = require('./route/adminroute')
const userrouter = require('./route/userroute')

const PORTNO = process.env.PORTNO || 3000

app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/post',express.static('post'))

app.use('/api',indexrouter)
app.use('/admin',adminrouter)
app.use('/user',userrouter)



app.listen(PORTNO,()=>{
    console.log(`Server listening at http://localhost:${PORTNO}`)
})
