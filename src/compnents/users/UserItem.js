import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../actions/favoritesActions";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.favorites);

  const isFav = favorites && favorites.some((fav) => fav.login === user.login);

  const click = () => {
    isFav
      ? dispatch(removeFromFavorites(user))
      : dispatch(addToFavorites(user));
  };

  return (
    <div className="card text-center">
      <Link to={`/user/${user.login}/`}>
        <img
          src={user.avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{user.login}</h3>
      </Link>
      <i
        className={`fa${isFav ? "s" : "r"} fa-heart c-pointer`}
        onClick={click}
      />
    </div>
  );
};

export default UserItem;
