import React from "react";

const JSStrings = () => {
  const concat = [
    {
      type: "Concatination operator",
      syntax: "firstString + secondString",
      example: "const conconcatString = firstName + lastName;",
      result: "Kman Supreme",
    },
    {
      type: "String Literal",
      syntax: "`${firstString} normalText ${secondString}`",
      example: "const stringLiteral=`${firstName} the ${lastName}!`;",
      result: "Kman the Supreme!",
    },
  ];
  const renderConcat = concat.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.result}</td>
      </tr>
    );
  });
  const escapeCharacters = [
    { character: "Horizontal Tab", escape: <p>\t</p> },
    { character: "Vertical Tab", escape: <p>\v</p> },
    { character: "Nul char", escape: <p>\0</p> },
    { character: "Backspace", escape: <p>\b</p> },
    { character: "Form feed", escape: <p>\f</p> },
    { character: "Newline", escape: <p>\n</p> },
    { character: "Carriage return", escape: <p>\r</p> },
    { character: "Single quote", escape: <p>\'</p> },
    { character: "Double quote", escape: <p>\"</p> },
    { character: "Backslash", escape: <p>\\</p> },
  ];
  const renderEscapeCharacters = escapeCharacters.map((item) => {
    return (
      <tr>
        <td>{item.character}</td>
        <td>{item.escape}</td>
      </tr>
    );
  });
  const stringObject = [
    {
      type: "Property",
      name: "StringLength",
      syntax: "myString.length",
      example: "const length = firstName.length;",
      result: "4",
    },
    {
      type: "Method",
      name: "toUpperCase",
      syntax: "myString.toUpperCase()",
      example: "const capital = firstName.toUpperCase();",
      result: "KMAN",
    },
    {
      type: "Method",
      name: "toLowerCase",
      syntax: "myString.toLowerCase()",
      example: "const lower = firstName.toLowerCase();",
      result: "kman",
    },
    {
      type: "Method",
      name: "indexOf",
      syntax: "myString.indexOf[myIndex]",
      example: "const findP = lastName.indexOf('p');",
      result: "2",
    },
    {
      type: "Method",
      name: "lastIndexOf",
      syntax: "myString.lastIndexOf(myCharacter)",
      example: "const findE = lastName.lastIndexOf('e');",
      result: "6",
    },
    {
      type: "Method",
      name: "Substring",
      syntax: "myString.subst(startIndex, forHowMany)",
      example: "const subOfLastName = lastName.subst(2,3);",
      result: "prem",
    },
    {
      type: "Method",
      name: "Slice",
      syntax: "myString.slice(startIndex,endIndex)",
      example: "const partOfWord = lastName.slice(1,4);",
      result: "upre",
    },
    {
      type: "Method",
      name: "Replace",
      syntax: "myString.replace(letterTo Replace,replacemantLetter)",
      example: "const replaceM = lastName.replace('m','n');",
      result: "Suprene",
    },
  ];
  <td>fullName.slice(0,10)</td>;
  const renderStringObject = stringObject.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.result}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>JS Strings</h1>
      <h3>const firstName = KMAN;</h3>
      <h3>const lastName = Supreme;</h3>
      <h4>Concatination:</h4>
      <br />
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
        {renderConcat}
      </table>
      <h4>Methods/Properties:</h4>
      <table>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
        {renderStringObject}
      </table>
      **Strings are imutable meaning the methods will not change the original
      string, they all return new strings
      <h4>Escape Characters:</h4>
      <table>
        <tr>
          <th>Character</th>
          <th>Escape Character</th>
        </tr>
        {renderEscapeCharacters}
      </table>
    </div>
  );
};
export default JSStrings;
