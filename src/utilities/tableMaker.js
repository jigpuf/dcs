import React from "react";

const TableMaker = (props) => {
  //array= everything going in the rows, head= column names, tableType=table format to be used
  //<TableMaker head=['site', 'purpose'] array=linkTable tableType='simpleColumn'
  /*
    column 1 , column 2 etc = simple Column
    ---------------------------------------
    column 1 , colomn 2     = links
    url,name   purpose
    ---------------------------------------
    column 1, column 2      = 1LL
    step        [points]
    ---------------------------------------
    column 1                =simpleCode
    [list]
    */
  const columns = props.head.length;
  const keys = Object.keys(props.array[0]);
  const tableHeadings = props.head.map((item) => {
    return <th>{item}</th>;
  });
  const array = props.array;
  const tableType = props.tableType;

  //-------------------------------------any size simple
  if (tableType == "simpleColumn" && columns == 1) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  if (tableType == "simpleColumn" && columns == 2) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
          <td>{row[keys[1]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  if (tableType == "simpleColumn" && columns == 3) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
          <td>{row[keys[1]]}</td>
          <td>{row[keys[2]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  if (tableType == "simpleColumn" && columns == 4) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
          <td>{row[keys[1]]}</td>
          <td>{row[keys[2]]}</td>
          <td>{row[keys[3]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  if (tableType == "simpleColumn" && columns == 5) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
          <td>{row[keys[1]]}</td>
          <td>{row[keys[2]]}</td>
          <td>{row[keys[3]]}</td>
          <td>{row[keys[4]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  if (tableType == "simpleColumn" && columns == 6) {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>{row[keys[0]]}</td>
          <td>{row[keys[1]]}</td>
          <td>{row[keys[2]]}</td>
          <td>{row[keys[3]]}</td>
          <td>{row[keys[4]]}</td>
          <td>{row[keys[5]]}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
  //-----------------------------------------Links Table
  /*
    Checklist:
    1) tableType = 'links'
    2) array keys should be formatted [name:'', purpose:'', url:'']
    3) Make sure to pass head  eg. ['Site', 'Purpose']
    4)Make sure array name being passed matches name of array you are using
    */
  if (tableType == "links") {
    const rows = array.map((row) => {
      return (
        <tr>
          <td>
            <a href={row.url} target="_blank">
              {row.name}
            </a>
          </td>
          <td>{row.purpose}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }

  //-----------------------------------------Coding Table
  /*
    checklist:
    1) tableType = 'coding'
    2) array keys should be formatted [{step:'', points:['',''], code:['','']},]
    3) Make sure to pass head  eg. ['Step', 'Explaination', 'Code']
    4)Make sure array name being passed matches name of array you are using
    */

  if (tableType == "coding") {
    const rows = array.map((row) => {
      const lines = row.code.map((line) => {
        return (
          <li>
            <samp>{line}</samp>
          </li>
        );
      });
      const points = row.points.map((point) => {
        return <li>{point}</li>;
      });
      return (
        <tr>
          <td>{row.step}</td>
          <td>
            <details>
              <ol>{points}</ol>
            </details>
          </td>
          <td>
            <details>
              <ol>{lines}</ol>
            </details>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>

        {rows}
      </table>
    );
  }
  //----------------------------------------------Simple Code
  /*
checklist:
    1)tableType = 'sampleCode'
    2) array should be formatted ['','','','']
    3) Make sure to pass  eg. ['headName']
    4)Make sure array name being passed matches name of array you are using
*/
  if (tableType == "simpleCode") {
    const rows = array.map((row) => {
      return (
        <p>
          <samp>{row}</samp>
        </p>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        <tr>{rows}</tr>
      </table>
    );
  }
  //---------------------------------------------------------1LL
  // column 1, column 2  , column 3   = 1LL
  // step        [points]  [response]
  if (tableType == "1LL") {
    const rows = array.map((row) => {
      const points = row.points.map((point) => {
        return <li>{point}</li>;
      });
      const responses = row.response.map((response) => {
        return <li>{response}</li>;
      });
      return (
        <tr>
          <td>{row.step}</td>
          <td>
            <ol>{points}</ol>
          </td>
          <td>
            <ol>{responses}</ol>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>{tableHeadings}</tr>
        </thead>
        {rows}
      </table>
    );
  }
};

export default TableMaker;
