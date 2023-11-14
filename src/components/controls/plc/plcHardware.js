import React from "react";

const PlcHardware = () => {
  const hardware = [
    {
      type: "Processor",
      pn: "1769-L33ER",
      note: "8X max modules, Power supply has to be in the first 3 modules",
    },
    {
      type: "Power Supply 24VDC",
      pn: "1769-PB4",
      note: "Only one PSU can be used in one brick of modules. They cannot auction",
    },
    {
      type: "Power Supply 120VAC",
      pn: "1769-PA4",
      note: "Only one PSU can be used in one brick of modules. They cannot auction",
    },

    { type: "Digital in", pn: "1769-IQ16", note: "16 channel, 24V" },
    { type: "Digital in", pn: "1769-IQ32", note: "32 channel, 24V" },
    { type: "Digital Out", pn: "1769-OB16", note: "16 channel, 24V" },
    { type: "Digital Out", pn: "1769-OB32", note: "32 channel, 24V" },
    {
      type: "Analog In",
      pn: "1769-IF8",
      note: "8 channel, current or voltage",
    },
    { type: "Analog In", pn: "1769-IF16C", note: "16 channel current" },
    { type: "Analog In", pn: "1769-IF16V", note: "16 channel voltage" },
    { type: "Analog Out", pn: "1769-OF8C", note: "8 channel 4-20" },
    {
      type: "Temp",
      pn: "1769-IT6",
      note: "6 channel TC any Type, Need to be at least 3 modules away from power supply",
    },
    { type: "Temp", pn: "1769-IR6", note: "6 channel RTD" },
    { type: "Ethernet", pn: "1769-AENTR", note: "link between places" },
    { type: "Left End Cap", pn: "1769-ECL", note: "" },
    { type: "Right End Cap", pn: "1769-ECR", note: "" },
  ];
  const micro = [
    {
      type: "CPU-Micro820 Processor",
      pn: "",
      note: "",
    },
    {
      type: "CPU-Micro850 Processor",
      pn: "",
      note: "",
    },
    {
      type: "CPU-Micro870 Processor",
      pn: "2080-LC70-24QBB",
      note: "14DI,10DO included",
    },

    { type: "Plug IN, 4 Channel AI", pn: "2080-IF4", note: "" },
    { type: "Plug in, 8 Channel 4DI, 4DO", pn: "2080-IQ4OB4", note: "" },
    {
      type: "Expansion, 16 channel digital input module",
      pn: "2085-IQ16",
      note: "",
    },
    {
      type: "Expansion, 16 channel digital output module",
      pn: "2085-OB16",
      note: "",
    },
    {
      type: "Expansion, 4 channel Thermocouple/RTD module",
      pn: "2085-IRT4",
      note: "",
    },
    { type: "Expansion, 8 channel AI E/I module", pn: "2085-IF8", note: "" },
    { type: "Expansion, 4 channel AO E/I module", pn: "2085-OF4", note: "" },
    { type: "End Cap, used after expansion modules", pn: "2085-ECR", note: "" },
  ];
  const renderHardware = hardware.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.pn}</td>
        <td>{item.note}</td>
      </tr>
    );
  });
  const renderMicro = micro.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.pn}</td>
        <td>{item.note}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Hardware</h2>
      Questions for deciding on hardware:
      <br />
      <li>What is the I/O count?</li>
      <p>The I/O count dictates both the types and numbers of Modules.</p>
      <li>What Channel configuration/instrumentation is being used?</li>
      <p>
        There are several types of channel setups. Depending on what version is
        used, we may need a different module. Ex. If we use a limit that sends 2
        types of voltages, we may need analog in modules. If it just completes a
        circuit, we may need a soucing digital in etc. Much of this will be
        based on the type of instrumentation being used.
      </p>
      <li>How much power draw will be used by the module count?</li>
      <p>This dictates the type of PSU being used.</p>
      <li>How far from the Switch will the PLC be?</li>
      <p>
        While ethernet is typically the best option, It is limited in its range.
        Also the type of things it is communicating with may change its
        communications protocol.
      </p>
      <li>Will it be cheaper or more versital with signal conditioners?</li>
      <p>
        In some cases, it makes sense to use different signal conditioners in
        order to change module types as a means of saving money, improving
        readability or adding versatility to the system. Prosense modules or
        formic blocks are a good example of that.
      </p>
      <h3>PLC Standard hardware:</h3>
      <h3>CompactLogix</h3>
      <table>
        <tr>
          <th>Part</th>
          <th>PN</th>
          <th>Note</th>
        </tr>
        {renderHardware}
      </table>
      <h3>Micro</h3>
      <table>
        <tr>
          <th>Part</th>
          <th>PN</th>
          <th>Note</th>
        </tr>
        {renderMicro}
      </table>
      Notes:
      <br />
      Can be ordered from{" "}
      <a href="https://www.reynoldsonline.com/" target="_blank">
        The Reynolds Company
      </a>
      <br />
      Contact:ccarnes@reynco.com 254-776-7400
    </div>
  );
};

export default PlcHardware;
