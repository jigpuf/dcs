import React from 'react';

const Keywords = () =>{

    const keywords=[
        {word:'var', scope:'Global', writability:'Read/Write'},
        {word:'let', scope:'Local', writability:'Read/Write'},
        {word:'strict', scope:'Local', writability:'Read Only'},
    ]; 

    const renderKeywords = keywords.map(item =>{
        return(
                <tr>
                    <td>{item.word}</td>
                    <td>{item.scope}</td>
                    <td>{item.writability}</td>
                </tr>
        );
    }

    )
    return(
        <div>
            <h2>Variable Keywords</h2>
            <table>
                <tr><th>Keyword</th><th>Scope</th><th>Writability</th></tr>
                {renderKeywords}
            </table>
            <p>If you want to be able to change a variable use let. If it should
          stay the same use const.</p>
          Variable Naming Conventions:
          <ol>
            <li>No spaces</li>
            <li>Only contain letters, numbers, underscore</li>
            <li>Has to start with letter or underscore</li>
            <li>Cannot use Javascript key words</li>
          </ol>
          <table>
            <tr><th>Type</th><th>Example</th></tr>
            <tr><td>Changeable</td><td>let variableNameHere = valueHere;</td></tr>
            <tr><td>Not changeable after assignment</td><td>const variableNameHere = valueHere;</td></tr>
            <tr><td>Global</td><td>var variableNameHere = valueHere;</td></tr>
          </table>
          <h3>Example</h3>
            let age = 25; // create variable age. type can be changed<br />
            age = 30; //asign new value to age<br />
          <h3></h3>
        </div>
    );
    }

export default Keywords;