const Note = require('../models/Note');
const User = require('../models/User');

module.exports.createNote = function (req, res, next) {
    console.log(req.userId);
    let user = User.findById(req.userId);
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        Note.create({
            title: req.body.title,
            text: req.body.text,
            color: req.body.color,
            created: req.body.created,
            notify_at: req.body.notify_at,
            user: user
        }, function (err) {
            if (err)
                next(err);
            res.json({message: 'Note created successfully'})
        });
    });
};
