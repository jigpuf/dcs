import React from "react";

const WF1000 = () => {
  const wires = [
    { awg: "14", strip: "" },
    { awg: "16", strip: "" },
    { awg: "18", strip: "" },
    { awg: "20", strip: ".67" },
    { awg: "22", strip: "" },
    { awg: "24", strip: "" },
  ];
  const contacts = [
    { contact: "Till Ferrule", strip: "", pull: "" },
    { contact: "White Ferrule", strip: "7.6", pull: "3.6" },
    { contact: "Red Ferrule", strip: "", pull: "" },
    { contact: "DB Pin/Socket", strip: "", pull: "" },
    { contact: "", strip: "", pull: "" },
  ];
  const renderWires = wires.map((wire) => {
    return (
      <tr>
        <td>{wire.awg}</td>
        <td>{wire.strip}</td>
      </tr>
    );
  });
  const renderContacts = contacts.map((pin) => {
    return (
      <tr>
        <td>{pin.contact}</td>
        <td>{pin.strip}</td>
        <td>{pin.pull}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>WF1000 Electric auto stripper</h1>
      <img src="https://caas.production.phoenixcontact.coremedia.cloud/caas/v1/stable/media/235204/full/b408?format=jpg"></img>
      <h2>Strip width (θ) Center Knob</h2>
      <table>
        <tr>
          <th>AWG</th>
          <th>Width θ</th>
        </tr>
        {renderWires}
      </table>
      <h2>Contact</h2>
      <table>
        <tr>
          <th>Contact</th>
          <th>Length First Knob</th>
          <th>Pull Third Knob</th>
        </tr>
        {renderContacts}
      </table>
    </div>
  );
};

export default WF1000;
