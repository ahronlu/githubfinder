import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const { users, loading } = useSelector((state) => state.github);

  if (loading) return <Spinner />;

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
