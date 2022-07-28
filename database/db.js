const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    mongoose.connection.on("disconnected", () => {
        console.log("mongoDB disconnected")
    })
    mongoose.connection.on("connected", () => {
        console.log("mongoDB connected")
    })
}

module.exports = connectDB