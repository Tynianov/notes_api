const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
    label: {
        type: String,
        required: [true, 'Label is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

module.exports = mongoose.model('Color', ColorSchema);
