import React from "react";

const Contactors = () => {
  const contactors = [
    {
      rating: "Duty Rating",
      options: [
        "AC-1 for resistive loads and heating",
        "AC-3 for motors and pumps",
      ],
    },
    {
      rating: "Maximum Rated Current",
      options: ["Calculate for inrush or max depending on load"],
    },
    { rating: "Coil Energizing", options: ["12/24 VDC", "220VC", "110VAC"] },
    { rating: "Auxilary contacts requirements", options: [""] },
    { rating: "", options: [""] },
    { rating: "", options: [""] },
  ];
  const renderContactors = contactors.map((item) => {
    const options = item.options.map((option) => {
      return <li>{option}</li>;
    });
    return (
      <tr>
        <td>{item.rating}</td>
        <td>
          <ol>{options}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Contactors</h1>
      <table>
        <tr>
          <th>Rating</th>
          <th>Options</th>
        </tr>
        {renderContactors}
      </table>
    </div>
  );
};

export default Contactors;
