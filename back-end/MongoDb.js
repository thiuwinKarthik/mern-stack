const mongoose = require('mongoose')



const connectDB = async () => {
try{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to mongodb")

}
catch(error)
{
    console.error(error)
    process.exit(1)
}
}
module.exports = connectDB