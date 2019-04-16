"use strict";
exports.__esModule = true;
var User_1 = require("../models/User");
var NoteController = (function () {
    function NoteController() {
    }
    NoteController.createNote = function (req, res) {
        var _a = req.body, title = _a.title, note = _a.note;
        if (req.user) {
            User_1["default"].findOne({ _id: req.user.id })
                .then(function (result) {
                var user = result;
                delete user.password;
                delete user.id;
                res.send(user);
            })["catch"](function (error) { return res.send(error); });
        }
    };
    return NoteController;
}());
exports["default"] = NoteController;
//# sourceMappingURL=NotesController.js.map