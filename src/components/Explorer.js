import React from "react";

function Explorer({ setIsHtml, setIsCss, setIsJs, upload }) {
  return (
    <div className="explorer">
      <div>Explorer</div>
      <div
        onClick={() => {
          setIsHtml(true);
          setIsCss(false);
          setIsJs(false);
        }}
      >
        index.html
      </div>
      <div
        onClick={() => {
          setIsCss(true);
          setIsHtml(false);
          setIsJs(false);
        }}
      >
        style.css
      </div>
      <div
        onClick={() => {
          setIsJs(true);
          setIsHtml(false);
          setIsCss(false);
        }}
      >
        app.js
      </div>
      <div>
        <button onClick={upload}>Save to Pastebin</button>
      </div>
    </div>
  );
}

export default Explorer;
