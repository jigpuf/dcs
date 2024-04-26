import React from "react";

const FlexDirection = () => {
  const containerRowStyle = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
  };
  const containerRowReverseStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    border: "1px solid black",
  };
  const containerColumnStyle = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
  };
  const containerColumnReverseStyle = {
    display: "inline-flex",
    flexDirection: "column-reverse",
    border: "1px solid black",
  };

  const itemStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "#ccc",
    margin: "10px",
  };
  const mark = <mark>inline-flex</mark>;
  const values = [
    {
      value: "row (default)",
      syntax: [
        ".container {",
        <span>
          display: <mark>flex</mark>;
        </span>,
        <span>
          flex-direction: <mark>row</mark>;
        </span>,
        "}",
        "",
        ".container>div{",
        "width:'100px';",
        "height: '100px';",
        "backgroundColor: '#ccc';",
        "margin: '10px';",
        "}",
      ],
      example: [
        "<div class='container'>",
        "<div>1</div>",
        "<div>2</div>",
        "<div>3</div>",
        "<div>4</div>",
        "</div>",
      ],
      notes: ["The flex items are laid out horizontally from left to right."],
      chart: (
        <div style={containerRowStyle}>
          <div style={itemStyle}>1</div>
          <div style={itemStyle}>2</div>
          <div style={itemStyle}>3</div>
          <div style={itemStyle}>4</div>
        </div>
      ),
    },
    {
      value: "row-reverse",
      syntax: [
        ".container {",
        <span>
          display: <mark>flex</mark>;
        </span>,
        <span>
          flex-direction: <mark>row-reverse</mark>;
        </span>,
        "}",
        "",
        ".container>div{",
        "width:'100px';",
        "height: '100px';",
        "backgroundColor: '#ccc';",
        "margin: '10px';",
        "}",
      ],
      example: [
        "<div class='container'>",
        "<div>1</div>",
        "<div>2</div>",
        "<div>3</div>",
        "<div>4</div>",
        "</div>",
      ],
      notes: ["The flex items are laid out horizontally from right to left."],
      chart: (
        <div style={containerRowReverseStyle}>
          <div style={itemStyle}>1</div>
          <div style={itemStyle}>2</div>
          <div style={itemStyle}>3</div>
          <div style={itemStyle}>4</div>
        </div>
      ),
    },
    {
      value: "column",
      syntax: [
        ".container {",
        "display: flex;",
        "flex-direction: column;",
        "}",
        "",
        ".container>div{",
        "width:'100px';",
        "height: '100px';",
        "backgroundColor: '#ccc';",
        "margin: '10px';",
        "}",
      ],
      example: [
        "<div class='container'>",
        "<div>1</div>",
        "<div>2</div>",
        "<div>3</div>",
        "<div>4</div>",
        "</div>",
      ],
      notes: ["The flex items are laid out vertically from top to bottom."],
      chart: (
        <div style={containerColumnStyle}>
          <div style={itemStyle}>1</div>
          <div style={itemStyle}>2</div>
          <div style={itemStyle}>3</div>
          <div style={itemStyle}>4</div>
        </div>
      ),
    },
    {
      value: "column-reverse",
      syntax: [
        ".container {",
        <span>
          display: <mark>inline-flex;</mark>
        </span>,
        <span>
          flex-direction: <mark>column-reverse</mark>;
        </span>,
        "}",
        "",
        ".container>div{",
        "width:'100px';",
        "height: '100px';",
        "backgroundColor: '#ccc';",
        "margin: '10px';",
        "}",
      ],
      example: [
        "<div class='container'>",
        "<div>1</div>",
        "<div>2</div>",
        "<div>3</div>",
        "<div>4</div>",
        "</div>",
      ],
      notes: ["The flex items are laid out vertically from bottom to top."],
      chart: (
        <div style={containerColumnReverseStyle}>
          <div style={itemStyle}>1</div>
          <div style={itemStyle}>2</div>
          <div style={itemStyle}>3</div>
          <div style={itemStyle}>4</div>
        </div>
      ),
    },
  ];
  const renderValues = values.map((item) => {
    const syntaxis = item.syntax.map((syntax) => {
      return <li>{syntax}</li>;
    });
    const examples = item.example.map((example) => {
      return <li>{example}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.value}</td>
        <td>
          <ol>{syntaxis}</ol>
        </td>
        <td>
          <ol>{examples}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
        <td>{item.chart}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Flex-direction Flex Basis</h1>
      <span>
        The flex-direction property defines the direction in which the flex
        items are laid out within a flex container. It specifies whether the
        flex items should be arranged horizontally or vertically. It accepts
        four values:
      </span>
      <table>
        <tr>
          <th>Value</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
          <th>Example</th>
        </tr>
        {renderValues}
      </table>
      There is also a flex-basis property. The property can be set to pixels. If
      the flex direction is row, then the flex basis will give the property
      horizontally. If it is set to column, flex basis will set the size of each
      item vertically. Flex basis has to target the children and not the
      container parent
    </div>
  );
};

export default FlexDirection;
