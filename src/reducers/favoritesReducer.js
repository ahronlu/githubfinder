import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../constants/favoritesConstants";

export default function favoritesReducer(
  state = { favorites: [] },
  { type, payload }
) {
  switch (type) {
    case ADD_TO_FAVORITES:
      return { favorites: [...state.favorites, payload] };
    case REMOVE_FROM_FAVORITES:
      return { favorites: state.favorites.filter((x) => x.login !== payload) };

    default:
      return state;
  }
}
