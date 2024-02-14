import React from "react";

const NiCommunications = () => {
  const communicationProtocols = [
    {
      name: "GPIB",
      description: "General Purpose Interface Bus",
      bestSuitedFor:
        "Connecting and controlling instruments in a laboratory or test environment with a need for high-speed data transfer and instrument control capabilities.",
      distanceLimitation: "Short distances, typically a few meters.",
      interfaceConnector: "GPIB connector (IEEE 488)",
    },
    {
      name: "USB",
      description: "Universal Serial Bus",
      bestSuitedFor:
        "Connecting a wide range of devices to a computer, offering flexibility, ease of use, and compatibility. Well-suited for portable or desktop data acquisition and instrument control applications.",
      distanceLimitation: "Up to 5 meters for reliable communication.",
      interfaceConnector: "USB Type-A, USB Type-B, USB Type-C",
    },
    {
      name: "Ethernet",
      description: "Ethernet and TCP/IP",
      bestSuitedFor:
        "Enabling network communication, remote access, and distributed measurements. Ideal for applications that require data acquisition or instrument control over long distances or across multiple devices or systems.",
      distanceLimitation:
        "Up to 100 meters without signal degradation. Longer distances possible with switches, repeaters, or fiber optic cables.",
      interfaceConnector: "RJ-45 connector",
    },
    {
      name: "CAN",
      description: "Controller Area Network",
      bestSuitedFor:
        "Industrial automation and control systems, particularly in automotive applications, where robust and reliable communication between devices or systems is required.",
      distanceLimitation:
        "Typically limited to a few hundred meters. Signal repeaters or extenders may be required for longer distances.",
      interfaceConnector: "CAN bus connector (e.g., DB9, DB25)",
    },
    {
      name: "Modbus",
      description: "Modbus",
      bestSuitedFor:
        "Integration with industrial automation and control systems that support the Modbus protocol. Often used for reading and writing data from/to devices in a supervisory control and data acquisition (SCADA) system.",
      distanceLimitation:
        "Depends on the underlying communication medium. RS-485, for example, can support distances up to 1.2 kilometers, but signal quality and data rates may vary with longer distances.",
      interfaceConnector:
        "Depends on the underlying communication medium (e.g., RJ-45, terminal block)",
    },
    // Add more protocols as needed
  ];
  const rendercommunicationProtocols = communicationProtocols.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.bestSuitedFor}</td>
        <td>{item.distanceLimitation}</td>
        <td>{item.interfaceConnector}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>NI Communications</h1>
      <table>
        <tr>
          <th>Protocol</th>
          <th>Description</th>
          <th>Best for</th>
          <th>Distance</th>
          <th>Connector</th>
        </tr>
        {rendercommunicationProtocols}
      </table>
    </div>
  );
};

export default NiCommunications;
