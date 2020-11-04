import React from "react";
import { useSelector } from "react-redux";
import UserItem from "../compnents/users/UserItem";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div style={userStyle}>
      {favorites.length ? (
        favorites.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <>
          <span></span>
          <h5>You have no favorite users, go back home and get some</h5>
        </>
      )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Favorites;
