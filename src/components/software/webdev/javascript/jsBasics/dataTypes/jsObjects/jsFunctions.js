import React from "react";
import ButtonMaker from "../../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../../utilities/placeholder.js";
import TableMaker from "../../../../../../../utilities/tableMaker.js";

const JSFunction = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Function Declaration(Hoisted)",
      points: [
        "Declare as function called add. Take two arguments. Open Scope",
        "Return the sum of the two numbers",
        "Close Scope",
      ],
      code: ["function add(num1,num2){", "return(num1+num2);", "}"],
    },
    {
      step: "Function Expression(Not Hoisted)",
      points: [
        "create expression named sumAmount that takes two arguments, open scope",
        "returns the sum of the two arguments",
        "close scope",
      ],
      code: ["const sumAmount = (num1,num2){", "return(num1+num2);", "}"],
    },
    {
      step: "Arrow Function(not hoisted?)",
      points: [
        "create expression that takes two arguments, open scope",
        "returns the sum of the two arguments",
        "close scope",
      ],
      code: ["const sum = (num1,num2)=>{", "return(num1+num2);", "}"],
    },
    {
      step: "Arrow Function shorthand no arguments",
      points: ["This implies the variables are global"],
      code: ["const sum=()=>num1+num2;"],
    },
    {
      step: "Callback Functions",
      points: [
        "A callback is a way of forcing thing to happen in a specific order.  This is useful in ASNC use in Javascript.  The callback function is used as an argument in another function.",
        "Make expression called display that takes sum as an argument. open scope. This is the callback function",
        "Log the value of sum in the console",
        "Close scope",
        "Make expression called add that takes three arguments, two numbers and a callback function. open scope.  An anonymous function could be used here ifyou didnt want to call the function from the outside",
        "creates variable from the sum of the two arguments",
        "calls the callback function",
        "Close scope",
        "calls the primary function and send the arguments.  Notice the function doesnt have parenthesis",
      ],
      code: [
        "//callback",
        "const display=(sum)=>{",
        "console.log(sum);",
        "}",
        "const add=(num1,num2,myCallback)=>{",
        " const sum = num1+ num2;",
        "myCallback(sum);",
        "}",
        "add(5,5,display);",
      ],
    },
    {
      step: "Anonymous Function",
      points: ["", "", "", "", ""],
      code: ["", "", "", "", ""],
    },
    {
      step: "Recursive Function",
      points: ["", "", "", "", ""],
      code: ["", "", "", "", ""],
    },
  ];
  return (
    <div>
      <h1>Function Syntax</h1>
      <h2>Types</h2>
      Points to consider:
      <ul>
        <li>Scope</li>
        <li>Hoising</li>
        <li>Life Cycle effect/ASYNC</li>
        <li>Shorthand methods</li>
        <li>Arguments/parameters</li>
      </ul>
      <h2>Syntax</h2>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
      <h2>Arrow Functions</h2>
      <table>
        <tr>
          <th>Function Type</th>
          <th>code</th>
        </tr>
        <tr>
          <td>Standard Function</td>
          <td>
            Const functionName = function(parameter)&#123;
            <br />
            code;
            <br />
            return(code);
            <br />
            &rbrace;;
            <br />
          </td>
        </tr>
        <tr>
          <td>Arrow Function</td>
          <td>
            const functionName = (parameter) =&#62;&#123;
            <br />
            code;
            <br /> return(code);
            <br />
            &#125;;
          </td>
        </tr>
        <tr>
          <td>
            Single Line Arrow Function
            <br /> Must have no code other
            <br /> than return statement
          </td>
          <td>const functionName = (parameter) =&#62; returnCode;</td>
        </tr>
      </table>
      <h2>Callback Functions</h2>
      <p>
        When a function is passed as an argument into another function, the
        passed function is called a callback function
      </p>
      <h2>Annonymous functions</h2>
      <h2>Arguments and Parameters</h2>
      <p>
        Argument is given in the call, parameter is given in the function. They
        must be listed in the same order. Arguments can be given a default value
        in the case that no arguments are given.
      </p>
      <h2>Function Declaration and Expressions</h2>
      <p>
        Normally declared functions are hoisted to the top of the file. Function
        expressions are not, so expressions need to be created before they are
        invoked. Best practice is using function expressions at the top of the
        code
      </p>
      <table>
        <tr>
          <th>Part</th>
          <th>code</th>
        </tr>
        <tr>
          <td>Declaration</td>
          <td>
            function functionNameHere(parameters)&#123;
            <br />
            codeHere;
            <br />
            return(codeHere);
            <br />
          </td>
        </tr>
        <tr>
          <td>Function Expression</td>
          <td>
            Const functionNameHere = function(parameterHere)&#123;
            <br />
            codeHere;
            <br />
            return(codeHere);
            <br />;
          </td>
        </tr>
        <tr>
          <td>Call</td>
          <td>functionNameHere(argumentHere);</td>
        </tr>
      </table>
      <br />
      <br />
      <strong>Example of Declaration:</strong>
      <br />
      <br />
      function addTwo(a,b)&#123;
      <br />
      let c = a + b;
      <br />
      return (c);
      <br />
      &#125;
      <br />
      <br />
      <strong>Example of Expression:</strong>
      <br />
      <br />
      const multTwo = function(a,b)&#123;
      <br />
      let c = a * b;
      <br />
      return (c);
      <br />
      &#125;;
      <br />
      <br />
      <strong>Example of Call:</strong>
      <br />
      <br />
      addTwo(2,5);
      <br />
      multTwo(2,5);
      <br />
      <br />
    </div>
  );
};

export default JSFunction;
