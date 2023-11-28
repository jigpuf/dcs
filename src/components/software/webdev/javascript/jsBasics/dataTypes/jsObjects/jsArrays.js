import React from "react";

const JSArrays = () => {
  const methods = [
    {
      method: ".length",
      purpose: "Finds length of the array",
      syntax: "array.length",
      example: [
        "const names=['Brian','James', 'Colt'];",
        "const arrayLength = names.length;",
      ],
      changeArray: "no",
      return: "3",
    },
    {
      method: ".join",
      purpose: "Joins all elements of an array into a string",
      syntax: "array.join(separator)",
      example: [
        "const fruits = ['apple', 'banana', 'orange'];",
        "const fruitString = fruits.join(', ');",
      ],
      changeArray: "no",
      return: "apple, banana, orange",
    },
    {
      method: ".indexOf",
      purpose:
        "Returns the first index at which a given element can be found in the array",
      syntax: "array.indexOf(element)",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const index = numbers.indexOf(3);",
      ],
      changeArray: "no",
      return: "2",
    },
    {
      method: ".concat",
      purpose: "Combines two or more arrays",
      syntax: "array.concat(array2, array3, ..., arrayN)",
      example: [
        "const array1 = [1, 2, 3];",
        "const array2 = [4, 5, 6];",
        "const combinedArray = array1.concat(array2);",
      ],
      changeArray: "no",
      return: "[1, 2, 3, 4, 5, 6]",
    },
    {
      method: ".push",
      purpose: "Adds one or more elements to the end of an array",
      syntax: "array.push(element1, element2, ..., elementN)",
      example: ["const numbers = [1, 2, 3];", "numbers.push(4);"],
      changeArray: "yes",
      return: "4",
    },
    {
      method: ".pop",
      purpose: "Removes the last element from an array",
      syntax: "array.pop()",
      example: [
        "const numbers = [1, 2, 3];",
        "const lastElement = numbers.pop();",
      ],
      changeArray: "yes",
      return: "3",
    },
    {
      method: ".includes",
      purpose: "Determines whether an array includes a certain element",
      syntax: "array.includes(element)",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const includesThree = numbers.includes(3);",
      ],
      changeArray: "no",
      return: "true",
    },
    {
      method: ".filter",
      purpose: "Creates a new array with all elements that pass a test",
      syntax: "array.filter(callback(element, index, array))",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const evenNumbers = numbers.filter((number) => number % 2 === 0);",
      ],
      changeArray: "no",
      return: "[2, 4]",
    },
    {
      method: ".map",
      purpose: "Creates a new array by performing a function on each element",
      syntax: "array.map(callback(element, index, array))",
      example: [
        "const numbers = [1, 2, 3];",
        "const doubledNumbers = numbers.map((number) => number * 2);",
      ],
      changeArray: "no",
      return: "[2, 4, 6]",
    },
    {
      method: ".find",
      purpose: "Returns the first element that satisfies a condition",
      syntax: "array.find(callback(element, index, array))",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const foundNumber = numbers.find((number) => number > 3);",
      ],
      changeArray: "no",
      return: "4",
    },
    {
      method: ".forEach",
      purpose: "Executes a provided function once for each array element",
      syntax: "array.forEach(callback(currentValue, index, array))",
      example: [
        "const numbers = [1, 2, 3];",
        "numbers.forEach((number) => console.log(number));",
      ],
      changeArray: "no",
      return: "undefined",
    },
    {
      method: ".some",
      purpose:
        "Checks if at least one element in the array satisfies a condition",
      syntax: "array.some(callback(element, index, array))",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const hasEvenNumber = numbers.some((number) => number % 2 === 0);",
      ],
      changeArray: "no",
      return: "true",
    },
    {
      method: ".every",
      purpose: "Checks if all elements in the array satisfy a condition",
      syntax: "array.every(callback(element, index, array))",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const allPositive = numbers.every((number) => number > 0);",
      ],
      changeArray: "no",
      return: "true",
    },
    {
      method: ".reduce",
      purpose: "Applies a function to reduce the array to a single value",
      syntax:
        "array.reduce(callback(accumulator, currentValue, index, array), initialValue)",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);",
      ],
      changeArray: "no",
      return: "15",
    },
    {
      method: ".sort",
      purpose: "Sorts the elements of an array in place",
      syntax: "array.sort(compareFunction)",
      example: [
        "const fruits = ['apple', 'banana', 'orange'];",
        "fruits.sort();",
      ],
      changeArray: "yes",
      return: "['apple', 'banana', 'orange']",
    },
  ];
  const renderMethods = methods.map((item) => {
    const examples = item.example.map((example) => {
      return <li>{example}</li>;
    });
    return (
      <tr>
        <td>{item.method}</td>
        <td>{item.purpose}</td>
        <td>{item.syntax}</td>
        <td>
          <ol>{examples}</ol>
        </td>
        <td>{item.changeArray}</td>
        <td>{item.return}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Javascript Arrays</h2>
      <h3>Starting Array</h3>
      Creating the array:
      <br />
      let names = new Array();
      <br />
      names[0] = 'Larry';
      <br />
      names[1] = 'Curley';
      <br />
      names[2] = 'Moe';
      <br />
      <br />
      Creating literal array:
      <br />
      let names = ['Larry', 'Curley', 'Moe'];
      <br />
      let second = names[2];
      <br />
      console.log(second); // Moe
      <br />
      names[2] = 'Shim'; //Moe &rarr; Shim
      <br />
      <h3>Methods</h3>
      <table>
        <tr>
          <th>Method</th>
          <th>Purpose</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Change Original Array</th>
          <th>Return</th>
        </tr>
        {renderMethods}
      </table>
      Need to add how to access keys in arrays on objects
    </div>
  );
};

export default JSArrays;
