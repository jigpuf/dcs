import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";

const CSSImages = () => {
  const table = [
    {
      effect: "Rounded edges",
      code: "border-radius: 30px;",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU",
      style: {
        width: "100%",
        height: "auto",
        borderRadius: "30px",
      },
      notes: "",
    },
    {
      effect: "Round",
      code: "borderRadius: 50%;",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU",
      style: {
        borderRadius: "50%",
      },
      notes: "",
    },
    {
      effect: "Transparency",
      code: "opacity: .5;",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU",
      style: {
        opacity: ".5",
      },
      notes: "",
    },
    {
      effect: "Center",
      code: "max-width:100%\nheight: auto;\ndisplay: block;\n margin: auto;",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU",
      style: {
        maxwidth: "100%",
        height: "auto",
        display: "block",
        margin: "auto",
      },
      notes: "",
    },
  ];
  const renderTable = table.map((item) => {
    return (
      <tr>
        <td>{item.effect}</td>
        <td>
          <details>
            <summary>Code</summary>
            {item.code}
          </details>
        </td>
        <td>
          <details>
            <summary>Notes</summary>
          </details>
          {item.notes}
        </td>
        <td>
          <img src={item.image} style={item.style}></img>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>CSS Images</h1>
      <table>
        <tr>
          <th>Effect</th>
          <th>Code</th>
          <th>Notes</th>
          <th>Image</th>
        </tr>
        {renderTable}
      </table>
    </div>
  );
};

export default CSSImages;
