import { fetchUser, userSearch, fetchRepos } from "../services/services";
const {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ERROR,
  GET_USER,
  GET_REPOS,
} = require("../constants/githubConstants");

export const searchUsers = (text) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });

    const data = await userSearch(text);

    dispatch({ type: SEARCH_USERS, payload: data.items });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};

export const clearUsers = () => (dispatch) => {
  dispatch({ type: CLEAR_USERS });
};

export const getUser = (username) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const data = await fetchUser(username);

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};

export const getUserRepos = (username) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const data = await fetchRepos(username);

    dispatch({ type: GET_REPOS, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  }
};
