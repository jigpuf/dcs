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
      points: [
        "",
        "action is the URL where data will be sent",
        "Method is what type of request is being sent, POST, GET, etc.",
        "",
        "",
      ],
      code: [
        "<form",
        "action=''",
        "method=''>",
        "<button></button>",
        "</form>",
      ],
      visual: (
        <div>
          <form action="" method="">
            <button></button>
          </form>
        </div>
      ),
      output: "",
    },
    {
      step: "Button",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: <div></div>,
      output: "",
    },
    {
      step: " RegularButton",
      points: ["", "", ""],
      code: ["<button", "onclick=''>", "Push Me!", "</button>"],
      visual: <button onclick="">Push Me!</button>,
      output: "",
    },
    {
      step: "Checkbox",
      points: ["", "", "", "", ""],
      code: [
        "<input type='checkbox' name='language1' value='English' checked />",
        "English",
        "<input type='checkbox' name='language1' value='Spanish' checked />",
        "Spanish",
        "<input type='checkbox' name='language1' value='French' />",
        "Frenchz",
      ],
      visual: (
        <div>
          <input type="checkbox" name="language1" value="English" checked />
          English
          <input type="checkbox" name="language1" value="Spanish" checked />
          Spanish
          <input type="checkbox" name="language1" value="French" />
          Frenchz
        </div>
      ),
      output: "",
    },
    {
      step: "Radio",
      points: ["", "", ""],
      code: [
        "<input type='radio' name='language' value='English' checked />",
        "English",
        "<input type='radio' name='language' value='Spanish' />",
        "Spanish",
        "<input type='radio' name='language' value='French' />",
        "Frenchz",
      ],
      visual: (
        <div>
          <input type="radio" name="language" value="English" checked />
          English
          <input type="radio" name="language" value="Spanish" />
          Spanish
          <input type="radio" name="language" value="French" />
          Frenchz
        </div>
      ),
      output: "",
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
      output: "",
    },
    {
      step: "Range",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="range"></input>
        </div>
      ),
      output: "",
    },
    {
      step: "Submit",
      points: ["", "", ""],
      code: ["<input type='submit' value='Submit Here'></input>", "", ""],
      visual: (
        <div>
          <input type="submit" value="Submit Here"></input>
        </div>
      ),
      output: "",
    },
    {
      step: "Color Selector",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="color"></input>
        </div>
      ),
      output: "",
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
      output: "",
    },
    {
      step: "Number",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="number"></input>
        </div>
      ),
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
      output: "",
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
      output: "",
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
      output: "",
    },
    {
      step: "Month",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="month"></input>
        </div>
      ),
      output: "",
    },
    {
      step: "Time",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="time"></input>
        </div>
      ),
      output: "",
    },
    {
      step: "Date",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="date"></input>
        </div>
      ),
      output: "",
    },
    {
      step: "Data List",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <div>
          <input type="datalist"></input>
        </div>
      ),
      output: "",
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
        <td>{item.output}</td>
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
      <table>
        <tr>
          <th>Tag</th>
          <th>Notes</th>
          <th>Code</th>
          <th>Example</th>
          <th>Output</th>
        </tr>
        {renderTags}
      </table>
      <h2>Form output syntax</h2>
      <li>url followed by ? to show a form is being used</li>
      <li>after the ? is a key value pair eg. animal="mouse"</li>
      <li>between key value pairs an ampersand is used</li>
      <li>https://finviz.com/screener.ashx?v=111&ft=4</li>
    </div>
  );
};

export default HtmlForms;
