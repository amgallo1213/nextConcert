import mongoose from 'mongoose'

const ConcertSchema = new mongoose.Schema({
    name: String,
    venue: String,
    date: Date
})

module.exports = mongoose.models.Concert || mongoose.model('Concert', ConcertSchema)
