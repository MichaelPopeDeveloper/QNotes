import * as express from 'express';
import NoteController from '../../controllers/NotesController';
import UserController from '../../controllers/UserController';

const passport = require('../../config/passport');
export const UserRoute = express.Router();

UserRoute.get('/', UserController.checkUser);

UserRoute.post('/login', passport.authenticate('local'), UserController.Login);
UserRoute.post('/signup', UserController.SignupMiddleware, passport.authenticate('local'), UserController.Signup);
UserRoute.post('/logout', UserController.Logout);
 
UserRoute.post('/note/create', NoteController.createNote);
UserRoute.post('/note/retrieve', NoteController.retrieveNote);

