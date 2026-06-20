import React from "react";
import { allGames } from "../Main/Games";

function SearchSuggest(props) {
  let word = props.searchedWord.toLowerCase();
  let clearSearch = props.clearSearch;

  const gameWrappers = document.querySelector(".Games");

  let games = allGames.filter((game) =>
    game.title.toLowerCase().includes(word),
  );

  const selectGame = (gameId) => {
    clearSearch("");
    Array.from(gameWrappers.children).find((item) =>
      item.classList.contains("active")
        ? item.classList.remove("active")
        : null,
    );

    const searchedGame = Array.from(gameWrappers.children).find(
      (item) => +item.dataset.id === gameId,
    );
    searchedGame?.classList.add("active");
  };

  return (
    <div className={`searchWrapper ${word ? "" : "hidden"}`}>
      {games.map((game) => (
        <a
          href={`#card${game.id}`}
          className="searchTitle"
          key={game.id}
          onClick={() => selectGame(game.id)}
        >
          🔰{game.title}
        </a>
      ))}
    </div>
  );
}

export default SearchSuggest;
