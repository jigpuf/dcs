import React from "react";

const HtmlForms = () => {
  const attributes = [
    { name: "action", tags: ["form", ""], notes: "" },
    { name: "method", tags: ["form", ""], notes: "" },
    { name: "id", tags: ["input", ""], notes: "" },
    { name: "for", tags: ["label", ""], notes: "" },
    { name: "name", tags: ["", ""], notes: "" },
    { name: "type", tags: ["input", ""], notes: "" },
    { name: "value", tags: ["", ""], notes: "" },
    { name: "checked", tags: ["", ""], notes: "" },
    { name: "placeholder", tags: ["", ""], notes: "" },
    { name: "min", tags: ["", ""], notes: "" },
    { name: "max", tags: ["", ""], notes: "" },
    { name: "minlength", tags: ["", ""], notes: "" },
    { name: "maxlength", tags: ["", ""], notes: "" },
    { name: "rows", tags: ["", ""], notes: "" },
    { name: "columns", tags: ["", ""], notes: "" },
    { name: "step", tags: ["", ""], notes: "" },
    { name: "target", tags: ["", ""], notes: "" },
    { name: "multiple", tags: ["", ""], notes: "" },
    { name: "required", tags: ["", ""], notes: "" },
  ];

  const tags = [
    {
      step: "Form",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Button",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Checkbox",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          Checkbox
          <br />
          <input type="checkbox" name="language1" value="English" checked />
          English
          <input type="checkbox" name="language1" value="Spanish" checked />
          Spanish
          <input type="checkbox" name="language1" value="French" />
          Frenchz
        </div>
      ),
    },
    {
      step: "Radio",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <p>Select Language</p>
          <input type="radio" name="language" value="English" checked />
          English
          <input type="radio" name="language" value="Spanish" />
          Spanish
          <input type="radio" name="language" value="French" />
          Frenchz
        </div>
      ),
    },
    {
      step: "Select/Option, Opt Group",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <select name="languages2">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      ),
    },
    {
      step: "Range",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Submit",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="submit" value="Submit Here"></input>
        </div>
      ),
    },
    {
      step: "Color Selector",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Text",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          {" "}
          <label for="firstName">Label for textBox</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="text"
          ></input>
        </div>
      ),
    },
    {
      step: "Number",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Text Area",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <textarea name="textarea" id="textArea" cols="10" rows="2"></textarea>
        </div>
      ),
    },
    {
      step: "E-mail",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="email" name="email" value="email@email"></input>
        </div>
      ),
    },
    {
      step: "Password",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          Password
          <br />
          <input
            type="password"
            name="password"
            placeholder="type password"
          ></input>
        </div>
      ),
    },
    {
      step: "Month",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Time",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Date",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
    {
      step: "Data List",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
    },
  ];
  const renderTags = tags.map((item) => {
    const renderPoints = item.points.map((point) => {
      return <li>{point}</li>;
    });
    const renderCode = item.code.map((codelet) => {
      return <li>{codelet}</li>;
    });
    return (
      <tr>
        <td>{item.step}</td>
        <td>
          <details>
            <summary>Notes</summary>
            <ol>{renderPoints}</ol>
          </details>
        </td>
        <td>
          <details>
            <summary>Code</summary>
            <ol>{renderCode}</ol>
          </details>
        </td>
        <td>{item.visual}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Forms</h1>
      <p>
        A form is a wrapper that will send all the information within it as an
        HTML request to a specific URL
      </p>
      {renderTags}
    </div>
  );
};

export default HtmlForms;
