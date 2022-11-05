import React from "react";

function FeedbackStats({ data }) {
  let media =
    data.reduce((contador, atual) => {
      return contador + atual.pontuacao;
    }, 0) / data.length;

  return (
    <>
      <div className="feedback-stats">
        <h4> Pontuação média: {isNaN(media) ? 0 : media.toFixed(1)} </h4>
      </div>
    </>
  );
}

export default FeedbackStats;
