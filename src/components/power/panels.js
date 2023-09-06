import React from "react";

const Panels = () => {
  const wires = [
    {
      voltage: "120",
      L1: "Black",
      L2: "Red",
      L3: "Blue",
      N: "White",
      G: "Green/Copper",
    },
    {
      voltage: "240",
      L1: "Black",
      L2: "Red",
      L3: "Blue",
      N: "White",
      G: "Green/Copper",
    },
    {
      voltage: "208",
      L1: "Black",
      L2: "Red",
      L3: "Blue",
      N: "White",
      G: "Green/Copper",
    },
    {
      voltage: "277",
      L1: "Brown",
      L2: "Orange",
      L3: "Yellow",
      N: "Gray",
      G: "Green/Copper",
    },
    {
      voltage: "480",
      L1: "Brown",
      L2: "Orange",
      L3: "Yellow",
      N: "Gray",
      G: "Green/Copper",
    },
  ];
  const blocks = [
    { block: "1.5", gauge: "16", jumpers: "" },
    { block: "2.5", gauge: "14", jumpers: "" },
    { block: "ST-4", gauge: "12", jumpers: "" },
    { block: "ST-6", gauge: "10", jumpers: "FBS XX-8" },
  ];
  const gauges = [
    { awg: "00", area: "67.4", ferrule: "none", ferruleSize: "--" },
    { awg: "0", area: "53.5", ferrule: "none", ferruleSize: "--" },
    { awg: "10", area: "5.26", ferrule: "Yellow", ferruleSize: "" },
    { awg: "12", area: "3.31", ferrule: "Gray", ferruleSize: "4.0" },
    { awg: "14", area: "2.08", ferrule: "Blue", ferruleSize: "2.5" },
    { awg: "16", area: "1.31", ferrule: "Black", ferruleSize: "1.5" },
    { awg: "18", area: ".823", ferrule: "Red", ferruleSize: "1.0" },
    { awg: "20", area: ".518", ferrule: "White", ferruleSize: ".5" },
    { awg: "22", area: ".326", ferrule: "White", ferruleSize: ".5" },
    { awg: "24", area: ".205", ferrule: "Till", ferruleSize: ".34" },
  ];
  const renderWires = wires.map((item) => {
    return (
      <tr>
        <td>{item.voltage}</td>
        <td>{item.L1}</td>
        <td>{item.L2}</td>
        <td>{item.L3}</td>
        <td>{item.N}</td>
        <td>{item.G}</td>
      </tr>
    );
  });
  const renderGauges = gauges.map((item) => {
    return (
      <tr>
        <td>{item.awg}</td>
        <td>{item.area}</td>
        <td>{item.ferrule}</td>
        <td>{item.ferruleSize}</td>
      </tr>
    );
  });
  const renderBlocks = blocks.map((item) => {
    return (
      <tr>
        <td>{item.block}</td>
        <td>{item.gauge}</td>
        <td>{item.jumpers}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>DC Distribution</h2>

      <h3>Color Code</h3>
      <table>
        <tr>
          <th>Voltage</th>
          <th>L1</th>
          <th>L2</th>
          <th>L3</th>
          <th>Neutral</th>
          <th>Ground</th>
        </tr>
        {renderWires}
      </table>

      <h3>Blocks</h3>
      <table>
        <tr>
          <th>Block</th>
          <th>max AWG</th>
          <th>Jumper</th>
        </tr>
        {renderBlocks}
      </table>

      <h3>Gauge Sizes</h3>
      <table>
        <tr>
          <th>Wire Gauge</th>
          <th>Wire Cross section mm</th>
          <th>Ferrule</th>
          <th>Ferrule Cross section mm</th>
        </tr>
        {renderGauges}
      </table>
    </div>
  );
};

export default Panels;
