import React from 'react';

class Selectors extends React.Component {
  render () {
    return (
      <div>

        <h2>Selectors</h2>
        <a href='https://www.w3schools.com/cssref/css_selectors.asp' target='_blank'
        >Selector Reference Page</a><br /><br />
          <table>
            <tr><th>Select Type</th><th>Symbol</th><th>Description</th></tr>
            <tr><td>Class</td><td>.className</td><td>Selects all of a specific class</td></tr>
            <tr><td>Id</td><td>#idName</td><td>Selects particular element by id</td></tr>
            <tr><td>Tag</td><td>tagName</td><td>Selects all of a certain type of tag</td></tr>
            <tr><td>All</td><td>*</td><td>Selects all elements</td></tr>
            <tr><td>Pseudo Class</td><td>tagName:pseudoclass</td><td>Selects all of this tag with PseudoClass</td></tr>
            <tr><td>Attribute</td><td>[attribute = value]</td><td>Selects all of this tag with PseudoClass</td></tr>
            <tr><td>Class within element</td><td>element.class</td><td>Selects a class within a certain type of element</td></tr>
          </table>
        <h3>Operators</h3>
          <table>
            <tr><th>Selector operator</th><th>Symbol</th><th>Description</th></tr>
            <tr><td></td><td>,</td><td></td></tr>
            <tr><td></td><td>spaces</td><td></td></tr>
            <tr><td>Has a parrent of</td><td>parent tag	&gt; child tag</td><td>Select child tag with given parent tag</td></tr>
            <tr><td></td><td>~</td><td>Ame as + but doesn't require being consecutive.  Still requires same parent</td></tr>
            <tr><td></td><td>tag1 + tag2</td><td>any tag2 that comes after tag1 under same parent</td></tr>
            <tr><td></td><td>=</td><td></td></tr>
            <tr><td></td><td>~=</td><td></td></tr>
            <tr><td></td><td>|=</td><td></td></tr>
            <tr><td>Begins with</td><td>^="someString"</td><td>Selects any value beginning with someString</td></tr>
            <tr><td>Ends with</td><td>$="someString"</td><td>Selects any value endinging with someString</td></tr>
            <tr><td>Anywhere in value</td><td>*="someString"</td><td>Selects any value containing someString</td></tr>
            <tr><td>Pseudo Clas</td><td>:</td><td></td></tr>
            <tr><td></td><td>::</td><td></td></tr>
          </table>

        <h3>Specificity</h3>
          <ol>
            <li>id</li>
            <li>class</li>
            <li>tag</li>
          </ol>
      </div>
    );
  }
}

export default Selectors;
