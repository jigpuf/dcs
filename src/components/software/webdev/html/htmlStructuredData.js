import React from 'react';
import TableMaker from '../../../../utilities/tableMaker.js'

const HtmlStructuredData = () =>{
  const codeHead =['Step','Explain', 'Code']
  const tags =[
    {step:'Details', 
    points:['', 
    '',
    '',
    '',
    '',
    '',
    '', 
    '',
    '',
    '',

    '',], 
    code:['<details>',
    '<summary>',
    'Title of the details section',
    '</summary>',
    '<ul>',
    '<li>Activity</li>',
    '<li>BreathingActivity</li>',
    '<li>ReflectingActivity</li>',
    '<li>ListingActivity</li>',
    '</ul>',
    '</details>',]},
]
    return(
        <div>
            <h2>Structured Content</h2>
            <h2>Details</h2>
            <TableMaker head={codeHead} array={tags} tableType='coding' />

            <details>
        <summary>
          Title of the details section
        </summary>  
        <ul>
          <li>Activity</li>
          <li>BreathingActivity</li>
          <li>ReflectingActivity</li>
          <li>ListingActivity</li>
        </ul>
        </details>
            <h2>Tables</h2>
          <pre>
            &lt;table&gt;<br />
                 &lt;tr&gt;&lt;th&gt;Number&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;<br />
                 &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Porpois Oriface&lt;/td&gt;&lt;/tr&gt;<br />
            &lt;/table&gt;<br />
          </pre>
          If you want to make a cell strech across multople columns, add attribute colspan='3' to stretch across 3 columns, rowspan works the same for making a cell taller
          Renders:<br />
          <table>
            <tr><th>Number</th><th>Name</th></tr>
            <tr><td>1</td><td>Porpois Oriface</td></tr>
          </table>
          <hr />
        <h2>Lists</h2>
          <div class='twoColumn'>
            Ordered List:
            <pre>
              &lt;ol&gt;<br />
                   &lt;li&gt;2Pac&lt;/li&gt;<br />
                   &lt;li&gt;Eminem&lt;/li&gt;<br />
              &lt;/ol&gt;<br />
            </pre>
            Renders:<br />
            <ol>
              <li>2Pac</li>
              <li>Eminem</li>
            </ol>
            Unordered List:
            <p>
              &lt;ul&gt;<br />
                   &lt;li&gt;2Pac&lt;/li&gt;<br />
                   &lt;li&gt;Eminem&lt;/li&gt;<br />
              &lt;/ul&gt;<br />
            </p>
            Renders:<br />
            <ul>
              <li>2Pac</li>
              <li>Eminem</li>
            </ul>
          </div>
          <hr />
        <h2>Div</h2>
        Divs are just bnlock level generic containers.  There are a number of semantic containers that do the same thing as div but make it easier for webscrapers and accessibilty
          &lt;div&gt;&lt;/div&gt;
          <li>nav- For holding links</li>
          <li>main- primary content of page</li>
          <li>article- easy to distribute parts of page, content that could stand alone</li>
          <li>p- paragragh level content</li>
          <li>aside- things that are off to the side of the main content</li>
          <li>footer- footer type information</li>
          <li>header- start of major sections</li>
          <li>time- anything to do with time</li>
          <li>figure- things like diagrams</li>

          <hr />
        <h2>Break</h2>
          &lt;br /&gt;
          <hr />
        <h2>Hard Rule</h2>
          &lt;hr /&gt;
          <hr />


        </div>
    );
    }

export default HtmlStructuredData;