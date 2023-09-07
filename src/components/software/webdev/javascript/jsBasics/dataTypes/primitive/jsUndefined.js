import React from "react";

const JSUndefined = () => {
  return (
    <div>
      <h1>Undefined</h1>
      <h2>Definition</h2>
      <ul>
        <li>
          <strong>undefined</strong> is a special value in JavaScript.
        </li>
        <li>
          It represents a variable that has been declared but has not been
          assigned a value.
        </li>
        <li>It also represents an object property that does not exist.</li>
      </ul>

      <h2>Type and Value</h2>
      <ul>
        <li>
          <strong>undefined</strong> is of type "undefined".
        </li>
        <li>It is a built-in constant and keyword in JavaScript.</li>
        <li>
          The value of <strong>undefined</strong> is <strong>undefined</strong>.
        </li>
      </ul>

      <h2>Purpose</h2>
      <ul>
        <li>
          <strong>undefined</strong> typically indicates that a variable or
          property has been declared but not yet assigned a value.
        </li>
        <li>
          It can also indicate that an object does not have a specific property.
        </li>
        <li>
          It is different from <strong>null</strong>, which represents the
          intentional absence of a value.
        </li>
      </ul>

      <h2>Behavior</h2>
      <ul>
        <li>
          When a variable is declared but not assigned a value, its default
          value is <strong>undefined</strong>.
        </li>
        <li>
          Attempting to access an undefined variable or property usually results
          in <strong>undefined</strong> being returned.
        </li>
        <li>
          <strong>undefined</strong> is falsy, meaning it evaluates to false in
          a boolean context.
        </li>
      </ul>

      <h2>Comparison</h2>
      <ul>
        <li>
          When comparing with other values, <strong>undefined</strong> is equal
          (loose equality with type coercion) only to <strong>undefined</strong>{" "}
          and <strong>null</strong>.
        </li>
        <li>
          It is not equal to any other value, including <strong>false</strong>,{" "}
          <strong>0</strong>, or an empty string.
        </li>
      </ul>
    </div>
  );
};

export default JSUndefined;
