const Note = require('../models/Note');
const User = require('../models/User');

function errorsHandling(res, err, obj) {
    if (err)
        return res.status(500).json({errors: err});
    if (!obj)
        return res.status(404).json({note: "Note not found"});
}

module.exports.createNote = function (req, res, next) {
    let user = req.user;
    Note.create({
        title: req.body.title,
        text: req.body.text,
        color: req.body.color,
        created: req.body.created,
        notify_at: req.body.notify_at,
        user: user
    }, function (err) {
        if (err)
            return res.status(400).json({errors: err});
        res.json({message: 'Note created successfully'})
    });
};

module.exports.getNotesList = function (req, res, next) {
    console.log(req.method);
    Note.find({user: req.user}, function(err, notes){
        if (err)
            return res.status(500).json({errors: err});
        res.json({notes: notes});
    });
};

module.exports.getNoteByID = function (req, res, next) {

    Note.findById(req.params.id, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        // errorsHandling(res, err, note);
        res.json({note: note});
    });
};

module.exports.updateNoteById = function (req, res, next) {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        // errorsHandling(res, err, note);
        res.json({note: note, message: "Note updated successfully"});
    });
};

module.exports.deleteNoteById = function (req, res, next) {
    Note.findByIdAndRemove(req.params.id, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        // errorsHandling(res, err, note);
        res.json({note: note, message: "Note deleted successfully"});
    });
};