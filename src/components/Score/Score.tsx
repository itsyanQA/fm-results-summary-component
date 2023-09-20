import React from "react";
import "./Score.scss";

function Score() {
  return (
    <div className="score">
      <span className="score__number">76</span>
      <span className="score__out-of">of 100</span>
    </div>
  );
}

export default Score;
