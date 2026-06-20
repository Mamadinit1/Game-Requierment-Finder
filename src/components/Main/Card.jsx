import React from "react";

function Card({ gameObj }) {
  let { id, title, minRam, minGpu, storage, releaseYear } = gameObj;

  return (
    <div className="card" data-id={id}>
      <div className="cardTop">
        <span className="gameTitle">{title}</span>
        <span className="gameYear">{releaseYear}</span>
      </div>
      <div className="cardBot">
        <div className="gameInfo">
          <span className="label">Required RAM:</span>
          <span className="value">{minRam}</span>
        </div>
        <div className="gameInfo">
          <span className="label">Graphics (GPU):</span>
          <span className="value">{minGpu}</span>
        </div>
        <div className="gameInfo">
          <span className="label">Storage Space:</span>
          <span className="value">{storage}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
