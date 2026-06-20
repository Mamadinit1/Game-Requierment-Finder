import { useState } from "react";
import "./header.css";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <div className="container">
        <div className="headerTop">
          <h1 className="headerTitle">
            <img src="/images/logo.png" alt="" />
            GAME<span>SYSTEM</span>
          </h1>
          <p>Search for system requirements of your favorite games</p>
        </div>
        <div className="headerBot">
          <input
            type="text"
            placeholder="Type a game name... (e.g., Cyberpunk)"
            value={searchValue}
            onChange={() => setSearchValue(event.target.value)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
