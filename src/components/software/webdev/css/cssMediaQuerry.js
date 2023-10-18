import React from "react";

const CSSMediaQuerry = () => {
  const mediaOptions = [
    {
      rule: "@media screen",
      syntax: "@media screen { /* CSS styles */ }",
      notes:
        "Applies styles when the web page is viewed on a screen (e.g., desktop or laptop computers).",
    },
    {
      rule: "@media print",
      syntax: "@media print { /* CSS styles */ }",
      notes:
        "Applies styles when the web page is printed. Useful for customizing print layouts.",
    },
    {
      rule: "@media speech",
      syntax: "@media speech { /* CSS styles */ }",
      notes:
        "Applies styles when the web page is read out loud by a screen reader. Enhances accessibility.",
    },
    {
      rule: "@media handheld",
      syntax: "@media handheld { /* CSS styles */ }",
      notes:
        "Applies styles when the web page is viewed on handheld devices like mobile phones or tablets.",
    },
    {
      rule: "@media (max-width: value)",
      syntax: "@media (max-width: value) { /* CSS styles */ }",
      notes:
        "Applies styles when the viewport width is equal to or less than a specified value. Useful for responsive designs.",
    },
    {
      rule: "@media (min-width: value)",
      syntax: "@media (min-width: value) { /* CSS styles */ }",
      notes:
        "Applies styles when the viewport width is equal to or greater than a specified value. Useful for responsive designs.",
    },
    {
      rule: "@media (orientation: value)",
      syntax: "@media (orientation: value) { /* CSS styles */ }",
      notes:
        "Applies styles based on the device's orientation (e.g., portrait or landscape). Useful for customizing layout based on orientation.",
    },
  ];
  const renderMediaOptions = mediaOptions.map((item) => {
    return (
      <tr>
        <td>{item.rule}</td>
        <td>{item.syntax}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Media Querries</h1>
      <table>
        <tr>
          <th>Rule</th>
          <th>Syntax</th>
          <th>Notes</th>
        </tr>
        {renderMediaOptions}
      </table>
    </div>
  );
};

export default CSSMediaQuerry;
