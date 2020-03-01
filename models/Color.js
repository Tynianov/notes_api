const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
    label: String,
    color: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

module.exports = mongoose.model('Color', ColorSchema);
