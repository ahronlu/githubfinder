import { SET_ALERT, CLEAR_ALERT } from "../constants/alertConstants";

export default function alertReducer(state = {}, { type, payload }) {
  switch (type) {
    case SET_ALERT:
      return { ...state, msg: payload.msg, type: payload.type };
    case CLEAR_ALERT:
      return { ...state, msg: null, type: null };
    default:
      return state;
  }
}
