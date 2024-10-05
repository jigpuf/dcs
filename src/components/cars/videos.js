import React from "react";

const Videos = () => {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=wixyyZSEPD4&t=29s",
      title: "Toyota Tundra Oil Change Step by Step instructions",
      subjects: ["Oil Change"],
      vehicle: "Tundra",
    },
    {
      url: "https://www.youtube.com/watch?v=nBBjo71k22s",
      title: "Toyota Oil Canister Tutorial",
      subjects: ["Oil Change"],
      vehicle: "Tundra",
    },
    {
      url: "https://www.youtube.com/shorts/tnBL7bure8E",
      title: "How to check if your engine coolant needs to be replaced",
      subjects: ["Coolant"],
      vehicle: "Any",
    },
    {
      url: "https://www.youtube.com/watch?v=ik7LlJpxUlg&t=29s",
      title: "2004 Toyota Tacoma, HVAC control head replacement",
      subjects: ["AC", "HVAC"],
      vehicle: "Tacoma",
    },
    {
      url: "https://www.youtube.com/watch?v=6bIbcpnCRyI&t=15s",
      title: "HOW TO TEST AC CLUTCH COIL. ANY CAR",
      subjects: ["AC", "HVAC"],
      vehicle: "Any",
    },
    {
      url: "https://www.youtube.com/watch?v=5gOeBE-ylQw",
      title: "How to Diagnose and Replace Universal Joints (ULTIMATE Guide)",
      subjects: ["U Joints"],
      vehicle: "Any",
    },
    {
      url: "https://www.youtube.com/watch?v=O7DELdn6Nls",
      title:
        "Nissan Titan or Armada Driveshaft Universal U-Joint & Center Support Carrier Bearing",
      subjects: [""],
      vehicle: "",
    },
    {
      url: "https://www.youtube.com/watch?v=UIJRulLkPOQ",
      title: "Oil Change",
      subjects: ["Oil Change"],
      vehicle: "Tacoma",
    },
    {
      url: "https://www.youtube.com/watch?v=FglBsUEOSEk",
      title: "Transmission Service Toyota Tacoma 1995-2004",
      subjects: ["Transmission"],
      vehicle: "Tacoma",
    },
    {
      url: "https://www.youtube.com/watch?v=aJIHhJRgl1g",
      title: "2004 Toyota Tacoma Tune Up",
      subjects: ["Tune Up"],
      vehicle: "Tacoma",
    },
    { url: "", title: "", subjects: [""], vehicle: "" },
    { url: "", title: "", subjects: [""], vehicle: "" },
    { url: "", title: "", subjects: [""], vehicle: "" },
  ];
  const renderVideos = videos.map((item) => {
    const subjects = item.subjects.map((subject) => {
      return <li>{subject}</li>;
    });
    return (
      <tr>
        <td>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </td>
        <td>
          <ol>{subjects}</ol>
        </td>
        <td>{item.vehicle}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Subject</th>
          <th>Vehicle</th>
        </tr>
        {renderVideos}
      </table>
    </div>
  );
};

export default Videos;
