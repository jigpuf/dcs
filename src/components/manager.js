import React from "react";

const Manager = () => {
  const steps = [
    {
      part: "Overview",
      points: [
        "Establish work Scope",
        "Establish my Role",
        "Impact on Company",
        "List of Contacts",
        "Task List",
      ],
      notes: [
        "What is expected of you and what should the results look like",
        "What are my specific responsibilities and their relationship to the roles of others",
        "Time, Money, Simplicity, Longevity, Downtime, Flexibility, Morale, Capabilities, Public sentiment",
        "All the people I will need to contact along the process",
        "A consice list of things I need to do",
      ],
    },
    {
      part: "Controls Planning",
      points: [
        "How it works meeting",
        "I/O Count",
        "Channel Allocation",
        "DAQ hardware requirements",
        "Instrument List",
        "Enclosure Plan",
        "Raceway Plan",
        "Logic Design",
        "Network/Power",
        "Justificatios for  decisions",
      ],
      notes: [""],
    },
    {
      part: "Purchasing",
      points: [
        "List of parts for cotrols",
        "List of parts for Enclosure",
        "List of parts for raceways",
        "List of vender and prices",
        "Order parts and track",
      ],
      notes: [""],
    },
    {
      part: "Documentation",
      points: [
        "Jira",
        "Confluence",
        "MWL",
        "Visio of backplane",
        "Wiring Diagrams",
        "Bill of Materials",
        "Logic Flow",
        "Backplane Visio",
        "Programs",
        "Setup Calibration/ Configure info",
        "Manuals",
        "Drawings on project",
        "Orders of parts",
        "Build Photos",
      ],
      notes: [""],
    },
    {
      part: "Program/Setup/Testing",
      points: [
        "Program PLC",
        "Program HMI",
        "Program pendants",
        "Setup instruments and equipment",
        "Check functionality",
      ],
      notes: [""],
    },
    {
      part: "Build",
      points: [
        "Build Enclosures",
        "Mount enclosures",
        "Build raceway",
        "Build cabling",
        "Install instruments",
        "Onsite Calibration",
        "Build out Power",
        "Build out Network",
        "Final Checkouts documentation",
      ],
      notes: [""],
    },
    {
      part: "Turn over",
      points: ["Function demonstration", "Training ops"],
      notes: [""],
    },
    {
      part: "Lessons Learned",
      points: ["Check against efficiency metrics"],
      notes: [""],
    },
    {
      part: "Knowledge Bank",
      points: [
        "Enter documentation into repository",
        "Make it searchable and available",
      ],
      notes: [""],
    },
  ];
  const renderSteps = steps.map((item) => {
    const points = item.points.map((point) => {
      return <li>{point}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.part}</td>
        <td>
          <ol>{points}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Project Management</h2>
      <table>
        <tr>
          <th>Part</th>
          <th>Points</th>
          <th>Notes</th>
        </tr>
        {renderSteps}
      </table>
    </div>
  );
};

export default Manager;
