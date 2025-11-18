import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/github.scss";

const GITHUB_API_URL = "https://api.github.com/users/";

export default function GitHubProfileSearch() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setProfile(null);

    if (!username.trim()) {
      setError("Digite um nome de usuário válido.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${GITHUB_API_URL}${username}`);

      if (!response.ok) {
        throw new Error(
          "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente"
        );
      }

      const data = await response.json();

      setProfile({
        name: data.name || data.login,
        avatar_url: data.avatar_url,
        bio: data.bio ?? "Sem bio disponível",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="background-container">
      <div className="images-background">
        <img id="bolinhas" src="./bolinhas.svg" alt="" />
        <img id="gradient-lg" src="./gradient-lg.svg" alt="" />
        <img id="gradient-sm" src="./gradient-sm.svg" alt="" />
      </div>
      <div className="container">
        <div className="github-container">
          <div className="title">
            <img
              src="./logo-profile-git.svg"
              alt="GitHub Logo"
              className="img-logo-github"
            />
          </div>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              placeholder="Digite um usuário do GitHub"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" className={loading ? "loading" : ""}>
              {loading ? <div className="spinner"></div> : <FiSearch />}
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          {profile && (
            <a
              className="card fade-in"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="lines"></div>
              <img src={profile.avatar_url} alt={profile.name} />
              <div className="info">
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
