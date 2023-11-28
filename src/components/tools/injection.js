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
    { name: "Channels", slug: "channels", component: <Channels /> },
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
      instrument: "4-20mA Instrument (Loop Powered, passive)",
      top: "--",
      bottom: "Source 2-Wire Sim",
      black: "Source/Measure mA- → (-)",
      red: "Source/Measure mA+ → (+)",
    },
    {
      channel: "Analog In(Current)",
      instrument: "4-20mA Instrument (Not Loop Powered, Active)",
      top: "--",
      bottom: "Source mA",
      black: "Source/Measure mA- → (-)",
      red: "Source/Measure mA+ → (+)",
    },
    {
      channel: "Analog In(Voltage)",
      instrument: "Voltage Output (Pressure Ducer etc)",
      top: "--",
      bottom: "Source V",
      black: "Source/Measure Com → (-)",
      red: "Source/Measure V → (+)",
    },
    {
      channel: "RTD(1000 ohm)",
      instrument: "PT1000 ohm RTD 4-Wire",
      top: "--",
      bottom: "Source *F/*C PT1000",
      black: "Source/Measure  Com 2X → Excitation(+) & Sense(+)",
      red: "Source/ Measure RTD 2X → Excitation(-) & Sense(-)",
    },
    {
      channel: "RTD(100 ohm)",
      instrument: "PT100 ohm RTD 4-Wire",
      top: "--",
      bottom: "Source *F/*C PT100",
      black: "Source/Measure  Com 2X → Excitation(+) & Sense(+)",
      red: "Source/ Measure RTD 2X → Excitation(-) & Sense(-)",
    },
    {
      channel: "K type TC",
      instrument: "K type TC",
      top: "--",
      bottom: "Source *F/*C K",
      black: "Red Wire Source/Measure TC Big Slot → (-)",
      red: "Yellow Wire Source/Measure TC Small Slot → (+)",
    },
    {
      channel: "E type TC",
      instrument: "E type TC",
      top: "--",
      bottom: "Source *F/*C E",
      black: "Red Wire Source/Measure TC Big Slot → (-)",
      red: "Purple Wire Source/Measure TC Small Slot → (+)",
    },
    {
      channel: "Resistance",
      instrument: "Resistor 3200 ohm Max",
      top: "--",
      bottom: "Source Ω ",
      black: "Source/Measure COM → (-)",
      red: "Source/Measure Ω → (+)",
    },
    {
      channel: "Frequency",
      instrument: "Frequency Output (1K Hz Max)",
      top: "--",
      bottom: "Source Hz",
      black: "Source/Measure COM → (-)",
      red: "Source/Measure Hz → (+)",
    },
  ];
  const channels = [
    {
      channel: "Analog In(Current)",
      instrument: "4-20mA Instrument (Loop Powered, passive)",
      top: "Measure Loop mA",
      bottom: "--",
      black: "Measure Com → Excite(-)",
      red: "Measure Loop → Excite(+)",
    },
    {
      channel: "Analog In(Current)",
      instrument: "4-20mA Instrument (Not Loop Powered, Active)",
      top: "Measure mA",
      bottom: "--",
      black: "Measure Com → Sense(-)",
      red: "Measure mA → Sense(+)",
    },
    {
      channel: "Analog In(Voltage)",
      instrument: "Voltage Output (Pressure Ducer etc)",
      top: "Measure V",
      bottom: "--",
      black: "Measure Com → Sense(-)",
      red: "Source/Measure V → Sense(+)",
    },
    {
      channel: "RTD(100 ohm)",
      instrument: "PT100 ohm RTD 4-wire",
      top: "--",
      bottom: "Measure *F/*C PT100 4-Wire",
      black: "Source/Measure 3W, Source/Measure COM → (-)",
      red: "Source/Measure 4W, Source/Measure V → (+)",
    },
    {
      channel: "RTD(1000 ohm)",
      instrument: "PT1000 ohm RTD 4-wire",
      top: "--",
      bottom: "Measure *F/*C PT1000 4-Wire",
      black: "Source/Measure 3W, Source/Measure COM → (-)",
      red: "Source/Measure 4W, Source/Measure V → (+)",
    },

    {
      channel: "K-Type TC",
      instrument: "K-Type TC",
      top: "--",
      bottom: "Measure *F/*C K",
      black: "Red Wire Source/Measure TC Big Slot → (-)",
      red: "Yellow Wire Source/Measure TC Small Slot → (+)",
    },
    {
      channel: "E-Type TC",
      instrument: "E-Type TC",
      top: "--",
      bottom: "Measure *F/*C E",
      black: "Red Wire Source/Measure TC Big Slot → (-)",
      red: "Purple Wire Source/Measure TC Small Slot → (+)",
    },
    {
      channel: "Resistance(Must remove Power",
      instrument: "Resistor",
      top: "--",
      bottom: "Measure Ω ",
      black: "Source/Measure COM → (-)",
      red: "Source/Measure Ω → (+)",
    },
    {
      channel: "Frequency",
      instrument: "Frequency Output",
      top: "--",
      bottom: "Measure Hz",
      black: "Source/Measure COM → (-)",
      red: "Source/Measure Hz → (+)",
    },
  ];
  const capabilitiesHead = ["Signal", "Source", "Measure"];
  const capabilities = [
    { signal: "Voltage", source: "10V", measure: "30V" },
    { signal: "mA", source: "24 mA", measure: "Same" },
    { signal: "mA Loop", source: "24mA", measure: "Same" },
    { signal: "Resistance", source: "3200 Ω", measure: "" },
    {
      signal: "RTD",
      source:
        "Pt100(1472°F), Pt3916, Pt200, Pt500, Pt1000(1166°F), Ni120, Pt3926",
      measure: "Same",
    },
    {
      signal: "TC",
      source: "K(2498°F), E(1742°F), J, L, N, R, S, T, U, BP, XK, mV, B ",
      measure: "Same",
    },
    { signal: "Frequency", source: "1000 Hz", measure: "" },
  ];
  return (
    <div>
      <h1>Injection Meter Fluke 725</h1>
      <img src="https://static.grainger.com/rp/s/is/image/Grainger/6KD42_AS01?$adapimg$&hei=1072&wid=1072"></img>
      <h2>Capabilities</h2>
      <TableMaker
        head={capabilitiesHead}
        array={capabilities}
        tableType="simpleColumn"
      />
      <h2>Meter as Instrument || (Check Channel)</h2>
      <TableMaker
        head={tablesHead}
        array={instruments}
        tableType="simpleColumn"
      />
      <h2>Meter as Channel || (Check Instrument)</h2>
      <TableMaker head={tablesHead} array={channels} tableType="simpleColumn" />

      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Injection;
