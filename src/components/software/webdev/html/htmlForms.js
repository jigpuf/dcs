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
        "Open a form where all form elements will live that will be submitted as HTML requests when this form submits",
        "action is the URL where data will be sent",
        "Method is what type of request is being sent, POST, GET, Put, Delete, Patch",
        "Form element",
        "CLose form",
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
      output: "the entire html request",
    },
    {
      step: "Button",
      points: [
        "Open input tag",
        "Type of input is button",
        "name is the key in the key:value pair in the submitted form",
        "data-value is the value portion of the key:value pair sent in the form submision",
        "Value is what is displayed on the button",
        "the onclick attribute says what function will happen when the button is clicked",
        "Close input tag",
      ],
      code: [
        "<input",
        "type='button'",
        "name='submitBtn'",
        "data-value='Data Value'",
        "value='Display Text'",
        "onclick='myFunction()'",
        "></input>",
      ],
      visual: (
        <div>
          <input
            type="button"
            name="submitBtn"
            data-value="Data Value"
            value="Display Text"
            onclick="myFunction()"
          ></input>
        </div>
      ),
      output: "submitBtn=Data Value",
    },
    {
      step: " RegularButton",
      points: [
        "This regular button can exist in a form  but not trigger a submission",
        "onclick holds what function will be performed upon clicking",
        "Text displayed on the button",
        "Close button",
      ],
      code: ["<button", "onclick='someFunction()'>", "Push Me!", "</button>"],
      visual: <button onclick="">Push Me!</button>,
      output: "none",
    },
    {
      step: "Checkbox",
      points: [
        "Open input tag, type is checkbox, id is checkbox1, the id is important because the label 'for' attribute has to match the id, name will be the part of the key value pair, value is the value part of the key value pair, checked makes the box checked, close input tag",
        "This label is associated with the input with the id of checkbox1, English is what is displayed, close label.  Making this label associated with the input makes the word clickable to check the box",
        "Next input box same situation minus the checked attribute",
        "Label for checkbox2",
      ],
      code: [
        "<input type='checkbox' id='checkbox1' name='language1' value='english' checked />",
        "<label for='checkbox1'>English</label>",
        "<input type='checkbox' id='checkbox2' name='language2' value='Spanish'/>",
        "<label for='checkbox2'>Spanish</label>",
      ],
      visual: (
        <div>
          <input
            type="checkbox"
            id="checkbox1"
            name="language1"
            value="english"
            checked
          ></input>
          <label for="checkbox1">English</label>

          <input
            type="checkbox"
            id="checkbox2"
            name="language 2"
            value="Spanish"
          ></input>
          <label for="checkbox2">Spanish</label>
        </div>
      ),
      output: "language1=english&language2=spanish  if both are checked",
    },
    {
      step: "Radio",
      points: [
        "Open input, type radio, id so that the label will refer to the input, name is the key for the key value pair, value is the value for the key value pair, it starts as the checked value, close input",
        "Open label tag, it is for the radioButton1, English is displayed, close label",
        "Same as above but the value is different but notice the key is the same as the one above. Also this one is not checked.  No more than one should be checked",
        "Label for the radioButton2",
      ],
      code: [
        "<input type='radio' id='radioButton1' name='language' value='english' checked></input>  ",
        "<label for='radioButton1'>English</label>",
        "<input type='radio' id='radioButton2' name='language' value='spanish'></input>",
        "<label for='radioButton2'>Spanish</label>",
      ],
      visual: (
        <div>
          <input
            type="radio"
            id="radioButton1"
            name="language"
            value="english"
            checked
          ></input>
          <label for="radioButton1">English</label>
          <input
            type="radio"
            id="radioButton2"
            name="language"
            value="spanish"
          ></input>
          <label for="radioButton2">Spanish</label>
        </div>
      ),
      output: "language=english  or language=spanish",
    },
    {
      step: "Select/Option, Opt Group",
      points: [
        "Open select tag, id for label if included, but not really needed, name is the key part of the key value pair",
        "First option with the value of the key value pair, English is Displayed, Close option Tag",
        "The second option witht the value for the key value pair, close option",
        "Close select tag",
      ],
      code: [
        "<select id='mySelect' name='selectedOption'>",
        "<option value='english'>English</option>",
        "<option value='spanish'>Spanish</option>",
        "</select>",
      ],
      visual: (
        <div>
          <select id="mySelect" name="selectedOption">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
      ),
      output: "selectedOption=english   or selectedOption=spanish",
    },
    {
      step: "Range",
      points: [
        "The <label> element provides a label for the range input.",
        "The for attribute of the <label> element is associated with the id attribute of the range input using the same value.",
        "The type attribute is set to 'range' to indicate a range input.",
        "The id attribute uniquely identifies the range input.",
        "The name attribute specifies the name of the input, which will be used to identify the selected value when the form is submitted.",
        "The min and max attributes define the minimum and maximum values of the range.",
        "The step attribute specifies the increment or decrement value when the slider is moved.",
        "The value attribute sets the initial value of the range input.",
        "In react, the range won't change without an event handler",
      ],
      code: [
        "<label for='myRange'>Select a value:</label>",
        "<input type='range' id='myRange' name='selectedValue' min='0' max='100' step='1' value='50'></input>",
      ],
      visual: (
        <div>
          <label for="myRange">Select a value:</label>
          <input
            type="range"
            id="myRange"
            name="selectedValue"
            min="0"
            max="100"
            step="1"
            //   value="50"
          ></input>
        </div>
      ),
      output: "selectedValue=75",
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
