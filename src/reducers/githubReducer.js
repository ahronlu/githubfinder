import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ERROR,
  GET_USER,
  GET_REPOS,
} from "../constants/githubConstants";

const githubReducer = (
  state = { users: [], loading: false, user: null, repos: [] },
  { type, payload }
) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SEARCH_USERS:
      return { ...state, users: payload, loading: false };
    case GET_USER: {
      return { ...state, user: payload, loading: false };
    }
    case GET_REPOS: {
      return { ...state, repos: payload, loading: false };
    }
    case SET_ERROR:
      return { ...state, error: payload };
    case CLEAR_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default githubReducer;
