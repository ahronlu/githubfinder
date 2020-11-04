import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/favoritesConstants";

export const addToFavorites = (user) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: user,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};

export const removeFromFavorites = (user) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: user.login,
  });

  localStorage.setItem("favorites", JSON.stringify(getState().favorites));
};
