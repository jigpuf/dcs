import React from "react";

const Breaker = () => {
  const breakers = [
    {
      breaker: "MCB Single and Multi-pole",
      meaning: "Miniature Circuit Breaker",
      rating: "Max 100 Amps",
      uses: "Overcurrent, Overheating, Switching",
      notes: [
        "Single-Pole(single Phase), Never use 3 single poles for a 3-phase circuit",
        "Di-Pole(Hot and neutral of single Phase)",
        "Three-Pole(3-Phase)",
      ],
    },
    {
      breaker: "MCCB",
      meaning: "Molded Case Circuit Breaker",
      rating: "up to 1000 Amps",
      uses: "Input Power Switch of Large electrical panels",
      notes: [
        "Trip characteristics are adjustable",
        "In = Rated Current",
        "Ir = percent of rated current, usually 70-100%",
        "Tr = Long time Delay, ",
      ],
    },
    {
      breaker: "ELCB",
      meaning: "Earth Leakage Circuit Breaker",
      rating: "",
      uses: "Detects any small current leakage and trips instantly. Usually installed in series after the main panel circuit breaker. Used to protect personel.",
      notes: [
        "current rating should match the current rating of the breaker that is in line with it",
        "Rated by amount of leakage current it will see",
      ],
    },
  ];
  const renderBreakers = breakers.map((item) => {
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.breaker}</td>
        <td>{item.meaning}</td>
        <td>{item.rating}</td>
        <td>{item.uses}</td>
        <td>
          <ol>{notes}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Circuit Breakers</h1>
      <hr />
      <h2>Fault Types</h2>
      <h3>Overcurrent</h3>
      <ol>
        <li>Also called Short Circuit or Magnetic protection</li>
        <li>Instant circuit disconnection at a particular current</li>
        <li>Can be adjustable depending on device</li>
      </ol>
      <h3>Overload</h3>
      <ol>
        <li>Also called thermal protection</li>
        <li>
          Depends on the heat the current produces to take a circuit
          disconnection action
        </li>
        <li>Does not support momentary disconnection</li>
        <li>Can be adjustable depending on device</li>
      </ol>
      A protection device can have thermal, magnetic or both protections
      <hr />
      <h2>Types of Breakers</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Meaning</th>
          <th>Ratings</th>
          <th>Uses</th>
          <th>Configurations</th>
        </tr>
        {renderBreakers}
      </table>
      <h2>Trip curve</h2>
      <img src="https://wiki.testguy.net/uploads/default/original/1X/9abed3eb8fa421cd11a9c9d6e8b3b1329cf11b4c.jpeg"></img>
    </div>
  );
};

export default Breaker;
