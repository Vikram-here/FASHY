import mongoose from 'mongoose';
const MONGO_URL="mongodb+srv://vikramhere258_db_user:qwerty1234@cluster0.qvfo013.mongodb.net/ecomm?appName=Cluster0"
 const connectDB =async ()=>{
    await mongoose.connect(MONGO_URL)
 }

 export default connectDB;