import mongoose from "mongoose"

const RiddleSchema =new mongoose.Schema({
    riddleId: {
        type: Number,
        required: true,
        unique: true
      },
      question: {
        type: String,
        required: true
      },
      correctAnswer: {
        type: String,
        required: true
      }
    })

    export default RiddleSchema
    