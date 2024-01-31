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
      channelType: "AI(V)",
      module: "9202",
      header: "",
      channelCount: "16",
      instruments: "",
    },

    {
      chasisType: "C series",
      channelType: "AI(V)",
      module: "9205",
      header: "Dsub 37",
      channelCount: "32",
      instruments: "Limits, Valve Command Feedback",
    },
    {
      chasisType: "C series",
      channelType: "RTD",
      module: "9216",
      header: "Dsub 37",
      channelCount: "8",
      instruments: "RTD 100 ohm",
    },
    {
      chasisType: "C series",
      channelType: "AI",
      module: "9220",
      header: "",
      channelCount: "16",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "Bridge",
      module: "9237",
      header: "Dsub 37 Socket",
      channelCount: "4",
      instruments: "Load Cells, Full bridge",
    },

    {
      chasisType: "C series",
      channelType: "AO(V)",
      module: "9264",
      header: "",
      channelCount: "16",
      instruments: "",
    },
    {
      chasisType: "C series",
      channelType: "AO(I)",
      module: "9266",
      header: "",
      channelCount: "8",
      instruments: "V200",
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
      module: "9202",
      use: "AI(V)",
      total: ["White:16", "Green:16", "Black:4"],
      empty: ["19"],
      wires: [
        "White:(AI+)1-8,11-18",
        "Green:(AI-)20-27,30-37",
        "Black:(COM)9,10,28,29",
      ],
    },
    {
      module: "9205",
      use: "Limit Board Output",
      total: ["White:37"],
      empty: [""],
      wires: ["White:1-37"],
    },
    {
      module: "9205",
      use: "Valve Command Feedback on driver board",
      total: ["White:37"],
      empty: [""],
      wires: ["White:1-37"],
    },
    {
      module: "9205",
      use: "AI(V)",
      total: ["White:32", "Black:3"],
      empty: ["9", "28"],
      wires: [
        "White:(AI)1-8,11-18,20-27,30-37",
        "Black:(Com)10,29 (AISense)19",
      ],
    },
    {
      module: "9216",
      use: "100 ohm RTD",
      total: ["Red:8", "White:8", "Green:8", "Black:8"],
      empty: ["9-10", "19", "28-29"],
      wires: [
        "Red:(Ex+)1,3,5,7,11,13,15,17",
        "White:(Sig+)20,22,24,26,30,32,34,36",
        "Green:(Sig-)2,4,6,8,12,14,16,18",
        "Black:(Ex-)21,23,25,27,31,33,35,37",
      ],
    },

    {
      module: "9220",
      use: "",
      total: ["White:16", "Green:16", "Black:5"],
      empty: [""],
      wires: ["White:1-8,11-18", "Green:20-27,30-37", "Black:9,10,19,28,29"],
    },
    {
      module: "9237",
      use: "Full bridge, Load Cells",
      total: ["Red:5", "White:4", "Green:4", "Black:5", "Orange:4", "Blue:4"],
      empty: ["4", "8-9", "14", "18-19", "23", "27-28", "33", "37"],
      wires: [
        "Red:(EX+)2,6,12,16 (VSUP+)10",
        "White:(AI+)3,7,13,17",
        "Green:(AI-)22,26,32,36",
        "Black:(EX-)21,25,31,35 (VSUP-)29",
        "Orange:(RS+)1,5,11,15",
        "Blue:(RS-)20,24,30,34",
      ],
    },
    {
      module: "9264",
      use: "AO(V)",
      total: ["Red:16", "Black:17"],
      empty: ["9-10", "28-29"],
      wires: ["Red:(AO+)1-8,11-18", "Black:(Com)19,20-27,30-37"],
    },
    {
      module: "9266",
      use: "AO(I) V200",
      total: ["Red:9", "Black:9"],
      empty: ["9-18", "28", "30-37"],
      wires: ["Red:(AO+)1-8 (Vsup)29", "Black:(Com)20-27,19"],
    },
    {
      module: "9476",
      use: "Valve Command to Valve board(all to board)",
      total: ["Red:36", "Black:1"],
      empty: [""],
      wires: [
        "Red:(CMD)1-8,11-18,20-27,30-37 (VSUP)9-10,28-29",
        "Black:(Com)37",
      ],
    },

    {
      module: "Driver Board",
      use: "To valve Channel",
      total: ["Red:16", "Black:16"],
      empty: ["17-19", "36-39"],
      wires: ["Red:(Valve+)1-16", "Black:(Valve-)20-35"],
    },

    {
      module: "",
      use: "",
      total: [""],
      empty: [""],
      wires: [""],
    },
    {
      module: "",
      use: "",
      total: [""],
      empty: [""],
      wires: [""],
    },
  ];
  const renderDsubs = dsubs.map((item) => {
    const totals = item.total.map((total) => {
      return <li>{total}</li>;
    });
    const empties = item.empty.map((empty) => {
      return <li>{empty}</li>;
    });
    const channels = item.wires.map((channel) => {
      return <li>{channel}</li>;
    });
    return (
      <tr>
        <td>{item.module}</td>
        <td>{item.use}</td>
        <td>
          <ul>{totals}</ul>
        </td>
        <td>
          <ol>{channels}</ol>
        </td>
        <td>
          <ul>{empties}</ul>
        </td>
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
          <th>Totals</th>
          <th>Channels</th>
          <th>Empty</th>
        </tr>
        {renderDsubs}
      </table>
    </div>
  );
};

export default NiHardware;
