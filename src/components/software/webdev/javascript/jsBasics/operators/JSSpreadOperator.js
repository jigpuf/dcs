import React from "react";

const JSSpreadOperator = () => {
  const operators = [
    {
      operation: "Copying an array",
      code: [
        "const originalArray = [1, 2, 3];",
        "const copiedArray = [...originalArray];",
        "console.log(copiedArray); ",
      ],
      result: "[1, 2, 3]",
      explaination: [
        "The spread operator is used to create a new array copiedArray that contains the same elements as originalArray. ",
        "This creates a shallow copy of the array, so modifications made to copiedArray will not affect originalArray.",
      ],
    },
    {
      operation: "Merging arrays",
      code: [
        "const array1 = [1, 2, 3];",
        "const array2 = [4, 5, 6];",
        "const mergedArray = [...array1, ...array2];",
        "console.log(mergedArray); ",
      ],
      result: "[1, 2, 3, 4, 5, 6]",

      explaination: [
        "The spread operator is used to merge the elements of array1 and array2 into a new array mergedArray.",
        "The resulting array contains all the elements from array1 followed by all the elements from array2.",
      ],
    },
    {
      operation: "Copying an object",
      code: [
        "const originalObject = { name: 'John', age: 30 };",
        "const copiedObject = { ...originalObject };",
        "console.log(copiedObject); ",
      ],
      result: "{ name: 'John', age: 30 }",

      explaination: [
        "The spread operator is used to create a new object copiedObject that has the same key-value pairs as originalObject.",
        "Like with arrays, this creates a shallow copy of the object.",
      ],
    },
    {
      operation: "Merging objects",
      code: [
        "const object1 = { name: 'John' };",
        "const object2 = { age: 30 };",
        "const mergedObject = { ...object1, ...object2 };",
        "console.log(mergedObject); ",
      ],
      result: "{ name: 'John', age: 30 }",

      explaination: [
        "the spread operator is used to merge the key-value pairs from object1 and object2 into a new object mergedObject.",
        "The resulting object contains all the key-value pairs from object1 followed by all the key-value pairs from object2.",
      ],
    },
  ];
  const renderOperators = operators.map((item) => {
    const renderCodes = item.code.map((code) => {
      return <li>{code}</li>;
    });
    const renderExplaination = item.explaination.map((item) => {
      return <li>{item}</li>;
    });
    return (
      <tr>
        <td>{item.operation}</td>
        <td>
          <ol>{renderCodes}</ol>
        </td>
        <td>{item.result}</td>
        <td>
          <ol>{renderExplaination}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Spread Operator</h1>
      <table>
        <tr>
          <th>Operation</th>
          <th>Code</th>
          <th>Result</th>
          <th>Summary</th>
        </tr>
        {renderOperators}
      </table>
    </div>
  );
};

export default JSSpreadOperator;
