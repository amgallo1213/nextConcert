import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect("mongodb://localhost:3000/next-concert");

export default connectMongo;