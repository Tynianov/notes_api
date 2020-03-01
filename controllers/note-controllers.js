const Note = require('../models/Note');
const User = require('../models/User');
const Color = require('../models/Color');

function errorsHandling(res, err, obj) {
    if (err)
        return res.status(500).json({errors: err});
    if (!obj)
        return res.status(404).json({note: "Note not found"});
}

module.exports.createNote = function (req, res, next) {
    let user = req.user;
    Color.findById(req.body.color, function (err, color) {
        if (err)
            return res.status(400).json({errors: err});
        console.log(color);
        Note.create({
            title: req.body.title,
            text: req.body.text,
            color: color,
            notify_at: req.body.notify_at,
            user: user
        }, function (err) {
            if (err)
                return res.status(400).json({errors: err});
            res.json({message: 'Note created successfully'})
        });
    });
};

module.exports.getNotesList = function (req, res, next) {;
    Note.find({user: req.user}).sort('-created').exec(function (err, notes) {
       if (err)
           return res.status(500).json({message: err});
       res.json({notes: notes})
    });
};

module.exports.getNoteByID = function (req, res, next) {

    Note.findById(req.params.id, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        res.json({note: note});
    });
};

module.exports.updateNoteById = function (req, res, next) {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        res.json({note: note, message: "Note updated successfully"});
    });
};

module.exports.deleteNoteById = function (req, res, next) {
    Note.findByIdAndRemove(req.params.id, function (err, note) {
        if (err)
            return res.status(500).json({errors: err});
        if (!note)
            return res.status(404).json({note: "Note not found"});
        res.json({note: note, message: "Note deleted successfully"});
    });
};

module.exports.getAllNotes = function (req, res, next) {
    if (!req.user.isAdmin)
        return res.status(403).json({message: 'You dont have enough permission to perform this action'})

    Note.find({}, function (err, notes) {
        if (err)
            return res.status(500).json({errors: err});
        res.json({notes: notes});
    });
};
