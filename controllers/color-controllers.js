const User = require('../models/User');
const Color = require('../models/Color');

module.exports.createColor = function(req, res){
    let user = req.user;
    Color.create({
        label: req.body.label,
        color: req.body.color,
        user: user
    }, function (err) {
        if (err)
            return res.status(400).json({errors: err});
        res.json({message: 'Color created successfully'})
    });
};

module.exports.getColorsList = function(req, res){
    Color.find({}, function(err, colors){
        if (err)
            return res.status(500).json({errors: err});
        res.json({colors: colors})
    });
};

module.exports.getColorById = function (req, res) {
    Color.findById(req.params.id, function (err, color) {
        if (err)
            return res.status(500).json({errors: err});
        if (!color)
            return res.status(404).json({note: "Color not found"});
        res.json({note: color});
    });
};

module.exports.updateColorById = function (req, res) {
    Color.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, color) {
        if (err)
            return res.status(500).json({errors: err});
        if (!color)
            return res.status(404).json({note: "Color not found"});
        res.json({note: color, message: "Color updated successfully"});
    });
};

module.exports.deleteColorById = function (req, res, next) {
    Color.findByIdAndRemove(req.params.id, function (err, color) {
        if (err)
            return res.status(500).json({errors: err});
        if (!color)
            return res.status(404).json({note: "Color not found"});
        res.json({note: color, message: "Color deleted successfully"});
    });
};
