import React from "react";

const JSSymbol = () => {
  return (
    <div>
      <h1>Symbol</h1>
      <h2>Definition</h2>
      <ul>
        <li>
          <strong>Symbol</strong> is a primitive data type introduced in
          ECMAScript 2015 (ES6).
        </li>
        <li>
          It represents a unique identifier that can be used as a property key
          of an object.
        </li>
        <li>
          Each time a <strong>Symbol</strong> is created, it is guaranteed to be
          distinct from any previously created <strong>Symbol</strong>.
        </li>
      </ul>

      <h2>Creation</h2>
      <ul>
        <li>
          A <strong>Symbol</strong> is created using the <code>Symbol()</code>{" "}
          function, which returns a new <strong>Symbol</strong> value.
        </li>
        <li>
          <strong>Symbol</strong> values are immutable and unique.
        </li>
      </ul>

      <h2>Usage</h2>
      <ul>
        <li>
          <strong>Symbol</strong> values are primarily used as unique property
          keys to avoid naming collisions in objects.
        </li>
        <li>
          They can be used as property identifiers by defining properties with{" "}
          <strong>Symbol</strong> keys using the bracket notation or the{" "}
          <code>Object.defineProperty()</code> method.
        </li>
        <li>
          <strong>Symbol</strong> values are guaranteed to be ignored by most
          built-in object methods and do not show up in regular object
          iterations.
        </li>
      </ul>

      <h2>Symbol Registry</h2>
      <ul>
        <li>
          There is a global symbol registry accessed through the{" "}
          <code>Symbol.for()</code> method.
        </li>
        <li>
          <code>Symbol.for()</code> allows you to create and retrieve shared{" "}
          <strong>Symbol</strong> values that are stored globally and can be
          accessed across different parts of your codebase.
        </li>
      </ul>

      <h2>Comparison</h2>
      <ul>
        <li>
          Each <strong>Symbol</strong> value is unique and not equal to any
          other value, including other <strong>Symbol</strong> values.
        </li>
        <li>
          They can be used as property keys to avoid naming conflicts, even if
          the key is the same as another <strong>Symbol</strong>.
        </li>
      </ul>
    </div>
  );
};

export default JSSymbol;
