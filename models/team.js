import mongoose from "mongoose";
import answerKey from "./answerKey";

const team = new mongoose.Schema({
    teamId:{
        type:Number,
        required: true,
        unique: true
    },
    answer:[
        {
            riddleId: Number,
            answerInput: String,
            answerCorrect: Boolean
        }
    ],
    score:{
        default: 0,
        type: Number
    }

})
export default answerKey