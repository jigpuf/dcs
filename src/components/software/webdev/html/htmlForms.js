import React from "react";

const HtmlForms = () => {
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
          <select id="mySelect" name="selectedOption" multiple>
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
      points: [
        "Open input, type submit button, the value is what the button says, Close input",
        "This button will submit all form data",
      ],
      code: ["<input type='submit' value='Submit Here'></input>"],
      visual: <input type="submit" value="Submit Here"></input>,
      output:
        "This actually submits all the form data with =in the form tags of this submit button",
    },
    {
      step: "Color Selector",
      points: [
        "Open input tag",
        "The label creates label for the color selector.  The label for attribute ties it to id color",
        "The <input> element with type='color' creates the color selector input. The id attribute provides a unique identifier for the input, and the name attribute specifies the name of the input field when the form is submitted. The value attribute sets the initial value of the color selector. In this example, the color red (#ff0000) is pre-selected as the initial value.",
        "Close input tag",
      ],
      code: [
        "<input",
        "<label for='color'>Select a color:</label>",
        "type='color' id='color' name='color' value='#ff0000'>",
        "</input>",
      ],
      visual: (
        <form>
          <label for="color">Select a color:</label>
          <input type="color" id="color" name="color" value="#ff0000"></input>
        </form>
      ),
      output: "color=%23ff0000    the %23 is how the url code reads#",
    },
    {
      step: "Text",
      points: [
        "Label is tied to the id=firstName,  the part inbetween the label tag is what it says, close label",
        "Input open, type text, name is the key name id is so the label can be tied to it, placeholder is the text that is the default text, close input",
      ],
      code: [
        "<label for='firstName'>Yo' Name</label>",
        "<input type='text' name='firstName' id='firstName' placeholder='put your name'></input>",
      ],
      visual: (
        <div>
          <label for="firstName">Yo' Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="put your name"
          ></input>
        </div>
      ),
      output:
        "if 'John Doe' is the value entered name=John%20Doe    %20 is the space",
    },
    {
      step: "Number",
      points: [
        "Open label tag for label to be matched to the input, between tags is what is displayed, Closed label tag",
        "Open input tag",
        "type is number, id makes a label able to attach, name is the key part of key value pair, the min is the minimum the number can show, and the max is the top value possible",
        "Close input tag",
      ],
      code: [
        "<label for='quantity'>Enter the quantity:</label>",
        "<input",
        "type='number' id='quantity' name='quantity' min='1' max='100'>",
        "</input>",
      ],
      visual: (
        <form>
          <label for="quantity">Enter the quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="100"
          ></input>
        </form>
      ),
      output: "quantity=10",
    },
    {
      step: "Text Area",
      points: [
        "Open label tag for links the label the text area, text between tags is displayed, close label tag",
        "Open textarea tag",
        "id lets label get linked to this input, name is the key part of the html request, rows decides how tall and cols decides how wide the text area is.",
        "Close text area tag",
      ],
      code: [
        "<label for='message'>Enter your message:</label>",
        "<textarea",
        "id='message' name='message' rows='4' cols='50'",
        "</textarea>",
      ],
      visual: (
        <div>
          <label for="message">Enter your message:</label>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
        </div>
      ),
      output:
        "message=Hello%2C%20World%21    %2C is the comma and %20 is the space",
    },
    {
      step: "E-mail",
      points: [
        "Open label tag, for attribute will link this label to the email input, text between tags is displayed, close label tag",
        "Open Input tag",
        "type is email input, id allows the label to be linked, name is the key sent in the http request",
        "Close input tag",
      ],
      code: [
        "<label for='email'>Enter your email:</label>",
        "<input",
        "type='email' id='email' name='email'>",
        "</input>",
      ],
      visual: (
        <div>
          <label for="email">Enter your email:</label>
          <input type="email" id="email" name="email"></input>
        </div>
      ),
      output: "email=example%40example.com   the %40 is the @",
    },
    {
      step: "Password",
      points: [
        "Open input tag",
        "type is password",
        "name is the key of the http request",
        "placeholder text is displayed in the password box",
        "close input tag",
      ],
      code: [
        "<input",
        "type='password'",
        "name='password'",
        "placeholder='type password'>",
        "</input>",
      ],
      visual: (
        <div>
          Password
          <input
            type="password"
            name="password"
            placeholder="type password"
          ></input>
        </div>
      ),
      output: "password=mysecretpassword",
    },
    {
      step: "Time",
      points: [
        "Open Label tag, for links it to the time input, text is displayed, close label",
        "Open Input tag",
        "type is time input",
        "id lets the label be linked",
        "name is the key for the http request",
        "close input tag",
      ],
      code: [
        "<label for='time'>Enter a time:</label>",
        "<input",
        "type='time'",
        "id='time'",
        "name='time'>",
        "</input>",
      ],
      visual: (
        <div>
          <label for="time">Enter a time:</label>
          <input type="time" id="time" name="time"></input>
        </div>
      ),
      output: "time=14%3A30",
    },
    {
      step: "Date",
      points: [
        "Label tag open, for allows the label to link to the date input, the text is displayed, close label tag",
        "Open input tag",
        "type is date input",
        "id allows the label to be linked to the input",
        "name is the key for the http request",
        "Close input tag",
      ],
      code: [
        "<label for='date'>Enter a date:</label>",
        "<input",
        "type='date'",
        "id='date'",
        "name='date'>",
        "</input>",
      ],
      visual: (
        <div>
          <label for="date">Enter a date:</label>
          <input type="date" id="date" name="date"></input>
        </div>
      ),
      output: "date=2023-08-22",
    },
    {
      step: "Data List",
      points: [
        "Open Label tag, for allows the label to get linked to the input,text is displayed, close label",
        "Open Input tag, notice type is text.  This is the field that can be entered manually, id allows the label to be linked to the input name is the key for the http request, name is the key for the http request, list connects this input text to the datalist so it displays with it, close input",
        "Open datalist tag id allows the text input to be linked to the datalist",
        "Open option value for http request",
        "Open option value for http request",
        "Open option value for http request",
        "Open option value for http request",
        "Close Datalist",
        "Input Type: The <datalist> element is typically used with an <input> element of type 'text', allowing users to enter custom values or select from the predefined options. On the other hand, the <select> element creates a dropdown list of options, and users can only select one option from the list.",
        "Appearance: The <datalist> element provides an autocomplete feature where the browser displays a dropdown with suggested options as the user types in the input field. The dropdown is specific to the input field and may vary in appearance across different browsers. In contrast, the <select> element displays a dropdown list of options when the user clicks on it, showing all available options at once.",
        "Custom Values: With the <datalist> element, users can enter custom values that are not present in the predefined list. The browser allows both selection from the dropdown list and manual input. In comparison, the <select> element only allows users to select predefined options and does not permit custom values.",
        "Multiple Selection: The <select> element can be configured to allow users to select multiple options simultaneously by adding the multiple attribute. This enables users to choose multiple items from the dropdown list. The <datalist> element, however, does not have built-in support for multiple selections.",
        "Styling: The <select> element provides more styling options, allowing developers to customize the appearance using CSS. This includes styling the dropdown, individual options, and the selection. The <datalist> element has limited styling options and relies more on the default styling of the browser.",
      ],
      code: [
        "<label for='fruit'>Select a fruit:</label>",
        "<input type='text' id='fruit' name='fruit' list='fruits'></input>",
        "<datalist id='fruits'>",
        "<option value='Apple'>",
        "<option value='Banana'>",
        "<option value='Orange'>",
        "<option value='Mango'>",
        "</datalist>",
      ],
      visual: (
        <div>
          <label for="fruit">Select a fruit:</label>
          <input type="text" id="fruit" name="fruit" list="fruits"></input>
          <datalist id="fruits">
            <option value="Apple"></option>
            <option value="Banana"></option>
            <option value="Orange"></option>
            <option value="Mango"></option>
          </datalist>
        </div>
      ),
      output: "fruit=Apple",
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
      <h3>URL entities/encoding</h3>
      <ol>
        <li>
          URL encoding, also known as percent-encoding, is a mechanism used to
          represent special characters and non-alphanumeric characters in a URL.
          It ensures that the URL remains valid and does not conflict with
          reserved characters or have unintended interpretations.
        </li>
        <li>
          In URL encoding, special characters are represented by a percent sign
          ("%") followed by two hexadecimal digits. The hexadecimal digits
          represent the ASCII code of the character being encoded. Here are some
          common URL entities:
        </li>
        <li>
          Space: In a URL, a space character is represented by "%20". This is
          because spaces are not allowed in URLs, and the "%20" encoding ensures
          that the URL remains valid.
        </li>
        <li>
          Ampersand (&): Encoded as "%26". The ampersand is used as a delimiter
          in URLs, so encoding it ensures that it is treated as a literal
          character and not as a separator.
        </li>
        <li>
          Question Mark (?): Encoded as "%3F". The question mark is commonly
          used to separate the URL path from query parameters, so encoding it
          ensures it is interpreted as a literal character and not as a
          delimiter.
        </li>
        <li>
          Hash/Octothorpe (#): Encoded as "%23". The hash symbol has special
          meaning in URLs as it is used to indicate fragments or anchors within
          a page. Encoding it ensures it is treated as a literal character.
        </li>
        <li>
          Plus Sign (+): Encoded as "%2B". The plus sign is often used to
          represent spaces in URL query parameters. Encoding it ensures it is
          interpreted as a literal character and not as a space replacement.
        </li>
        <li>
          Colon (:): Encoded as "%3A". The colon is used in URLs to separate the
          protocol from the rest of the URL or to denote port numbers. Encoding
          it ensures it is treated as a literal character.
        </li>
        <li>url followed by ? to show a form is being used</li>
        <li>after the ? is a key value pair eg. animal="mouse"</li>
        <li>between key value pairs an ampersand is used</li>
        <li>https://finviz.com/screener.ashx?v=111&ft=4</li>
      </ol>
    </div>
  );
};

export default HtmlForms;
