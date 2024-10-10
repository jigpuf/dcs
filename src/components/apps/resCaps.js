import React, { useState } from "react";

// Color to digit mapping
const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
  gold: "0.1",
  silver: "0.01",
};

const ResCaps = () => {
  const [stripeOne, setStripeOne] = useState("");
  const [stripeTwo, setStripeTwo] = useState("");
  const [stripeThree, setStripeThree] = useState("");
  const [stripeFour, setStripeFour] = useState("");
  const [resistanceValue, setResistanceValue] = useState("");
  const [result, setResult] = useState("");
  const [colorBands, setColorBands] = useState([]);
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [numThree, setNumThree] = useState(0);

  const calculateResistance = () => {
    const digit1 = colorCodes[stripeOne] || 0;
    const digit2 = colorCodes[stripeTwo] || 0;
    const multiplier = Math.pow(10, colorCodes[stripeThree] || 0);
    const tolerance =
      stripeFour === "gold" ? "±5%" : stripeFour === "silver" ? "±10%" : "";

    const resistance = (digit1 * 10 + digit2) * multiplier;
    setResult(`${resistance} Ω ${tolerance}`);
  };

  const calculateColors = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) return;

    const resistance = Math.round(parsedValue);
    const digits = resistance.toString().split("");

    const digit1 = digits.length > 0 ? digits[0] : "0";
    const digit2 = digits.length > 1 ? digits[1] : "0";
    const multiplier = Math.floor(Math.log10(resistance / 10)) || 0; // Find multiplier
    const tolerance = "gold"; // Default tolerance

    // Build color bands
    const colors = [
      Object.keys(colorCodes)[digit1],
      Object.keys(colorCodes)[digit2],
      Object.keys(colorCodes)[multiplier],
      tolerance,
    ];
    setColorBands(colors);
  };
  const total = (numOne * 10 + numTwo * 1) * 10 ** numThree;
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Resistor Value Calculator</h2>

      <div>
        <label>Stripe 1: </label>
        <select onChange={(e) => setStripeOne(e.target.value)}>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Stripe 2: </label>
        <select onChange={(e) => setStripeTwo(e.target.value)}>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Multiplier: </label>
        <select onChange={(e) => setStripeThree(e.target.value)}>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Tolerance: </label>
        <select onChange={(e) => setStripeFour(e.target.value)}>
          <option value="">None</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>
      </div>
      <button onClick={calculateResistance}>Calculate</button>
      {result && <h3>Resistance: {result}</h3>}

      <hr />

      <div>
        <input
          type="number"
          placeholder="Enter resistance value (Ω)"
          value={resistanceValue}
          onChange={(e) => setResistanceValue(e.target.value)}
        />
        <button onClick={() => calculateColors(resistanceValue)}>
          Get Colors
        </button>

        {colorBands.length > 0 && <h3>Color Bands: {colorBands.join(", ")}</h3>}
      </div>
      <hr />
      <h2>Capacitor Value</h2>
      <div>
        <label>Number 1: </label>
        <input
          type="number"
          onChange={(e) => setNumOne(e.target.value)}
        ></input>
        <br />
        <label>Number 2: </label>
        <input
          type="number"
          onChange={(e) => setNumTwo(e.target.value)}
        ></input>
        <br />
        <label>Number 3: </label>
        <input
          type="number"
          onChange={(e) => setNumThree(e.target.value)}
        ></input>
        <table>
          <tr>
            <th>amount</th>
            <th>Unit</th>
          </tr>
          <tr>
            <td>{total}</td>
            <td>pF</td>
          </tr>
          <tr>
            <td>{total * 0.001}</td>
            <td>nF</td>
          </tr>
          <tr>
            <td>{total * 0.000001}</td>
            <td>uF</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ResCaps;
