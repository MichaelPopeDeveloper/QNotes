import { LOGIN_USER, UPDATE_USER, LOGOUT_USER, NOTE_TO_EDIT } from "../constants/action-types";

const initialState = {
  user: false,
  noteToEdit: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === LOGIN_USER) {
    return Object.assign({}, state, {
      user: state.user = action.payload,
    });
  }
  if (action.type === UPDATE_USER) {
    return Object.assign({}, state, {
      user: state.user = action.payload,
    });
  }
  if (action.type === LOGOUT_USER) {
    return Object.assign({}, state, {
      user: state.user = action.payload,
    });
  }
  if (action.type === NOTE_TO_EDIT) {
    return Object.assign({}, state, {
      user: state.noteToEdit = action.payload,
    });
  }
  return state;
}

export default rootReducer;