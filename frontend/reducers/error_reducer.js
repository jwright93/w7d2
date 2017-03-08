import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../action.error_actions";

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  let newErrors;

  switch (action.type) {
    case RECEIVE_ERRORS:
      newErrors = action.errors.concat(state);
      return newErrors;
    case CLEAR_ERRORS:

    return [];
    default:
      return action.errors;
  }
};

export default errorReducer;
