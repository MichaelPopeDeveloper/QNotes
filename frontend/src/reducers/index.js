import { LOGIN_USER, UPDATE_USER, LOGOUT_USER } from "../constants/action-types";

const initialState = {
  user: false,
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
  return state;
}

export default rootReducer;