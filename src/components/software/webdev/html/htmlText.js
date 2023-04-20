import React from 'react';

const HtmlText = () =>{
    
    const items = [
        {slug:'Heading 1',
          syntax: <p>&lt;h1&gt;Heading Text&lt;/h1&gt;</p>, 
          output:<h1>Heading Text</h1>, 
          type:'Block' ,
        },
        {slug:'Heading 2', 
          syntax: <p>&lt;h2&gt;Heading Text&lt;/h2&gt;</p>, 
          output: <h2>Heading 2</h2>, 
          type:'Block',
        },
        {slug:'Heading 3', 
          syntax: <p>&lt;h3&gt;Heading Text&lt;/h3&gt;</p>, 
          output: <h3>Heading 3</h3>, 
          type:'Block',
        },
        {slug:'Heading 4', 
          syntax: <p>&lt;h4&gt;Heading Text&lt;/h4&gt;</p>, 
          output: <h4>Heading 4</h4>, 
          type:'Block',
        },
        {slug:'Heading 5', 
          syntax: <p>&lt;h5&gt;Heading Text&lt;/h5&gt;</p>, 
          output: <h5>Heading 5</h5>, 
          type:'Block',
        },
        {slug:'Heading 6', 
          syntax: <p>&lt;h6&gt;Heading Text&lt;/h6&gt;</p>, 
          output: <h6>Heading 6</h6>, 
          type:'Block',
        },
        {slug:'Emphasis', 
          syntax: <p>&lt;em&gt;Emphasis Text&lt;/em&gt;</p>, 
          output: <em>Ephasis Text</em>, 
          type:'In-Line',
        },
        {slug:'Strong', 
          syntax: <p>&lt;strong&gt;Strong Text&lt;/strong&gt;</p>, 
          output: <strong>Strong Text</strong>, 
          type:'In-Line',
        },
        {slug:'Bold' , 
          syntax: <p>&lt;bold&gt;Bold Text&lt;/bold&gt;</p>, 
          output: <bold>Bold Text</bold>, 
          type:'In-Line',
        },
        {slug:'Subscript' , 
          syntax: <p>&lt;sub&gt;Subscript Text&lt;/sub&gt;</p>, 
          output: <sub>Subscript Text</sub>, 
          type:'In-Line',
        },
        {slug:'Superscript', 
          syntax: <p>&lt;sup&gt;Superscript Text&lt;/sup&gt;</p>, 
          output: <sup>Super Text</sup>, 
          type:'In-Line',
        },
        {slug:'Small', 
          syntax: <p>&lt;small&gt;Small Text&lt;/small&gt;</p>, 
          output: <small>Small Text</small>, 
          type:'In-Line',
        },
        {slug:'Mark', 
          syntax: <p>&lt;mark&gt; Marked Text&lt;/mark&gt;</p>, 
          output: <mark>Marked Text</mark>, 
          type:'In-Line',
        },
        {slug:'Delete', 
          syntax: <p>&lt;del&gt;Deleted Text&lt;/del&gt;</p>, 
          output: <del>Deleted Text</del>, 
          type:'In-Line', 
        },
        {slug:'Inserted', 
          syntax: <p>&lt;ins&gt;Inserted Text&lt;/ins&gt;</p>, 
          output: <ins>Inserted Text</ins>, 
          type:'In-Line',
        },
        {slug:'Quote', 
          syntax: <p>&lt;q&gt;Quote Text&lt;/q&gt;</p>, 
          output: <q>Quote Text</q>, 
          type:'In-Line',
        },
        {slug:'Block Quote', 
          syntax: <p>&lt;blockquote&gt;Block Quote Text&lt;/blockquote&gt;</p>, 
          output: <blockquote>Blockquote Text</blockquote>, 
          type:'Block',
        },
        {slug:'Cite', 
          syntax: <p>&lt;cite&gt;Cited Text&lt;/cite&gt;</p>, 
          output: <cite>Cited Text</cite>, 
          type:'In-Line',
        },
        {slug:'Sample' ,
          syntax: <p>&lt;samp&gt;Coding Sample&lt;/samp&gt;</p>, 
          output: <samp>Code Sample Text</samp>, 
          type:'In-Line',
        },
       ]
    
       const characters = [
        {character:<p>&lt;</p>, syntax: '&lt;', decimal: '&#60;'},
        {character:<p>&gt;</p>, syntax: '&gt;', decimal: '&#62;;'},
        {character:<p>&Omega;</p>, syntax: '&Omega;', decimal: '&#937;'},
        {character:<p>backtic`</p>, syntax: '', decimal: '&#768;'},
        {character:<p>&#33;</p>, syntax: '', decimal: '&#33;'},
        {character:<p>&lt;</p>, syntax: '&lt;', decimal: '&#60;'},
        {character:<p>&lt;</p>, syntax: '&lt;', decimal: '&#60;'},
        {character:'`', syntax: '&lt;', decimal: '&#60;'},
        {character:'', syntax: '&lt;', decimal: '&#60;'},
        {character:<p>&#36;</p>, syntax: '&lt;', decimal: '&amp;#36;'},
        {character:'Less Than', syntax: '&lt;', decimal: '&#60;'},
        {character:'Less Than', syntax: '&lt;', decimal: '&#60;'},
        {character:'Less Than', syntax: '&lt;', decimal: '&#60;'},
        {character:'Less Than', syntax: '&lt;', decimal: '&#60;'},
        {character:'Less Than', syntax: '&lt;', decimal: '&#60;'},
      ]
    /*
    <tr><td>&amp;</td><td>&amp;amp;</td><td>&amp;#38;
    <tr><td>&#40;</td><td></td><td>&amp;#40;
    <tr><td>&#41;</td><td></td><td>&amp;#41;
    <tr><td>&#123;</td><td></td><td>&amp;#123;
    <tr><td>&#125;</td><td></td><td>&amp;#125;</td></tr>
    <tr><td>&#124;</td><td></td><td>&amp;#124;</td></tr>
    <tr><td>&#35;</td><td></td><td>&amp;#35;</td></tr>
    <tr><td>&#37;</td><td></td><td>&amp;#37;</td></tr>
    <tr><td>&#42;</td><td></td><td>&amp;#42;</td></tr>
    <tr><td>&#43;</td><td></td><td>&amp;#43;</td></tr>
    <tr><td>&#44;</td><td></td><td>&amp;#44;</td></tr>
    <tr><td>&#47;</td><td></td><td>&amp;#47;</td></tr>
    <tr><td>&#58;</td><td></td><td>&amp;#58;</td></tr>
    <tr><td>&#59;</td><td></td><td>&amp;#59;</td></tr>
    <tr><td>&#61;</td><td></td><td>&amp;#61;</td></tr>
    <tr><td>&#225;</td><td>&amp;aacute;</td><td>&amp;#225;</td></tr>
    <tr><td>&#233;</td><td>&amp;eacute;</td><td>&amp;#233;</td></tr>
    <tr><td>&#237;</td><td>&amp;iacute;</td><td>&amp;#237;</td></tr>
    <tr><td>&#243;</td><td>&amp;oacute;</td><td>&amp;#243;</td></tr>
    <tr><td>&#250;</td><td>&amp;uacute;</td><td>&amp;#250;</td></tr>
    <tr><td>&#241;</td><td>&amp;ntilde;</td><td>&amp;#241;</td></tr>
    <tr><td>&#252;</td><td>&amp;uuml;</td><td>&amp;#252;</td></tr>
    <tr><td>&#181;</td><td>&amp;micro;</td><td>&amp;#181;</td></tr>
    <tr><td>&#8594;</td><td>&amp;rarr;</td><td>&amp;#8594;</td></tr>
    <tr><td>Blank Space</td><td>&amp;nbsp;</td><td>&amp;#160;</td></tr>*/
      const renderItems = items.map(item => {
        return (
          <tr key={item.slug}>
            <td >{item.slug}</td>
            <td >{item.syntax}</td>
            <td >{item.output}</td>
            <td >{item.type}</td>
          </tr>
        )
      })
      const renderCharacters = characters.map(item => {
        return (
          <tr key={item.character}>
            <td ><p>{item.character}</p></td>
            <td ><p>{item.syntax}</p></td>
            <td ><p>{item.decimal}</p></td>
          </tr>
        )
      })
        return (
          <div>
                  <h2>Text</h2>
            <table>
              <tr><th>Name</th><th>Syntax</th><th>Output</th><th>Type</th></tr>
              {renderItems}
              
            </table>
        <br />
        <table>
              <tr><th>Character</th><th>Syntax</th><th>Decimal</th></tr>
              {renderCharacters}
            </table>
        
            <h3>Escape Characters</h3>        <div>
             </div>
            <h3>Commenting in html</h3>
            &lt;&#33;-- all my comments here  --&gt;
    
          </div>
        );
      }

export default HtmlText;