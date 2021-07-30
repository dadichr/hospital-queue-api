const express = require ('express')
const mongoose = require('mongoose')
const routers = require('./routers/routes')

const app = express()

const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(routers)

const MONGODBURI = 'mongodb://localhost/hospital-queue'
mongoose.connect(MONGODBURI, {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection
db.once('open', function () {
    console.log('connected to mongodb, from', MONGODBURI)
})

app.listen(PORT, () => {
    console.log('app running di port', PORT)
})