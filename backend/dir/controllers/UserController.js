"use strict";
exports.__esModule = true;
var User_1 = require("../models/User");
var Encryptor = require("../helper/Encryptor");
var UserController = (function () {
    function UserController() {
    }
    UserController.checkUser = function (req, res) {
        console.log('req.session', req.session);
        console.log('req.user', req.user);
        if (req.user) {
            var user = Object.assign({}, req.user._doc);
            delete user.password;
            delete user._id;
            console.log('assign user', user);
            res.send({ user: user });
        }
        else {
            res.status(401).send({ user: false });
        }
    };
    UserController.Login = function (req, res) {
        console.log('req.body', req.body);
        console.log('req.user', req.user);
        if (req.user) {
            var user = Object.assign({}, req.user._doc);
            delete user.password;
            delete user._id;
            console.log('assign user', user);
            res.send({ user: user });
        }
        else {
            res.sendStatus(401).send({ user: false });
        }
    };
    UserController.Signup = function (req, res) {
        console.log('req.body', req.body);
        console.log('req.user', req.user);
        if (req.user) {
            var user = Object.assign({}, req.user._doc);
            delete user.password;
            delete user._id;
            res.send({ user: user });
        }
        else {
            res.sendStatus(401).send({ user: false });
        }
    };
    UserController.SignupMiddleware = function (req, res, next) {
        var _a = req.body, username = _a.username, email = _a.email, password = _a.password;
        return User_1["default"].findOne({ username: username })
            .then(function (user) {
            if (!user) {
                var newUser = new User_1["default"]({ username: username, email: email, password: Encryptor.encryptString(password) });
                return newUser.save()
                    .then(function () { return next(); })["catch"](function (err) { return console.log(err); });
            }
            console.log('username already exists');
            return res.send({ error: 'Username already exists' });
        })["catch"](function (error) { return res.send(error); });
    };
    UserController.Logout = function (req, res) {
        if (req.user) {
            req.session.destroy(null);
            res.clearCookie('connect.sid');
            console.log('logout user', req.user);
            return res.json({ msg: 'logged user out' });
        }
        return res.json({ msg: 'no user to log out' });
    };
    return UserController;
}());
exports["default"] = UserController;
//# sourceMappingURL=UserController.js.map