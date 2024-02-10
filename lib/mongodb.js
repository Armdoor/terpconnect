import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://asanoria:Um25march@terp.n6fylen.mongodb.net/terps");
        console.log("We are now connected to Mongo DB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}
