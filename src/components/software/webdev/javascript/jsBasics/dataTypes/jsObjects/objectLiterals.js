import React from "react";

const ObjectLiterals = () => {
  const objects = [
    {
      part: "Create Object Literal",
      purpose:
        "Create an object that has several bits of related data in key value pairs",
      syntax: ["let objectName = {", "keyName:value,", "keyName2:value", "};"],
      example: [
        "let kman = {height:'72 in',",
        "age:102,",
        "food:['bannanas','blueberries'],",
        "login(name){console.log(`${name} logged in`),",
        "logHeight(){console.log(this.height)},",
        "};",
      ],
      notes: [
        "create object named kman and give height key,  value pair as a string",
        "Second key,value pair with number value",
        "Third key with value as an array",
        "Method that can be called as part of the object, you can send a name to it.",
        "Method will console.log the height attribute of the object.  Using this. notation is a context object.  It means look inside the current object.  It cannot access another key unless this. is used.  Don't use arrow functions with this. notation, it will cause it to look at the global scope instead of the object",
        "Close object",
      ],
    },
    {
      part: "Update value through dot notation",
      purpose: "Change the value of a key in the object",
      syntax: ["object.key = newValue;"],
      example: ["kman.age = 35;"],
      notes: ["This changes the value of the key age to 35"],
    },
    {
      part: "Access value through dot notation",
      purpose: "Use a value stored in the object",
      syntax: ["let myVariable = object.key"],
      example: ["let oldAge = kman.age;"],
      notes: ["sets value of myVariable to the value of age"],
    },
    {
      part: "Update value through bracket notation",
      purpose:
        "Change the value of a key in the object.  We can pass in variables with square brackets",
      syntax: ["object['key'] = newValue;"],
      example: ["kman['age'] = 35;"],
      notes: ["This changes the value of the key age to 35"],
    },
    {
      part: "Access value through bracket notation",
      purpose:
        "Use a value stored in the object.  We can pass in variables with square brackets",
      syntax: ["let myVariable = object['key']"],
      example: ["let oldAge = kman['age'];"],
      notes: ["sets value of myVariable to the value of age"],
    },

    {
      part: "Deleting properties",
      purpose: "Delete a property from an object",
      syntax: ["delete object.key;"],
      example: ["delete kman.age;"],
      notes: ["This deletes the key 'age' from the object 'kman'"],
    },
    {
      part: "Adding properties to an object",
      purpose: "Add new properties to an existing object",
      syntax: ["object.newKey = value;"],
      example: ["kman.weight = '180 lbs';"],
      notes: [
        "This adds a new property 'weight' with the value '180 lbs' to the object 'kman'",
      ],
    },
    {
      part: "Adding methods to an object",
      purpose: "Add new methods to an existing object",
      syntax: ["object.newMethod = function() {", "  // code here", "}"],
      example: ["kman.greet = function() {console.log('Hello!');};"],
      notes: [
        "This adds a new method 'greet' to the object 'kman' that logs 'Hello!' when invoked",
      ],
    },
    {
      part: "Using the 'this' keyword in objects",
      purpose: "Refer to the current object inside its own methods",
      syntax: ["this.key"],
      example: ["console.log(this.height);"],
      notes: [
        "The 'this' keyword refers to the current object.",
        "In the example, 'this.height' accesses the 'height' property of the current object.",
        "Using 'this' allows accessing other keys in the object from within its methods.",
        "Avoid using arrow functions with 'this' notation as it will refer to the global scope instead of the object.",
      ],
    },
  ];
  const renderObjects = objects.map((object) => {
    const syntax = object.syntax.map((synt) => {
      return <li>{synt}</li>;
    });
    const example = object.example.map((example) => {
      return <li>{example}</li>;
    });
    const notes = object.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{object.part}</td>
        <td>{object.purpose}</td>
        <td>
          <details>
            <summary>Syntax</summary>
            <ol>{syntax}</ol>
          </details>
        </td>
        <td>
          <details>
            <summary>Example</summary>
            <ol>{example}</ol>
          </details>
        </td>
        <td>
          <details>
            <summary>Notes</summary>
            <ol>{notes}</ol>
          </details>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Object Literals</h2>
      <h3> Create Object Literal</h3>
      <table>
        <tr>
          <th>Part</th>
          <th>Purpose</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderObjects}
      </table>
      <h3>Objects can be passed as an argument</h3>
      Once passed to a parameter, all properties can be accessed in the
      functions
      <br />
      This is possible since you are not passing a value but rather a pointer
      reference
      <br />
      This means the values of the object can be changed
    </div>
  );
};

export default ObjectLiterals;
/*

  */
