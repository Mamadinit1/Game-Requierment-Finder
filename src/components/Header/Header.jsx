import "./header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerTop">
          <h1 className="headerTitle">
            GAME<span>SYSTEM</span>
          </h1>
          <p>Search for system requirements of your favorite games</p>
        </div>
        <div className="headerBot">
          <input
            type="text"
            placeholder="Type a game name... (e.g., Cyberpunk)"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
