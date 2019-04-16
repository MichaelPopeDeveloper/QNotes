"use strict";
exports.__esModule = true;
var express = require("express");
var passport = require('../../config/passport');
var router = express.Router();
var NotesController_1 = require("../../controllers/NotesController");
var UserController_1 = require("../../controllers/UserController");
exports.UserRoute = router;
exports.UserRoute.get('/', UserController_1["default"].checkUser);
exports.UserRoute.post('/login', passport.authenticate('local'), UserController_1["default"].Login);
exports.UserRoute.post('/signup', UserController_1["default"].Signup);
exports.UserRoute.post('/logout', UserController_1["default"].Logout);
exports.UserRoute.post('/note/create', NotesController_1["default"].createNote);
//# sourceMappingURL=UserRoute.js.map