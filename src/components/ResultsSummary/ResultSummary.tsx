import React from "react";
import Score from "../Score/Score";
import ResultText from "../ResultText/ResultText";
import "./ResultSummary.scss";
import attributesData from "../../data.json";
import AttributeBar from "../AttributeBar/AttributeBar";

function ResultsSummary() {
  return (
    <div className="result-summary-container">
      <div className="blue-card">
        <span className="blue-card__your-result">Your Result</span>
        <Score />
        <ResultText />
      </div>
      <div className="white-card">
        <span className="white-card__summary">Summary</span>
        <div className="white-card__attributes">
          {attributesData?.map(
            (attribute: { category: string; score: number; icon: string }) => (
              <AttributeBar
                category={attribute.category}
                score={attribute.score}
                icon={attribute.icon}
              />
            )
          )}
        </div>
        <button className="white-card__button">Continue</button>
      </div>
    </div>
  );
}

export default ResultsSummary;
