import React from "react";

const Osi = () => {
  const osiLayers = [
    {
      layer: 1,
      name: "Physical Layer",
      description:
        "Transmission and reception of raw bit streams over a physical medium. Wire, patch panels.",
    },
    {
      layer: 2,
      name: "Data Link Layer",
      description:
        "Reliable transmission of data frames between two nodes connected by a physical layer. Switching, MAC address, media access control, ARP (Address Resolution Protocol).",
    },
    {
      layer: 3,
      name: "Network Layer",
      description:
        "Structuring and managing a multi-node network, including addressing, routing, and traffic control. Router operation (IP addresses, port configuration, DNS, Gateways, Subnet Mask).",
    },
    {
      layer: 4,
      name: "Transport Layer",
      description:
        "Reliable transmission of data segments between points of a network, including segmentation, acknowledgement, and multiplexing. Decides how much info should be sent at a time. Windowing. Not a common problem.",
    },
    {
      layer: 5,
      name: "Session Layer",
      description:
        "Managing communication sessions, i.e., continuous exchange of information in the form of multiple back-and-forth transmissions between nodes. Creates session between two computers (peer-to-peer configuration files).",
    },
    {
      layer: 6,
      name: "Presentation Layer",
      description:
        "Translation of data between a networking service and an application, including character encoding, data compression, and encryption/decryption. The operating system (configuration of operating system, device drivers, security protocol).",
    },
    {
      layer: 7,
      name: "Application Layer",
      description:
        "Interface Connector: The application layer does not have a specific interface connector as it operates at a higher level, typically within the operating system or software stack. The application layer protocols, such as HTTP, FTP, SMTP, etc., use various ports and protocols to communicate over the network.",
    },
  ];
  const renderosiLayers = osiLayers.map((item) => {
    return (
      <tr>
        <td>{item.layer}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>OSI Model</h1>
      <table>
        <tr>
          <th>Layer</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {renderosiLayers}
      </table>
    </div>
  );
};
export default Osi;
