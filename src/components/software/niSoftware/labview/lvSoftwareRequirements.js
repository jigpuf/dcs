import React from "react";

const LVSoftwareRequirements = () => {
  const toolkits = [
    {
      use: "Purpose",
      explanation:
        "Toolkits are developed to address specific requirements or industries. They provide additional libraries, APIs, functions, and pre-built components that simplify development in specialized areas.",
    },
    {
      use: "Functionality",
      explanation:
        "Each toolkit focuses on a specific domain or application area and provides a set of specialized tools and functions. These tools are designed to streamline development tasks and provide ready-to-use components that are tailored to specific needs.",
    },
    {
      use: "Hardware Compatibility",
      explanation:
        "Some toolkits are developed to work with specific hardware platforms or devices. For example, there are toolkits for working with NI data acquisition (DAQ) devices, PXI modular instruments, CompactRIO controllers, and other NI hardware.",
    },
    {
      use: "Third-Party Toolkits",
      explanation:
        "In addition to NI-developed toolkits, there are also numerous third-party toolkits available for LabVIEW. These toolkits are developed by independent vendors and can provide specialized functionality or integration with third-party hardware.",
    },
    {
      use: "Installation and Licensing",
      explanation:
        "Toolkits are typically separate installations from the base LabVIEW software. They may require their own licenses, which are separate from the LabVIEW license. Depending on the toolkit, it may be necessary to purchase or obtain a separate license to use the additional functionality provided by the toolkit.",
    },
    {
      use: "Version Compatibility",
      explanation:
        "It is important to ensure that the toolkit you want to use is compatible with the version of LabVIEW you are using. Not all toolkits are available for all LabVIEW versions, and compatibility may vary.",
    },
  ];
  const renderToolkits = toolkits.map((item) => {
    return (
      <tr>
        <td>{item.use}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  const toolkitNames = [
    {
      name: "NI Industrial Automation",
      purpose:
        "Provides tools, functions, and drivers for industrial automation applications, including support for industrial protocols and communication with industrial devices and systems.",
    },
    {
      name: "LabVIEW Real-Time Module",
      purpose:
        "Enables the development of real-time and embedded systems, offering features for deterministic execution, hardware I/O, and communication with other devices.",
    },
    {
      name: "NI Vision Development Module",
      purpose:
        "Focuses on machine vision and image processing applications, providing a wide range of functions and algorithms for image acquisition, processing, analysis, and machine vision tasks.",
    },
    {
      name: "NI TestStand",
      purpose:
        "A test management software that works seamlessly with LabVIEW, providing a framework for building and executing automated test systems, managing test execution, and generating reports.",
    },
    {
      name: "NI SoftMotion Module",
      purpose:
        "Designed for motion control applications, providing tools and functions for motion trajectory planning, kinematics, and synchronization of multiple axes.",
    },
    {
      name: "LabVIEW FPGA Module",
      purpose:
        "Enables the development of custom hardware-accelerated solutions using FPGAs, allowing LabVIEW to target and program FPGAs for high-speed and parallel processing tasks.",
    },
  ];
  const renderToolkitNames = toolkitNames.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.purpose}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Labview Software Requirements</h1>
      <a href="https://www.ni.com/en-us/shop/labview.html" target="_blank">
        Labview Download
      </a>
      <table>
        <tr>
          <th>Toolkit Use</th>
          <th>Description</th>
        </tr>
        {renderToolkits}
      </table>
      <table>
        <tr>
          <th>Toolkit Name</th>
          <th>Purpose</th>
        </tr>
        {renderToolkitNames}
      </table>
    </div>
  );
};

export default LVSoftwareRequirements;
