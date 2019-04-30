"use strict";
exports.__esModule = true;
var express = require("express");
var NotesController_1 = require("../../controllers/NotesController");
var UserController_1 = require("../../controllers/UserController");
var passport = require('../../config/passport');
exports.UserRoute = express.Router();
exports.UserRoute.get('/', UserController_1["default"].checkUser);
exports.UserRoute.post('/login', passport.authenticate('local'), UserController_1["default"].Login);
exports.UserRoute.post('/signup', UserController_1["default"].SignupMiddleware, passport.authenticate('local'), UserController_1["default"].Signup);
exports.UserRoute.post('/logout', UserController_1["default"].Logout);
exports.UserRoute.post('/note/create', NotesController_1["default"].createNote);
exports.UserRoute.post('/note/edit', NotesController_1["default"].editNote);
exports.UserRoute.post('/note/retrieve', NotesController_1["default"].retrieveNote);
//# sourceMappingURL=UserRoute.js.map