const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const mongoURI = "mongodb://127.0.0.1:27017/hackX" 

const connectToMongoose =()=>{
   
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongoose")
    })


}

connectToMongoose();

const app = express()
const port = 5000
app.use(cors())

app.use(express.json())  


app.use('/api/auth', require('./Routes/auth'))
app.use('/api/repo', require('./Routes/gamerepo'))


app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})