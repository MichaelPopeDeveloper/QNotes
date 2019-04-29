import { LOGIN_USER, UPDATE_USER, LOGOUT_USER, NOTE_TO_EDIT } from '../constants/action-types';

export function loginUser(payload) {
  return { type: LOGIN_USER, payload }
};

export function updateUser(payload) {
  return { type: UPDATE_USER, payload }
};

export function logoutUser(payload) {
  return { type: LOGOUT_USER, payload }
};

export function noteToEdit(payload) {
  return { type: NOTE_TO_EDIT, payload }
};