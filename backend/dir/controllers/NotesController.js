"use strict";
exports.__esModule = true;
var User_1 = require("../models/User");
var NoteController = (function () {
    function NoteController() {
    }
    NoteController.createNote = function (req, res) {
        var _a = req.body, title = _a.title, note = _a.note;
        if (req.user) {
            User_1["default"].findOneAndUpdate({ _id: req.user.id }, {
                $push: {
                    notes: { title: title, note: note }
                }
            })
                .then(function (result) {
                User_1["default"].findOne({ _id: req.user.id })
                    .then(function (userDoc) {
                    var user = userDoc;
                    delete user.password;
                    delete user.id;
                    console.log('create post user', user);
                    res.send({ user: user });
                })["catch"](function (error) { return res.send(error); });
            })["catch"](function (error) { return res.send(error); });
        }
    };
    NoteController.retrieveNote = function (req, res) {
        var id = req.body.id;
        if (req.user) {
            User_1["default"].findOne({ _id: req.user._id })
                .then(function (userDoc) {
                var user = userDoc;
                var retrievedNote = user.notes.find(function (note) { return note._id === id; });
                console.log('retrieved note: ', retrievedNote);
                return retrievedNote ? res.send({ retrievedNote: retrievedNote }) : res.send({ error: 'The note was not found...' });
            })["catch"](function (error) { return res.send({ error: error }); });
        }
    };
    return NoteController;
}());
exports["default"] = NoteController;
//# sourceMappingURL=NotesController.js.map