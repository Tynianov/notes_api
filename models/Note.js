const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Note title is required'],
        maxLength: 50
    },
    text: {
        type: String,
        required: [true, 'Note text is required'],
        maxLength: 256
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
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    }

});

NoteSchema.index({text: 'text', title: 'text'});
module.exports = mongoose.model('Note', NoteSchema);
