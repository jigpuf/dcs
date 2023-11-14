import React from "react";
import TableMaker from "../../../utilities/tableMaker";

const NiHardware = () => {
  const chasisHead = [
    "Model",
    "Slots",
    "Communication",
    "Power Supplies",
    "Control",
  ];
  const chasis = [
    {
      model: "cDaq-9189",
      slots: "8",
      communication: "2 Ethernet",
      power: "1",
      control: "Slave",
    },
    {
      model: "cDaq- 9185",
      slots: "4",
      communication: "2 Ethernet",
      power: "1",
      control: "Slave",
    },
    {
      model: "cRio-9149",
      slots: "8",
      communication: "1 Ethernet",
      power: "2",
      control: "Controller",
    },
    {
      model: "cRio-9147",
      slots: "4",
      communication: "1 Ethernet",
      power: "2",
      control: "Controller",
    },
    { model: "PXI", slots: "", communication: "", power: "", control: "" },
    { model: "PXI", slots: "", communication: "", power: "", control: "" },
  ];
  const modulesHead = [
    "Chasis",
    "Channel Type",
    "Module",
    "Header",
    "Channel Count",
    "Intruments",
  ];
  const modules = [
    {
      chasisType: "PXI",
      channelType: "AI (v)",
      module: "PXIe-4300",
      header: "TB-4300",
      channelCount: "8X AI up to 300V",
      instruments: "Spark feedback, LVDT, ZTS",
    },
    {
      chasisType: "PXI",
      channelType: "AI (V)",
      module: "PXIe-4302",
      header: "TB-4302",
      channelCount: "32X AI",
      instruments:
        "V200 Position, Pressure Ducers, Dynamic Pressure, Analog out Feedback",
    },
    {
      chasisType: "PXI",
      channelType: "AI (V)",
      module: "PXIe-4303",
      header: "TB-4302",
      channelCount: "32X AI, V/I/TC",
      instruments: "Ducers",
    },
    {
      chasisType: "PXI",
      channelType: "AO (V/I)",
      module: "PXIe-4322",
      header: "TB-4322",
      channelCount: "8X AO",
      instruments: "V200 Command, VFD Speed control",
    },
    {
      chasisType: "PXI",
      channelType: "Strain",
      module: "PXIe-4330",
      header: "TB-4330",
      channelCount: " ",
      instruments: "Strain Gagues",
    },
    {
      chasisType: "PXI",
      channelType: "TC",
      module: "PXIe-4353",
      header: "TB-4353",
      channelCount: " ",
      instruments: "TC, K/E",
    },
    {
      chasisType: "PXI",
      channelType: "RDT",
      module: "PXIe-4357",
      header: "TB-4357",
      channelCount: " ",
      instruments: "RTD",
    },
    {
      chasisType: "PXI",
      channelType: "AI (v)",
      module: "PXIe-4497",
      header: "None",
      channelCount: " ",
      instruments: "Dynamic Pressure Ducers, Accelerometers, Microphone",
    },

    {
      chasisType: "PXI",
      channelType: "Multi-Function IO",
      module: "PXI-6224",
      header: "none",
      channelCount: "32X AI, 48X DI/DO",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PXI-6225",
      header: "",
      channelCount: "80X AI,24X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PXI-6229",
      header: "",
      channelCount: "32X AI, 4X AO, 48X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PXI-6251",
      header: "",
      channelCount: "16X AI, 2X AO, 24X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PXIe-6345",
      header: "",
      channelCount: "80X AI, 2X AO, 24X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PCIe-6353",
      header: "",
      channelCount: "32X AI, 4X AO, 48X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "PXIe-6361",
      header: "",
      channelCount: "16X AI, 2X AO, 24X DI/O",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "Multifunction IO",
      module: "6375",
      header: "",
      channelCount: "208X AI, 2X AO, 24X DI/O",
      instruments: "",
    },

    {
      chasisType: "PXI",
      channelType: "DO",
      module: "PXI-6512",
      header: "SCB-100",
      channelCount: "64X DO sourcing",
      instruments: "Valve Command",
    },

    {
      chasisType: "PXI",
      channelType: "Counter",
      module: "PXIe-6624",
      header: "SCB-100",
      channelCount: "8X COunter/Timer",
      instruments: "Flow Meter, ZTS",
    },

    {
      chasisType: "PXI",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "PXI",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },

    {
      chasisType: "C series",
      channelType: "AI (V)",
      module: "9205",
      header: "Dsub 37",
      channelCount: "32",
      instruments: "Limits, Valve Command Feedback",
    },
    {
      chasisType: "C series",
      channelType: "DO",
      module: "9476",
      header: "Dsub 37",
      channelCount: "32 ",
      instruments: "Valve command",
    },
    {
      chasisType: "C series",
      channelType: "RTD",
      module: "9216",
      header: "Dsub 37",
      channelCount: "",
      instruments: "RTD 100 ohm",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "",
      module: "",
      header: "",
      channelCount: " ",
      instruments: "",
    },
  ];

  const dsubs = [
    {
      module: "9205",
      use: "Limit Board",
      red: "",
      white: "1-37 to limit board output",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "9476",
      use: "Valve Command to Valve board(all to board)",
      red: "command 1-8, 11-27, 30-36; VSUP 9-10, 28-29",
      white: "",
      green: "",
      black: "37 com",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "9205",
      use: "Valve Command Feedback(all to the board)",
      red: "",
      white: "1-37",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "Driver Board",
      use: "To valve Channel",
      red: "1-16 Vale(+)",
      white: "",
      green: "",
      black: "20-35 Valve(-)",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "9216",
      use: "100 ohm RTD",
      red: "1,3,5,7,11,13,15,17",
      white: "20,22,24,26,30,32,34,36",
      green: "2,4,6,8,12,14,16,18",
      black: "21,23,25,27,31,33,35,37",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
    {
      module: "",
      use: "",
      red: "",
      white: "",
      green: "",
      black: "",
      brown: "",
      orange: "",
      purple: "",
      blue: "",
    },
  ];
  const renderDsubs = dsubs.map((item) => {
    return (
      <tr>
        <td>{item.module}</td>
        <td>{item.use}</td>
        <td>{item.red}</td>
        <td>{item.white}</td>
        <td>{item.green}</td>
        <td>{item.black}</td>
        <td>{item.brown}</td>
        <td>{item.orange}</td>
        <td>{item.purple}</td>
        <td>{item.blue}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>NI Hardware</h2>
      <h3>Chasis Selection</h3>
      <TableMaker
        tableType="simpleColumn"
        columns={4}
        array={chasis}
        head={chasisHead}
      />

      <h3>Modules</h3>
      <TableMaker
        tableType="simpleColumn"
        columns={6}
        array={modules}
        head={modulesHead}
      />

      <hr />
      <h3>D-Sub Pinout for C-Series Modules</h3>

      <table>
        <tr>
          <th>Module</th>
          <th>Use</th>
          <th>Red</th>
          <th>White</th>
          <th>Green</th>
          <th>Black</th>
          <th>Brown</th>
          <th>Orange</th>
          <th>Purple</th>
          <th>Blue</th>
        </tr>
        {renderDsubs}
      </table>
    </div>
  );
};

export default NiHardware;
