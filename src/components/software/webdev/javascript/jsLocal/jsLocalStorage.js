import React from "react";

const JSLocalStorage = () => {
  const localStorageMethods = [
    {
      method: "setItem",
      description: "Stores a key-value pair in the localStorage.",
      syntax: "localStorage.setItem(key, value)",
      example: `localStorage.setItem("username", "John");`,
      explanation:
        "This method sets the value of the specified key in the localStorage. The key is a string representing the name of the item, and the value can be any data that can be serialized as a string.",
    },
    {
      method: "getItem",
      description:
        "Retrieves the value associated with a key from the localStorage.",
      syntax: "localStorage.getItem(key)",
      example: `const username = localStorage.getItem("username");`,
      explanation:
        "This method retrieves the value associated with the specified key from the localStorage. If the key doesn't exist, it returns null.",
    },
    {
      method: "removeItem",
      description:
        "Removes the item associated with a key from the localStorage.",
      syntax: "localStorage.removeItem(key)",
      example: `localStorage.removeItem("username");`,
      explanation:
        "This method removes the item associated with the specified key from the localStorage. If the key doesn't exist, it has no effect.",
    },
    {
      method: "clear",
      description: "Clears all items stored in the localStorage.",
      syntax: "localStorage.clear()",
      example: `localStorage.clear();`,
      explanation:
        "This method removes all items stored in the localStorage, effectively resetting it to an empty state.",
    },
    {
      method: "key",
      description:
        "Retrieves the key at a specified index in the localStorage.",
      syntax: "localStorage.key(index)",
      example: `const firstKey = localStorage.key(0);`,
      explanation:
        "This method retrieves the key at the specified index in the localStorage. The index represents the numeric position of the key in the storage. If the index is out of range, it returns null.",
    },
  ];
  const sessionStorageMethods = [
    {
      method: "setItem",
      description: "Stores a key-value pair in the sessionStorage.",
      syntax: "sessionStorage.setItem(key, value)",
      example: `sessionStorage.setItem("username", "John");`,
      explanation:
        "This method sets the value of the specified key in the sessionStorage. The key is a string representing the name of the item, and the value can be any data that can be serialized as a string.",
    },
    {
      method: "getItem",
      description:
        "Retrieves the value associated with a key from the sessionStorage.",
      syntax: "sessionStorage.getItem(key)",
      example: `const username = sessionStorage.getItem("username");`,
      explanation:
        "This method retrieves the value associated with the specified key from the sessionStorage. If the key doesn't exist, it returns null.",
    },
    {
      method: "removeItem",
      description:
        "Removes the item associated with a key from the sessionStorage.",
      syntax: "sessionStorage.removeItem(key)",
      example: `sessionStorage.removeItem("username");`,
      explanation:
        "This method removes the item associated with the specified key from the sessionStorage. If the key doesn't exist, it has no effect.",
    },
    {
      method: "clear",
      description: "Clears all items stored in the sessionStorage.",
      syntax: "sessionStorage.clear()",
      example: `sessionStorage.clear();`,
      explanation:
        "This method removes all items stored in the sessionStorage, effectively resetting it to an empty state.",
    },
    {
      method: "key",
      description:
        "Retrieves the key at a specified index in the sessionStorage.",
      syntax: "sessionStorage.key(index)",
      example: `const firstKey = sessionStorage.key(0);`,
      explanation:
        "This method retrieves the key at the specified index in the sessionStorage. The index represents the numeric position of the key in the storage. If the index is out of range, it returns null.",
    },
  ];
  const complexData = [
    {
      data: "Array",
      set: [
        "const myArray = ['apple', 'banana', 'orange'];",
        "localStorage.setItem('myArray', JSON.stringify(myArray));",
      ],
      get: [
        "const storedArray = JSON.parse(localStorage.getItem('myArray'));",
        "console.log(storedArray);",
        "// Output: ['apple', 'banana', 'orange']",
      ],
      notes: [
        "The 'set' code sets an array named 'myArray' in localStorage.",
        "The array is first created with the values ['apple', 'banana', 'orange'].",
        "Then, the array is converted to a string using JSON.stringify().",
        "Finally, the string representation of the array is stored in localStorage under the key 'myArray'.",
        "",
        "The 'get' code retrieves the array from localStorage.",
        "First, the string representation of the array is retrieved using localStorage.getItem('myArray').",
        "Then, the string is converted back to an array using JSON.parse().",
        "Finally, the array is logged to the console, resulting in ['apple', 'banana', 'orange'].",
      ],
    },
    {
      data: "Object",
      set: [
        "const myObject = { name: 'John', age: 30, city: 'New York' };",
        "localStorage.setItem('myObject', JSON.stringify(myObject));",
      ],
      get: [
        "const storedObject = JSON.parse(localStorage.getItem('myObject'));",
        "console.log(storedObject);",
        "// Output: { name: 'John', age: 30, city: 'New York' }",
      ],
      notes: [
        "The 'set' code sets an object named 'myObject' in localStorage.",
        "The object is first created with the properties name, age, and city.",
        "Then, the object is converted to a string using JSON.stringify().",
        "Finally, the string representation of the object is stored in localStorage under the key 'myObject'.",
        "",
        "The 'get' code retrieves the object from localStorage.",
        "First, the string representation of the object is retrieved using localStorage.getItem('myObject').",
        "Then, the string is converted back to an object using JSON.parse().",
        "Finally, the object is logged to the console, resulting in { name: 'John', age: 30, city: 'New York' }.",
      ],
    },
  ];
  const renderComplexData = complexData.map((item) => {
    const setters = item.set.map((setter) => {
      return <li>{setter}</li>;
    });
    const getters = item.get.map((getter) => {
      return <li>{getter}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.data}</td>
        <td>
          <ol>{setters}</ol>
        </td>
        <td>
          <ol>{getters}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
      </tr>
    );
  });
  const renderLocalStorageMethods = localStorageMethods.map((item) => {
    return (
      <tr>
        <td>{item.method}</td>
        <td>{item.description}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  const renderSessionStorageMethods = sessionStorageMethods.map((item) => {
    return (
      <tr>
        <td>{item.method}</td>
        <td>{item.description}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Local Storage</h1>

      <table>
        <caption>
          <h3>Local Storage Methods</h3>
        </caption>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderLocalStorageMethods}
      </table>

      <table>
        <caption>
          <h3>Session Storage Methods</h3>
        </caption>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderSessionStorageMethods}
      </table>

      <table>
        <caption>
          <h3>COMPLEX DATA</h3>
          <p>
            In JavaScript, the localStorage and sessionStorage APIs are designed
            to store data as strings. Therefore, you cannot directly save arrays
            or objects in localStorage or sessionStorage. However, you can
            convert arrays or objects into strings using methods like
            JSON.stringify() before storing them, and then parse them back into
            their original form using JSON.parse() when retrieving them.
          </p>
        </caption>
        <tr>
          <th>Data</th>
          <th>Storage Syntax</th>
          <th>Retrieval Syntax</th>
          <th>Notes</th>
        </tr>
        {renderComplexData}
      </table>
      <div style={{ backgroundColor: "black" }}>
        <h2>Persistance</h2>
        <p>
          Clearing the cache and cookies in a web browser does not directly
          clear the data stored in localStorage. localStorage is designed to
          persistently store data on the client side, even if the cache and
          cookies are cleared.
        </p>

        <p>
          However, it's important to note that clearing the cache and cookies
          can indirectly affect localStorage in certain scenarios:
        </p>

        <ol>
          <li>
            <strong>Clearing cookies:</strong> If your website or web
            application relies on cookies for authentication or session
            management, clearing the cookies may result in the loss of session
            information stored on the server. This can affect how your
            application interacts with localStorage and may require users to
            re-authenticate or re-establish their sessions.
          </li>
          <li>
            <strong>Clearing cache:</strong> Clearing the cache can remove
            cached resources such as HTML, CSS, JavaScript files, and images. If
            your web application relies on cached resources to initiate or
            manage data stored in localStorage, clearing the cache may impact
            the functionality or appearance of your application. However, the
            actual data stored in localStorage will remain intact.
          </li>
        </ol>

        <p>
          In summary, clearing the cache and cookies does not directly clear the
          data stored in localStorage, but it can have side effects on the
          functioning of your web application if it relies on cookies or cached
          resources in conjunction with localStorage.
        </p>
      </div>
    </div>
  );
};

export default JSLocalStorage;
