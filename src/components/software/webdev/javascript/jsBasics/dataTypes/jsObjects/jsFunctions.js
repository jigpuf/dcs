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
        "close scope with semi-colon because it is an expression",
      ],
      code: ["const sumAmount = (num1,num2){", "return(num1+num2);", "};"],
    },
    {
      step: "Arrow Function(not hoisted?)",

      points: [
        "create expression that takes two arguments, open scope, The argument doesn't need parenthesis if there is only 1 argument",
        "returns the sum of the two arguments, the return keyword and curly brackets can be removed if it is a single line return statement =>num1+num2;",
        "close scope",
      ],
      code: ["const sum = (num1,num2)=>{", "return(num1+num2);", "};"],
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
        "calls the primary function and send the arguments.  The third argument here is the name of the function that will be the callback function.  It has no parenthesis here",
      ],
      code: [
        "//callback from the first function",
        "const display=(sum)=>{",
        "console.log(sum);",
        "}",
        "//first function definition",
        "const add=(num1,num2,myCallback)=>{",
        " const sum = num1+ num2;",
        "myCallback(sum);",
        "}",
        "//call first function",
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
    {
      step: "Function Call",

      points: ["functionName(argument);"],
      code: ["add(3,4)"],
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
    </div>
  );
};

export default JSFunction;
