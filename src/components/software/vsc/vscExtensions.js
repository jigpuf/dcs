import ReactFragment from "react";

const VSCExtentions = () => {
  const extensions = [
    {
      extension: "Prettier",
      purpose: "",
      setting: [
        "Format on Paste",
        "Format on Save",
        "Default formatter set to prettier",
      ],
      notes: <div></div>,
    },
    {
      extension: "Emmit",
      purpose:
        " Emmit make building faster by making suggestions and allowing a shorthand form of programming",
      setting: ["", ""],
      notes: (
        <ol>
          <li>! makes an HTML boilerplate</li>
          <li>
            Greater than creates children so body, greater than, section will
            created the body with a nested section tag{" "}
          </li>
          <li>+ Creates siblings</li>
          <li>
            ^ moves back up a level when giving long emmit stuff, kind of like
            file paths
          </li>
          <li>
            * will repeat the action multiple times based on the linber after
            eg. li*4
          </li>
          <li>
            $ will create an incrementing number every time the actio repeats eg
            a[id='$''] would add a number every time
          </li>
          <li></li>
          <li></li>
        </ol>
      ),
    },
    {
      extension: "Live Server",
      purpose: "",
      setting: ["", ""],
      notes: <div></div>,
    },
    { extension: "", purpose: "", setting: ["", ""], notes: <div></div> },
    { extension: "", purpose: "", setting: ["", ""], notes: <div></div> },
    { extension: "", purpose: "", setting: ["", ""], notes: <div></div> },
  ];
  const renderExtensions = extensions.map((item) => {
    const settings = item.setting.map((set) => {
      return <li>{set}</li>;
    });
    return (
      <tr>
        <td>{item.extension}</td>
        <td>{item.purpose}</td>
        <td>
          <ol>{settings}</ol>
        </td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>VSC Extentions</h1>
      <table>
        <tr>
          <th>Extension</th>
          <th>Purpose</th>
          <th>Settings</th>
          <th>Notes</th>
        </tr>
        {renderExtensions}
      </table>
    </div>
  );
};
export default VSCExtentions;
