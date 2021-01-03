import Term from "./components/Term";
import React from "react";

function createTerm(term) {
  return (
    <Term
      ket={term.id}
      emoji={term.emoji}
      emojiNmae={term.name}
      discription={term.meaning}
    />
  );
}

export default createTerm;
