import "./AttributeBar.scss";
import { CSSProperties } from "react";

type AttributeBarProps = {
  category: string;
  score: number;
  icon: string;
};

function AttributeBar({ category, score, icon }: AttributeBarProps) {
  const attributeBarColor: Record<string, CSSProperties> = {
    Reaction: {
      color: "var(--light-red)",
      backgroundColor: "hsla(0, 100%, 67%, 10%)",
    },
    Memory: {
      color: "var(--orangey-yellow)",
      backgroundColor: "hsla(39, 100%, 56%, 10%)",
    },
    Verbal: {
      color: "var(--green-teal)",
      backgroundColor: "hsla(166, 100%, 37%, 10%)",
    },
    Visual: {
      color: "var(--cobalt-blue)",
      backgroundColor: "hsla(234, 85%, 45%, 10%)",
    },
  };

  const borderColor: Record<string, string> = {
    Reaction: "hsla(0, 100%, 67%, 25%)",
    Memory: "hsla(39, 100%, 56%, 25%)",
    Verbal: "hsla(166, 100%, 37%, 25%)",
    Visual: "hsla(234, 85%, 45%, 25%)",
  };

  return (
    <div className="attribute-bar" style={attributeBarColor[category]}>
      <div
        className="attribute-bar__corner attribute-bar__top-left"
        style={{ borderColor: borderColor[category] }}
      />
      <div
        className="attribute-bar__corner attribute-bar__top-right"
        style={{ borderColor: borderColor[category] }}
      />
      <div
        className="attribute-bar__corner attribute-bar__bottom-left"
        style={{ borderColor: borderColor[category] }}
      />
      <div
        className="attribute-bar__corner attribute-bar__bottom-right"
        style={{ borderColor: borderColor[category] }}
      />
      <div className="attribute-bar__icon-category-container">
        <img src={require(`../../${icon}`)} alt="attribute-img" />
        <span className="attribute-bar__title">{category}</span>
      </div>

      <div className="attribute-bar__result">
        <span className="attribute-bar__result__score">{score}</span>
        <span className="attribute-bar__result__out-of">/ 100</span>
      </div>
    </div>
  );
}

export default AttributeBar;
