const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    notify_at: {
        type: Date,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    color: {
        type: Schema.Types.ObjectId,
        ref: "Color",
        required: true
    }

});

module.exports = mongoose.model('Note', NoteSchema);
