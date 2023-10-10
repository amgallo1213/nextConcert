// import mongoose from 'mongoose'

// const ConcertSchema = new mongoose.Schema({
//     name: String,
//     venue: String,
//     date: Date
// })

// module.exports = mongoose.models.Concert || mongoose.model('Concert', ConcertSchema)

// export default Concert;

import { Schema, model, models } from 'mongoose';

const concertSchema = new Schema({
    name: String,
    venue: String
});

const Concert = models.Concert || model('Concert', concertSchema);

export default Concert;
