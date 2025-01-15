const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors');

require('./modal/connection')

dotenv.config()

const indexrouter = require('./route/indexroute')
const adminrouter = require('./route/adminroute')
const userrouter = require('./route/userroute')

const PORTNO = process.env.PORTNO || 5000 

app.use(express.json())

app.use(cors({   
    origin:  ["http://localhost:3000", "https://usermanagementsystemsuren.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], 
    credentials: true 
}))

app.use('/post',express.static('post'))

app.use('/api',indexrouter)
app.use('/admin',adminrouter)
app.use('/user',userrouter)

app.listen(PORTNO,()=>{
    console.log(`Server listening at http://localhost:${PORTNO}`)
})
