import React from "react";

const CT = () => {
  return (
    <div>
      <h1>Current Transducer</h1>
      <h2>Theory of Operation</h2>
      <h2>Specs</h2>
      <ol>
        <li>Must match A/C or DC wire it is reading</li>
        <li>
          Must be rated for the current it will be reading, remember to add
          current of all conductors that it goes aaround
        </li>
        <li>
          On inductive loads, the current rating may n eed to be 5-15x the
          running current
        </li>
        <li>Make sure the output matches your signal readin equipment</li>
      </ol>
      <h2>Physical hookup</h2>
      Put the side that says P1 or H1 toward the power source and the other side
      toward the load
    </div>
  );
};

export default CT;
