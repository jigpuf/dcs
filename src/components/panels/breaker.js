import React from "react";

const Breaker = () => {
  return (
    <div>
      <h1>Circuit Breakers</h1>
      <h2>Types</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Meaning</th>
          <th>Ratings</th>
          <th>Uses</th>
          <th>Configurations</th>
        </tr>
        <tr>
          <td>MCB Single and Multi-pole</td>
          <td>Miniature Circuit Breaker</td>
          <td>Max 100 Amps</td>
          <td>Overcurrent, Overheating, Switching</td>
          <td>
            <ol>
              <li>
                Single-Pole(single Phase), Never use 3 single poles for a
                3-phase circuit
              </li>
              <li>Di-Pole(Hot and neutral of single Phase)</li>
              <li>Three-Pole(3-Phase)</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>MCCB</td>
          <td>Molded Case Circuit Breaker</td>
          <td>up to 1000 Amps</td>
          <td>Input Power Switch of Large electrical panels</td>
          <td>Trip characteristics are adjustable</td>
        </tr>
        <tr>
          <td>ELCB</td>
          <td>Earth Leakage Circuit Breaker</td>
          <td></td>
          <td>
            Detects any small current leakage and trips instantly. Usually
            installed in series after the main panel circuit breaker. Used to
            protect personel.
          </td>
          <td>
            Need to connect 3-phases, the neutral, and earth to sense leakage
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <h2>Trip curve</h2>
      <img src="https://wiki.testguy.net/uploads/default/original/1X/9abed3eb8fa421cd11a9c9d6e8b3b1329cf11b4c.jpeg"></img>
    </div>
  );
};

export default Breaker;
