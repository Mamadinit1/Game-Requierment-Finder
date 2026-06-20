import { useState } from "react";
import "./header.css";
import SearchSuggest from "./SearchSuggest";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <div className="container">
        <div className="headerTop">
          <h1 className="headerTitle">
            <img src="/images/logo.png" alt="" />
            GAME<span>SPECS</span>
          </h1>
          <p>Search for system requirements of your favorite games</p>
        </div>
        <div className="headerBot">
          <input
            className="searchBar"
            type="text"
            placeholder="What Game You're Looking for ? 🔍"
            value={searchValue}
            onChange={() => setSearchValue(event.target.value)}
          />
          <SearchSuggest
            searchedWord={searchValue}
            clearSearch={setSearchValue}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
