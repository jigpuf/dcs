import React from "react";
import TableMaker from "../../../../utilities/tableMaker.js";
import WireCount from "../../../apps/wireCount.js";

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
  ];

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
      <WireCount />
    </div>
  );
};

export default NiHardware;
