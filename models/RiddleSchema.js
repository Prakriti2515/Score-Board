import mongoose from "mongoose"

const RiddleSchema =new mongoose.Schema({
    riddleId: {
        type: Number,
        required: true,
        unique: true
      },
      correctAnswer: {
        type: String,
        required: true
      }
    })

    export default RiddleSchema
    