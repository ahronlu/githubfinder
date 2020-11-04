import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers, clearUsers } from "../../actions/githubActions";
import { setAlert, clearAlert } from "../../actions/alertActions";

const Search = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const { users } = useSelector((state) => state.github);

  const handleSubmit = (e) => {
    e.preventDefault();
    !text && dispatch(setAlert("Please enter something", "light"));
    if (text) {
      dispatch(clearAlert());
      dispatch(searchUsers(text));
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {users.length ? (
          <input
            onClick={() => dispatch(clearUsers())}
            type="button"
            value="Clear"
            className="btn btn-light btn-block"
          />
        ) : null}
      </form>
    </div>
  );
};

export default Search;
