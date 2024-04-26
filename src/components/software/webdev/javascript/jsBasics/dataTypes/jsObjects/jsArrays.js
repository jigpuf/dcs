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
      purpose: "Sorts the elements of an array in place//strings",
      syntax: "array.sort(compareFunction)",
      example: [
        "const fruits = ['banana', 'apple',  'orange'];",
        "fruits.sort();",
      ],
      changeArray: "yes",
      return: "['apple', 'banana', 'orange']",
    },
    {
      method: ".sort",
      purpose: "Sorts the elements of an array in place//numbers",
      syntax: "array.sort(compareFunction)",
      example: [
        "const numbers = [5, 1, 3, 2, 4];",
        "numbers.sort((a, b) => a - b);",
      ],
      changeArray: "yes",
      return: "[1, 2, 3, 4, 5]",
    },
    {
      method: ".sort",
      purpose: "Sorts the elements of an array in place//descending",
      syntax: "array.sort(compareFunction)",
      example: [
        "const numbers = [5, 1, 3, 2, 4];",
        "numbers.sort((a, b) => b - a);",
      ],
      changeArray: "yes",
      return: "[5, 4, 3, 2, 1]",
    },
    {
      method: ".slice",
      purpose: "Returns a shallow copy of a portion of an array",
      syntax: "array.slice(start, end)",
      example: [
        "const numbers = [1, 2, 3, 4, 5];",
        "const slicedArray = numbers.slice(1, 3);",
      ],
      changeArray: "no",
      return: "[2, 3]",
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
  const arrayMethods = [
    {
      method: "Starting Array",
      code: [
        "const array=[",
        "{name:'kman', age:32, shows:['showA','showB'], height:60,},",
        "{name:'John', age:12, shows:['showA','showC'], height:100,},",
        "{name:'Tabitha', age:105, shows:['showB','showD'], height:2,},",
        "];",
      ],
      notes: [""],
      result: [""],
    },
    {
      method:
        "Create new array in alphabetical order from name key, take away case sensitivity",
      code: [
        "const sortedArray = array.slice().sort((a, b) => {",
        "const nameA = a.name.toUpperCase();",
        "const nameB = b.name.toUpperCase();",
        "if (nameA < nameB) {",
        "return -1;",
        "} else if (nameA > nameB) {",
        "return 1",
        "}",
        "return 0;",
        "});",
      ],
      notes: [
        "array.slice()just makes a new array out of the original haveing all elements",
        "Then, the sort() method is called on the copied array, and it changes the array through its sorting",
        "sort() goes through all the elements and compares them all 2 at a time until they are all done.",
        "In this function, two elements(a,b) will be compared.  It starts by creating new variables from the name attribute of the items. changing the first elements name atribute to uppercase.  It then does it to b",
        "This makes the comparison non-case sensitive so it will be purely alphabetical",
        "It then compares the two new variables and list all the possibilityies and gives return values.  This is how the function knows how to sort the array",
        "The same thing could be done with the age attributes",
      ],
      result: [
        "[",
        "{ name: 'John', age: 12, shows: ['showA', 'showC'], height:100, },",
        "{ name: 'kman', age: 32, shows: ['showA', 'showB'], height:60, },",
        "{ name: 'Tabitha', age: 105, shows: ['showB', 'showD'], height:2, },",
        "]",
      ],
    },
    {
      method: "Add element onto each item based on math and sort the result",
      code: [
        "const newArray = array.slice().sort((a, b) => {",
        "const sumA = a.age + a.height;",
        "const sumB = b.age + b.height;",
        "if (sumA > sumB) {",
        "return -1;",
        "} else if (sumA < sumB) {",
        "return 1;",
        "}",
        "return 0;",
        "});",
      ],
      notes: [""],
      result: [
        "[",
        "{name: 'John', age: 12, shows: ['showA', 'showC'], height: 100 }, //112",
        "{name: 'Tabitha', age: 105, shows: ['showB', 'showD'], height: 2 }, //107",
        "{name: 'kman', age: 32, shows: ['showA', 'showB'], height: 60 }, //92",
        "]",
      ],
    },
    {
      method:
        "add an attribute with the sum and order it based on that attribute. create a newBestArray with an additional key called total that add height and age. arange newBestArray in assending order based on total",
      code: [
        "const newBestArray = array.map(obj => ({ ...obj, total: obj.age + obj.height }))",
        ".sort((a, b) => a.total - b.total);",
      ],
      notes: [
        "array.map(obj => ({ ...obj, total: obj.age + obj.height })):",
        "The map() method is called on the array variable.",
        "It iterates over each element of the array.",
        "For each element, a new object is created using object spread syntax (...obj), which copies all properties of the original object.",
        "Additionally, a new property called total is added to the new object, which is calculated by adding the age and height properties of the original object.",
        "The map() method returns an array of these newly created objects.",
        ".sort((a, b) => a.total - b.total):",
        "The resulting array from the map() method is then sorted using the sort() method.",
        "The sort() method takes a compare function as an argument to determine the sorting order.",
        "In this case, the compare function (a, b) => a.total - b.total is used.",
        "The compare function subtracts the total property of b from the total property of a.",
        "If the result is negative, it means a should be placed before b in the sorted array.",
        "If the result is positive, it means b should be placed before a in the sorted array.",
        "If the result is zero, the order of a and b remains unchanged.",
        "Ultimately, the sort() method rearranges the array based on the comparison result of the total property of each object.",
        "const newBestArray = ...:",
        "The sorted array is assigned to the variable newBestArray.",
      ],
      result: [
        "{name: 'kman', age: 32, shows: Array(2), height: 60, total: 92},",
        "{name: 'Tabitha', age: 105, shows: Array(2), height: 2, total: 107},",
        "{name: 'John', age: 12, shows: Array(2), height: 100, total: 112}",
      ],
    },
    {
      method:
        "To create a new array that sorts objects based on age in descending order and only includes ages under 100",
      code: [
        "const ageArray = array",
        ".filter(obj => obj.age < 100)",
        ".sort((a, b) => b.age - a.age);",
      ],
      notes: [
        "The object with the name 'Tabitha' was excluded from the newArray because its age (105) is not less than 100.",
        "The remaining objects, 'kman' and 'John', both have ages under 100 and are sorted in descending order based on the age property.",
        "'kman' has an age of 32, and 'John' has an age of 12.",
        "Therefore, 'kman' appears before 'John' in the newArray because 32 is greater than 12.",
      ],
      result: [
        "[",
        "{name: 'kman', age: 32, shows: ['showA', 'showB'], height: 60 },",
        "{ name: 'John', age: 12, shows: ['showA', 'showC'], height: 100 }",
        "];",
      ],
    },
    { method: "", code: [""], notes: [""], result: [""] },
    { method: "", code: [""], notes: [""], result: [""] },
  ];
  const renderArrayMethods = arrayMethods.map((item) => {
    const code = item.code.map((snippet) => {
      return <li>{snippet}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    const result = item.result.map((thing) => {
      return <li>{thing}</li>;
    });
    return (
      <tr>
        <td>{item.method}</td>
        <td>
          <ol>{code}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
        <td>
          <ol>{result}</ol>
        </td>
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
      <table>
        <tr>
          <th>Method</th>
          <th>Code</th>
          <th>Notes</th>
          <th>Results</th>
        </tr>
        {renderArrayMethods}
      </table>
    </div>
  );
};

export default JSArrays;
