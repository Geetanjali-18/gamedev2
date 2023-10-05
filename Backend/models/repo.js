const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSecSchema = new mongoose.Schema({
    rDevName: {
        type: String,
        required: true
    },
    rReply: {
        type: String,
        default: ""
    },
    rThumbsUp: {
        type: Number,
        default: 0
    },
    rDesc: {
        type: String,
        required: true
    }

})

const gameRepoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //same as foreign key
        ref: 'user'
    },
    repoName: {
        type: String,
        require: true
    },
    gameBudget: {
        type: Number,
        require: true
    },
    gmDetails: {
        thumbUp: {
            Type: Number,
            default: 0
        },
        gameDesc: {
            type: String
        },
        timeDur: {
            type: String
        },
        teamSize: {
            type: Number
        },
        techStack: {
            type: Array
        }

    },
    date: {
        type: Date,
        default: Date.now
    },
    reviewSec: [reviewSecSchema]
});



const repo = mongoose.model("repo", gameRepoSchema)
module.exports = repo