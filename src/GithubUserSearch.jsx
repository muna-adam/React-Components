import { useState } from "react";

function GithubUserSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (username.trim() === "") {
      setError("Please enter a GitHub username.");
      setUser(null);
      return;
    }

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found.");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
    
    style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
          />

          <h2>{user.name}</h2>

          <p>
            <strong>Username:</strong> {user.login}
          </p>

          <p>
            <strong>Bio:</strong>{" "}
            {user.bio ? user.bio : "No bio available"}
          </p>

          <p>
            <strong>Followers:</strong> {user.followers}
          </p>

          <p>
            <strong>Following:</strong> {user.following}
          </p>

          <p>
            <strong>Public Repositories:</strong>{" "}
            {user.public_repos}
          </p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GithubUserSearch;