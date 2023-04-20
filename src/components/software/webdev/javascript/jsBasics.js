import React from 'react';

class JsBasics extends React.Component {
  render () {
    return (
      <div>
        <h2>Javascript notes</h2>
 
          <h3>Browser Console</h3>
            <p>In chrome &rarr; right click &rarr; inspect &rarr; console</p>
            You can put JS directly into page in JS file you can put:<br />
            console.log();<br />
            <p>In the parentheses, you put what you want to log in the console.
            This is a good way to test code.</p>
          <h3>Commenting Out</h3>
          <table>
            <tr><th>Type</th><th>Example</th></tr>
            <tr><td>One-line comments</td><td>&#47;&#47;ThingsToCommentOutHere</td></tr>
            <tr><td>Muti-line comments</td><td>&#47;&#42; ThingsToCommentOutHere&#42;&#47;</td></tr>
          </table>
          <h3>Just JS Paradimn and mental map</h3>
            <li>The code is its own asteroid</li>
            <li>Primitive Values are like stars that float in the distance.  They can't be changed</li>
            <li>Objects and functions are values that are rocks close enough to manipulate with code</li>
            <li>Expressions are questions JS can answer like 2+2 eg. console.log(2+2)</li>
            <li>Expressions always result in a single value</li>
            <li>To learn the type of a value use typeof() eg. console.log(typeof(3))  The anwer will be number</li>
            <li>Primitive:Null, undefined, boolean, number, string, symbol, BiInts</li>
            <li>Non Primitive: Objects(arrays, dates, regular expressions), Functions</li>
            <li>Null will evaluate to object, but it is a bug that it is too late to fix.  It is primitive.</li>
            <li>Strings are not arrays.  w</li>
            <p>
            While you can access letters in a string using something like<br />
            let word = 'happy';<br />
            console.log(word[0]); //h<br />
            You can't change them in the way you can an array.  It will ignore
            the command or throw an error if you try.  Primitive values cannot
            have properties set on them.
            </p>
            <li>Variables are not values.  Variables point to values.  In the
            mental model, there is a wire that goes between a variable and a
            value.  we can assign different values to a variable</li>
            <li>Any time an expression is assigned to a variable, it becomes a
            litteral, because it is literally written down as a used value</li>
            <li>Variables can't be passed to functions.  Only the value that the
            variable is pointing to can be passed into a function</li>
            <li>You can't point variables to each other, only to the value
            attached to a variable</li>
      </div>
    );
  }
}

export default JsBasics;
