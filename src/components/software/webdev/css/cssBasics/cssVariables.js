import React from "react";

const CSSVariables = () => {
  return (
    <div>
      <h1>Using CSS Variables</h1>
      <p>With CSS variables, you can define reusable values:</p>
      <ul>
        <li>
          Declare CSS variables using the <code>:root</code> pseudo-class.
        </li>
        <li>
          Assign values to the variables using the <code>--</code> prefix.
        </li>
        <li>
          Access the variable values using the <code>var()</code> function.
        </li>
      </ul>
      <p>Here's an example:</p>
      <pre>
        <code>
          {`:root {
  --primary-color: #007bff;
  --font-size: 16px;
}

.selector {
  color: var(--primary-color);
  font-size: var(--font-size);
}`}
        </code>
      </pre>
      <p>
        In the example above, the <code>--primary-color</code> variable is set
        to <code>#007bff</code>, and the <code>--font-size</code> variable is
        set to <code>16px</code>.
      </p>
      <p>
        The <code>.selector</code> class uses the variables to set the{" "}
        <code>color</code> and <code>font-size</code> properties.
      </p>
    </div>
  );
};

export default CSSVariables;
