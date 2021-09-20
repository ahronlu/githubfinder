import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../compnents/layout/Spinner";
import Repos from "../compnents/repos/Repos";
import { getUser, getUserRepos } from "../actions/githubActions";

const User = ({ match: { params } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(params.login));
    dispatch(getUserRepos(params.login));
  }, [dispatch, params.login]);

  const { loading, user, repos } = useSelector((state) => state.github);

  if (loading) return <Spinner />;

  if (!user && !loading)
    return <h1 style={{ textAlign: "center" }}>No User</h1>;

  return (
    <>
      <Link to="/" className="btn btn-dark">
        Back To Search
      </Link>
      Hireable:{" "}
      {user.hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={user.avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{user.name}</h1>
          <p>Location: {user.location}</p>
        </div>
        <div>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user.html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {user.login && (
                <>
                  <strong>Username: </strong> {user.login}
                </>
              )}
            </li>

            <li>
              {user.company && (
                <>
                  <strong>Company: </strong> {user.company}
                </>
              )}
            </li>

            <li>
              {user.blog && (
                <>
                  <strong>Website: </strong> {user.blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {user.followers}</div>
        <div className="badge badge-success">Following: {user.following}</div>
        <div className="badge badge-light">
          Public Repos: {user.public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {user.public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
