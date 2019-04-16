import * as express from 'express';
import  User  from '../../models/User';
const passport = require('../../config/passport');
const router = express.Router();

import NoteController from '../../controllers/NotesController';
import UserController from '../../controllers/UserController';

export const UserRoute = router


  UserRoute.get('/', UserController.checkUser);
  UserRoute.post('/login', passport.authenticate('local'), UserController.Login);
  UserRoute.post('/signup', passport.authenticate('local'), UserController.Signup);
  UserRoute.post('/logout', UserController.Logout);

  UserRoute.post('/note/create', NoteController.createNote);