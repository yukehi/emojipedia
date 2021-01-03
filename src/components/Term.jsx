import React from "react";

function Term(prpos) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {prpos.emoji}
          </span>
          <span>{prpos.emojiName}</span>
        </dt>
        <dd>{prpos.discription}</dd>
      </div>
    </dl>
  );
}

export default Term;
