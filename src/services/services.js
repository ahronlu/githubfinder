import axios from "../config/axiosConfig";
import { githubClientId, githubClientSecret } from "../config/apiKeys";

export async function userSearch(usermame) {
  try {
    const { data } = await axios(
      `/search/users?q=${usermame}&clent_id=${githubClientId}&client_secret=${process.env.githubClientSecret}`
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchUser(username) {
  try {
    const { data } = await axios(
      `/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchRepos(username) {
  try {
    const { data } = await axios(
      `/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
