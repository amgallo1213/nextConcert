// import mongoose from 'mongoose';

// const MONGO_URI = "mongodb://localhost:27017/next-concert"

// if (!MONGO_URI){
//     throw new Error(
//         'Please define the MONGODB_URI environment variable inside .env.local'
//     )
// }

// let cached = global.mongoose

// if (!cached){
//     cached = global.mongoose = { conn: null, promise: null}
// }

// async function dbConnect () {
//     if (cached.conn){
//         return cached.conn
//     }

//     if (!cached.promise){
//         const opts = {
//             newUrlParser: true,
//             useUnifiedTopology: true,
//             bufferCommands: false,
//             bufferMaxEntries: 0,
//             useFindAndModify: true,
//             useCreateIndex: true
//         }
        
//         cached.promise = mongoose.connect(MONGO_URI, opts).then(mongoose => {
//             return mongoose
//         })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
// }

// export default dbConnect