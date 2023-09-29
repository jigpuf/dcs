import React from "react";

const JSNumber = () => {
  const num = 432.12345;
  const numString = "432.12345";

  const NumMethods = [
    {
      name: "isInteger()",
      syntax: "Number.isInteger(num)",
      action: `Checks if number is an integer`,
      type: `${typeof Number.isInteger(num)}`,
      returned: `${Number.isInteger(num)}`,
    },
    {
      name: "toFixed()",
      syntax: "num.toFixed(3)",
      action: `sets number of decimal places`,
      type: `${typeof num.toFixed(3)}`,
      returned: `${num.toFixed(3)}`,
    },
    {
      name: "toExponential()",
      syntax: "num.toExponential(2)",
      action: `Changes to scientific notation`,
      type: `${typeof num.toExponential(2)}`,
      returned: `${num.toExponential(2)}`,
    },
    {
      name: "toPrecision()",
      syntax: "num.toPrecision(4)",
      action: `Sets number of digits shown`,
      type: `${typeof num.toPrecision(4)}`,
      returned: `${num.toPrecision(4)}`,
    },
    {
      name: "toString()",
      syntax: "num.toString()",
      action: `Changes a number to a string`,
      type: `${typeof num.toString()}`,
      returned: `${num.toString()}`,
    },
    {
      name: "Number()",
      syntax: "Number(numString)",
      action: `Converts a string to a number`,
      type: `${typeof Number(numString)}`,
      returned: `${Number(numString)}`,
    },
    {
      name: "Number.parseFloat()",
      syntax: "numString.parseFloat()",
      action: `Turns string into a float`,
      type: `${typeof Number.parseFloat(numString)}`,
      returned: `${Number.parseFloat(numString)}`,
    },
    {
      name: "Number.parsInt()",
      syntax: "numString.parseInt()",
      action: `Converts a string an integer`,
      type: `${typeof Number.parseInt(numString)}`,
      returned: `${Number.parseInt(numString)}`,
    },
  ];

  const numbers = [
    { number: "Standard", output: "456.33" },
    { number: "Exponential", output: "4.5633e2" },
  ];

  const num1 = 5.86;
  const num2 = 3;

  const MathMethods = [
    {
      name: "Math.PI",
      syntax: "Math.PI",
      action: `produces the value of PI`,
      type: `${typeof Math.PI}`,
      returned: `${Math.PI}`,
    },
    {
      name: "Math.cbrt()",
      syntax: "Math.cbrt(num1)",
      action: `produces the cuberoot of a number`,
      type: `${typeof Math.cbrt(num1)}`,
      returned: `${Math.cbrt(num1)}`,
    },
    {
      name: "Math.ceil()",
      syntax: "Math.ceil(num1)",
      action: `Rounds a float up to integer and returns`,
      type: `${typeof Math.ceil(num1)}`,
      returned: `${Math.ceil(num1)}`,
    },
    {
      name: "Math.floor()",
      syntax: "Math.floor(num1)",
      action: `Rounds float down to integer`,
      type: `${typeof Math.floor(num1)}`,
      returned: `${Math.floor(num1)}`,
    },
    {
      name: "Math.pow()",
      syntax: "Math.pow(num2,2)",
      action: `first argument is base second argument is power`,
      type: `${typeof Math.pow(num2, 2)}`,
      returned: `${Math.pow(num2, 2)}`,
    },
    {
      name: "Math.random()",
      syntax: "Math.random()",
      action: `When executed, the code above will output a random floating-point number between 0 (inclusive) and 1 (exclusive)`,
      type: `${typeof Math.random()}`,
      returned: `${Math.random()}`,
    },
    {
      name: "Math.round()",
      syntax: "Math.round(num1)",
      action: `returns the nearest integer value to the given number`,
      type: `${typeof Math.round(num1)}`,
      returned: `${Math.round(num1)}`,
    },
    {
      name: "Math.sqrt()",
      syntax: "Math.sqrt(num2)",
      action: `returns the square root of a number`,
      type: `${typeof Math.sqrt(num2)}`,
      returned: `${Math.sqrt(num2)}`,
    },
    {
      name: "Math.trunc()",
      syntax: "Math.trunc(num1)",
      action: `truncates the decimal part of a number and returns the integer part`,
      type: `${typeof Math.trunc(num1)}`,
      returned: `${Math.trunc(num1)}`,
    },
  ];
  const renderNumMethods = NumMethods.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.syntax}</td>
        <td>{item.action}</td>
        <td>{item.type}</td>
        <td>{item.returned}</td>
      </tr>
    );
  });
  const renderNumbers = numbers.map((item) => {
    return (
      <tr>
        <td>{item.number}</td>
        <td>{item.output}</td>
      </tr>
    );
  });

  const RenderMathMethods = MathMethods.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.syntax}</td>
        <td>{item.action}</td>
        <td>{item.type}</td>
        <td>{item.returned}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>JS Numbers</h1>
      Numbers can be written in two different ways:
      <table>{renderNumbers}</table>
      All numbers in Javascript can access the global Number Method and the Math
      Method.
      <h3>Number Methods:</h3>
      <p>const num = 432.12345;</p>
      <p>const numString = '432.12345';</p>
      <table>
        <tr>
          <th>Number Method</th>
          <th>Syntax</th>
          <th>What it does</th>
          <th>Return Type</th>
          <th>Output</th>
        </tr>
        {renderNumMethods}
      </table>
      <h3>Math Methods:</h3>
      const num1 = 5.86;
      <br />
      const num2 = 3;
      <table>
        <tr>
          <th>Math Method</th>
          <th>Syntax</th>
          <th>What it does</th>
          <th>Return type</th>
          <th>Output</th>
        </tr>
        {RenderMathMethods}
      </table>
      <h3>Math Operators</h3>
      <table>
        <tr>
          <th>Operator</th>
          <th>Operator Symbol</th>
          <th>Example</th>
          <th>Output</th>
        </tr>
        <tr>
          <td>Add</td>
          <td>+</td>
          <td>5+5</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Subtract</td>
          <td>-</td>
          <td>5-5</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Multiply</td>
          <td>*</td>
          <td>5*5</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Divide</td>
          <td>/</td>
          <td>6/5</td>
          <td>1.2</td>
        </tr>
        <tr>
          <td>Power</td>
          <td>**</td>
          <td>5**5</td>
          <td>125</td>
        </tr>
        <tr>
          <td>Remainder</td>
          <td>%</td>
          <td>11%5</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Increment Up</td>
          <td>++</td>
          <td>let Variable = 4; Variable++;</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Increment Down</td>
          <td>--</td>
          <td>let Variable = 4; Variable--;</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Set with Operator</td>
          <td>+= -= *= /= **= %=</td>
          <td>let Variable = 4; Variable *= 5;</td>
          <td>20</td>
        </tr>
      </table>
      **NAN means Not a number when program is expecting a number and gets
      another data type.
    </div>
  );
};
export default JSNumber;
