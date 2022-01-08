import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlayerSchema = new Schema(
    {
        name: { type: String, required: true },
        points: { type: Number, required: true, default: 0 },
        correct: { type: Number, required: true, default: 0 },
        incorrect: { type: Number, required: true, default: 0 },
        questions: { type: Number, required: true, default: 0 },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)