import React from "react";

const HtmlFileStructure = () => {
  return (
    <div>
      <h2>File Structure</h2>
      <ul>
        <li>index.html</li>
        <li>index.css</li>
        <li>index.js</li>
        <li>styles</li>
        <ul>
          <li>specific style sheets</li>
        </ul>
        <li>scripts</li>
        <ul>
          <li>specific scripts</li>
        </ul>
        <li>assets</li>
        <ul>
          <li>videos</li>
          <li>pictures</li>
          <li>sounds</li>
          <li>PDF</li>
        </ul>
      </ul>
    </div>
  );
};

export default HtmlFileStructure;
