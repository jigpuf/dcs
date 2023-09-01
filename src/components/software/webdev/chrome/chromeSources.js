import React from "react";

const ChromeSources = () => {
  return (
    <div>
      <h1>Sources Tab of Chrome Developer Tools</h1>

      <h2>JavaScript Debugging</h2>
      <p>
        The "Sources" tab allows you to set breakpoints in your JavaScript code,
        step through the code, and analyze the program's state during runtime.
      </p>

      <h2>Call Stack</h2>
      <p>
        The "Sources" tab displays the call stack, showing the sequence of
        function calls that led to the current point of execution.
      </p>

      <h2>Watch Expressions</h2>
      <p>
        You can monitor the values of specific variables or expressions using
        watch expressions in the "Sources" tab.
      </p>

      <h2>Scope Inspection</h2>
      <p>
        The "Sources" tab allows you to inspect the variables and their values
        within different scopes, including local variables, function arguments,
        and global variables.
      </p>

      <h2>Conditional Breakpoints</h2>
      <p>
        You can set breakpoints with conditions in the "Sources" tab, pausing
        execution only when specific conditions are met.
      </p>

      <h2>Code Editing</h2>
      <p>
        The "Sources" tab provides basic code editing capabilities, allowing you
        to modify JavaScript source code within the browser.
      </p>

      <h2>Network Inspection</h2>
      <p>
        The "Sources" tab allows you to monitor network activity, including
        requests, responses, headers, and timings.
      </p>

      <h2>Source Mapping</h2>
      <p>
        If your JavaScript code is minified or bundled, the "Sources" tab can
        help you debug the original source code using source maps.
      </p>
    </div>
  );
};
export default ChromeSources;
