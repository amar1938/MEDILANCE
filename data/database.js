import mongoose from "mongoose";

export const connectDB = mongoose.connect("mongodb+srv://Medilance:amar1938@medilance.3xojbdf.mongodb.net/", {
    dbName: "backend"
})
.then(()=>console.log("Database connected successfully!"))
.catch((e)=>console.log(e));