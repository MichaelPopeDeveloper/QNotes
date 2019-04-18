"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    notes: [{
            title: {
                type: String,
                required: false
            },
            note: {
                type: String,
                required: true
            }
        }]
});
var User = mongoose.model('User', UserSchema);
exports["default"] = User;
//# sourceMappingURL=User.js.map