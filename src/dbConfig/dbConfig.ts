

import mongoose, { connection } from "mongoose";


export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        const connect = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB connected successfully")
        })

        connection.on('error', (err) => {
            console.log('MongoDb Connection Error. Please make sure mongoDB is running '+ err)
            process.exit();
        })
    } catch (error) {
        console.log('something goes wrong')
        console.log(error)
    }
}