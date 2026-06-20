import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="cardTop">
        <span className="gameTitle">The Witcher 3</span>
        <span className="gameYear">2026</span>
      </div>
      <div className="cardBot">
        <div className="gameInfo">
          <span className="label">Required RAM:</span>
          <span className="value">12 GB</span>
        </div>
        <div className="gameInfo">
          <span className="label">Graphics (GPU):</span>
          <span className="value">GTX 1060 / RX 580</span>
        </div>
        <div className="gameInfo">
          <span className="label">Storage Space:</span>
          <span className="value">70 GB SSD</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
