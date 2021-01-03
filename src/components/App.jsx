import React from "react";
import emojipedia from "../emojipedia";
import createTerm from "../CreateTerm";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createTerm)}
    </div>
  );
}

export default App;
