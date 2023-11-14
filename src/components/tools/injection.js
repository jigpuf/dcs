import React from "react";
import TableMaker from "../../utilities/tableMaker";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";
import Smart from "../instruments/smart.js";
import Dumb from "../instruments/dumb.js";
import Channels from "../controls/channels.js";

const Injection = () => {
  const items = [
    { name: "Smart Instruments", slug: "smart", component: <Smart /> },
    { name: "Dumb Instruments", slug: "dumb", component: <Dumb /> },
    { name: "Dumb Instruments", slug: "dumb", component: <Channels /> },
  ];
  const tablesHead = [
    "Channel",
    "Instrument",
    "Top Screen",
    "Bottom Screen",
    "Black Probe",
    "Red Probe",
  ];
  const instruments = [
    {
      channel: "Analog In(Current)",
      instrument: "4-20mA Instrument",
      top: "",
      bottom: "Source 2-Wire Sim",
      black: "mA- (4W)",
      red: "mA+ (3W)",
    },
    {
      channel: "Analog In(Voltage)",
      instrument: "Pressure Ducer",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "RTD(1000 ohm)",
      instrument: "1000 ohm RTD",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "RTD(100 ohm)",
      instrument: "100 ohm RTD",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "K-Type TC",
      instrument: "K-Type TC",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "E-Type TC",
      instrument: "E-Type TC",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
  ];
  const channels = [
    {
      channel: "Analog In(Current)",
      instrument: "",
      top: "Measure Loop mA",
      bottom: "--",
      black: "Measure Com",
      red: "Measure Loop",
    },
    {
      channel: "Analog In(Voltage)",
      instrument: "Pressure Ducer",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "RTD(1000 ohm)",
      instrument: "1000 ohm RTD",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "RTD(100 ohm)",
      instrument: "100 ohm RTD",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "K-Type TC",
      instrument: "K-Type TC",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    {
      channel: "E-Type TC",
      instrument: "E-Type TC",
      top: "",
      bottom: "",
      black: "",
      red: "",
    },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
    { channel: "", instrument: "", top: "", bottom: "", black: "", red: "" },
  ];
  return (
    <div>
      <h1>Injection Meter Fluke 725</h1>
      <img src="https://static.grainger.com/rp/s/is/image/Grainger/6KD42_AS01?$adapimg$&hei=1072&wid=1072"></img>
      <h2>Meter as Instrument</h2>
      <TableMaker
        head={tablesHead}
        array={instruments}
        tableType="simpleColumn"
      />
      <h2>Meter as Channel</h2>
      <TableMaker head={tablesHead} array={channels} tableType="simpleColumn" />
      <h2>Check Resistance</h2>
      <ol>
        <li>
          Turn off power to the circuit or device being measured and disconnect
          it from any power source.
        </li>
        <li>
          Connect the leads of the Fluke 726 to the ends of the resistor being
          measured. The red lead should be connected to the positive end of the
          resistor and the black lead should be connected to the negative end.
        </li>
        <li>
          Set the Fluke 726 to resistance measurement mode by pressing the
          "MODE" button until the resistance symbol (Ω) is displayed on the
          screen.
        </li>
        <li>
          Adjust the range of the resistance measurement if necessary by
          pressing the "RANGE" button. The Fluke 726 can measure resistance up
          to 50 megaohms, and has several range options to choose from.
        </li>
        <li>
          Press the "MEASURE" button to take a resistance reading. The
          resistance value will be displayed on the screen.
        </li>
        <li>
          If necessary, repeat the measurement multiple times to ensure accuracy
          and consistency.
        </li>
        <li>
          When finished, disconnect the leads from the resistor being measured
          and turn off the Fluke 726.
        </li>
      </ol>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Injection;
