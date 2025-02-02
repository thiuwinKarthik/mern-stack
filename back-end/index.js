const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./MongoDb')
const router = require('./routes/product.routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors( 
{
        origin: "https://mern-stack-iota-murex.vercel.app/",
        methods: ["POST","GET","DELETE"],
        allowHeaders:["Content-Type"
        credentials:true,
    }
))
app.use(bodyParser.json())

app.use('/api/products',router)
const port = 4000;
// app.get('/api/products',(req,res)=>{
// res.json("hello");
// }

app.listen(port,()=>{
    console.log(`server started running on ${port}`)
    connectDB()
})
 
