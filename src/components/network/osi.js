import React from 'react';

class Osi extends React.Component {
  render () {
    return (
      <div>
      <h3>Networking</h3>
      <h4>OSI Model</h4>
        <p>
        The OSI model covers all the parts of networking though the actual
        devices may not be built to match the OSI Model specifically.  There are
        7 layers to the OSI model:<br /><br />
        1: Physical layers<br />
        2: Data Link Layer<br />
        3: Network Layer<br />
        4: Transport Layer<br />
        5: Session Layer<br />
        6: Presentation Layer<br />
        7: Application Layer<br />
        </p>
      <h5>1: Physical Layer</h5>
        <p>
        Transmision and reception of raw bit streams over a physical medium.
        Wire, patch panels
        </p>
      <h5>2: Data Link Layer</h5>
        <p>
        Reliable transmission of data frames between two nodes connected by
        a physical layer. Switching, mac address, media access control
        ARP-Address resolution Protocol.
        </p>
      <h5>3: Network Layer</h5>
        <p>
        Structuring and managing a multi-node network, including addressing,
        routing and traffic control.
        Router operation. (IP addresses, port configuration, DNS, Gateways
        Subnet Mask)
        </p>
      <h5>4: Transport Layer</h5>
        <p>
        Reliable transmission of data segments between points of a network,
        including segmentation, acknowledgement and multiplexing.
        Decides how much info should be sent at a time.  Windowing. Not a common
        problem.
        </p>
      <h5>5: Session Layer</h5>
        <p>
        Managing comunication sessions, i.e. continuous exchange of information
        in the form of multible back and forth transmissions between nodes.
        Creates session between two computers(p to p config files)
        </p>
      <h5>6: Presentation Layer</h5>
        <p>
        Translation of data between a networking service and an application;
        including character incoding, data compression, and
        encryption/decryption.
        The operating system(configuration of operating system, device drivers
        security protocol)
        </p>
      <h5>7: Application Layer</h5>
        <p>
        High-level APIs, including resource sharing, remote file access.
        User interaction(gui, Max, etc.)
        </p>

      <h5>Resources</h5>
      <a href="https://en.wikipedia.org/wiki/OSI_model" target='_blank'
      >OSI Model Wikipedia</a><br />
      <a href="https://www.youtube.com/watch?v=HEEnLZV2wGI" target='_blank'
      >OSI model Demystified</a><br />
      </div>
    );
  }
  }
export default Osi;
