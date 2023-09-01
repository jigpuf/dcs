import React from "react";

const ChromeElements = () => {
  return (
    <div>
      <h1>Elements Section of Chrome Developer Tools</h1>
      This section can be opened through tools or right clicking any element on
      the page and going to inspect. With the element tab open, you can click on
      styles and see all the CSS applied to that element. Under the element tab
      you can see all the html broken down. Under styles, there is an add button
      that allows you to add rules to the currently selected element. These are
      temporary changes. Under the computed tab, you can see all the CSS that is
      actually being applied. There are additional tools under developer toolds
      that include CSS Overview. From here you can see an easy overlay of all
      the fonts and colors being used in the current screen on the website. The
      elements tab can also show the nodes of your HTML which could be useful
      for building nodes through Javascript means.
      <h2>DOM Inspection</h2>
      <p>
        The "Elements" section shows the HTML structure of the web page in a
        hierarchical tree format. You can expand and collapse individual
        elements to explore the DOM.
      </p>
      <h2>Live Editing</h2>
      <p>
        You can edit the HTML and CSS of the web page directly in the "Elements"
        panel. Simply double-click on an element or a style property to make
        changes.
      </p>
      <h2>CSS Styles</h2>
      <p>
        The "Elements" section displays the computed styles and applied CSS
        rules for each element. You can inspect and modify the styles, including
        inline styles and styles defined in external stylesheets.
      </p>
      <h2>Element Selection</h2>
      <p>
        You can use the "Elements" section to select and highlight specific
        elements on the page. This is particularly useful for identifying the
        structure of complex layouts.
      </p>
      <h2>Box Model Visualization</h2>
      <p>
        The "Elements" panel provides a visual representation of the box model
        for selected elements. You can see the dimensions, padding, border, and
        margin of an element.
      </p>
      <h2>DOM Manipulation</h2>
      <p>
        The "Elements" section allows you to add, remove, or modify elements in
        the DOM. You can create new nodes, delete existing ones, or rearrange
        the structure of the page.
      </p>
      <h2>Event Listeners</h2>
      <p>
        The "Elements" panel displays the event listeners attached to elements.
        You can view the registered event handlers and even add or remove event
        listeners dynamically.
      </p>
    </div>
  );
};
export default ChromeElements;
