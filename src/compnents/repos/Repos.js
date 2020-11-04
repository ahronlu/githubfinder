import React from "react";

const Repos = ({ repos }) => {
  return repos.map((repo, i) => (
    <div key={i} className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  ));
};

export default Repos;
