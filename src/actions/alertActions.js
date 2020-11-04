import { SET_ALERT, CLEAR_ALERT } from "../constants/alertConstants";

export const setAlert = (msg, type) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: { msg, type } });
};

export const clearAlert = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERT });
};
