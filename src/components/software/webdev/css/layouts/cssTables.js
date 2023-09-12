import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";

const CSSTables = () => {
  const tableHead = ["Step", "Explanation", "Code"];
  const table = [
    {
      step: "Set overall table values",
      points: [
        "applies styles to a table element",
        "font-family: Sets the font family for the text inside the table cells to Arial, Helvetica, sans-serif.",
        "width: Sets the width of the table to 95% of its container's width.",
        "margin-left and margin-right: Centers the table horizontally by setting the left and right margins to 'auto'.",
        "margin-top: Adds a margin of 30 pixels on the top of the table.",
        "border-radius: Applies a border-radius of 5 pixels to give the table rounded corners.",
        "border: Adds a border to the table.",
        "Close Rule",
      ],
      code: [
        "table {",
        "font-family: Arial, Helvetica, sans-serif;",
        "width: 95%;",
        "margin-left: auto;",
        "margin-right: auto;",
        "border-radius: 5px;",
        "border: 1px solid black;",
        "}",
      ],
    },
    {
      step: "Set cell properties",
      points: [
        "selector that targets both td (table cell) and th (table header cell) elements",
        "padding: 8px;: Sets the padding (space) inside the cells to 8 pixels. This creates some space between the content and the cell borders.",
        "text-align: left;: Aligns the content within the cells to the left side of the cell.",
        "border-radius: 5px;: Applies a border-radius of 5 pixels to give the cells rounded corners. This adds a slight curve to the corners of the cells, making them visually smoother.",
        "Close rule",
      ],
      code: [
        "td,th {",
        "padding: 8px;",
        "text-align: left;",
        "border-radius: 5px;",
        "}",
      ],
    },
    {
      step: "Set Row property for rounded corners",
      points: [
        "CSS selector that targets tr elements",
        "In this case, the property border-radius: 5px; is used to apply a border-radius of 5 pixels to the table rows. This adds a slight curve to the corners of the rows, making them visually smoother. By setting the border-radius on the tr elements, you are applying the rounded corners to the entire row, including all the cells within that row. This can be useful for achieving a consistent and visually appealing design for the entire row of the table.",
        "Close rule",
      ],
      code: ["tr {", "border-radius: 5px;", "}"],
    },
    {
      step: "Set color for even rows",
      points: [
        "Selector that targets every even tr element (table row) within a table using the Nth child Pseudo CLass.",
        "sets the background color of the even rows to #f2f2f2, which is a light gray color. ",
        "Close rule",
      ],
      code: ["tr:nth-child(even) {", "background-color: #f2f2f2;", "}"],
    },
    {
      step: "Set color for odd rows",
      points: [
        "Selector that targets every even tr element (table row) within a table using the Nth child Pseudo CLass.",
        "sets the background color of the odd rows to #a9b6c9, which is a light blue color.",
        "Close rule",
      ],
      code: ["tr:nth-child(odd) {", "background-color: #a9b6c9;", "}"],
    },
    {
      step: "Set color for hover property",
      points: [
        "selector that targets the tr elements (table rows) when the user hovers over them with the mouse cursor.",
        "sets the background color of the hovered rows to #ddd, which is a light gray color. ",
        "Close rule",
      ],
      code: ["tr:hover {", "background-color: #ddd;", "}"],
    },
    {
      step: "Make the headings a bit more prominent",
      points: [
        "selector that targets th elements",
        "Sets the top and bottom padding of the table header cells to 12 pixels. This adds some vertical space within the cells, making them taller.",
        "Sets the background color of the table header cells to #65798a, which is a dark blueish-gray color.",
        "Sets the text color of the table header cells to white. This ensures the text inside the header cells is displayed with white color, providing a high contrast against the background color.",
        "Close rule",
      ],
      code: [
        "th {",
        "padding-top: 12px;",
        "padding-bottom: 12px;",
        "background-color: #65798a;",
        "color: white;",
        "}",
      ],
    },
    {
      step: "Make the head scroll down with pageso you don't lose the column names",
      points: [
        "selector that targets the thead element, which represents the table header section.",
        "Sets the position of the thead element as 'sticky'. This means that the table header will remain fixed at its position within the scrolling container (e.g., the table body), while the rest of the table scrolls vertically. Sticky positioning allows the table header to stay visible even when the user scrolls through a long table.",
        "top: 0;: Sets the positioning offset of the sticky element. In this case, the table header will stick to the top of its container (e.g., the scrolling table body). Adjusting this value can change the distance of the sticky header from the top of its container.",
        "background-color: #f5f5f5;: Sets the background color of the table header to #f5f5f5, which is a light gray color. This provides a distinct background color for the sticky header, making it visually stand out from the rest of the table.",
        "Close rule",
      ],
      code: [
        "thead {",
        "position: sticky;",
        "top: 0;",
        "background-color: #f5f5f5;",
        "}",
      ],
    },
    {
      step: "Whole Code",
      points: [],
      code: [
        "table {",
        "font-family: Arial, Helvetica, sans-serif;",
        "width: 95%;",
        "margin-left: auto;",
        "margin-right: auto;",
        "border-radius: 5px;",
        "border: 1px solid black;",
        "}",
        "td,th {",
        "padding: 8px;",
        "text-align: left;",
        "border-radius: 5px;",
        "}",
        "tr {",
        "border-radius: 5px;",
        "}",
        "tr:nth-child(even) {",
        "background-color: #f2f2f2;",
        "}",
        "tr:nth-child(odd) {",
        "background-color: #a9b6c9;",
        "}",
        "tr:hover {",
        "background-color: #ddd;",
        "}",
        "th {",
        "padding-top: 12px;",
        "padding-bottom: 12px;",
        "background-color: #65798a;",
        "color: white;",
        "}",
        "thead {",
        "position: sticky;",
        "top: 0;",
        "background-color: #f5f5f5;",
        "}",
      ],
    },
  ];

  return (
    <div>
      <h1>CSS Tables</h1>
      <TableMaker tableType="coding" array={table} head={tableHead} />
      <table id="sampleTable">
        <caption>Simpons Seasons</caption>
        <thead>
          <tr>
            <th>Episode Number</th>
            <th>Episode Name</th>
            <th>Air Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Simpsons Roasting on an Open Fire</td>
            <td>December 17, 1989</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bart the Genius</td>
            <td>January 14, 1990</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Homer's Odyssey</td>
            <td>January 21, 1990</td>
          </tr>
          <tr>
            <td>4</td>
            <td>There's No Disgrace Like Home</td>
            <td>January 28, 1990</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Bart the General</td>
            <td>February 4, 1990</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Moaning Lisa</td>
            <td>February 11, 1990</td>
          </tr>
          <tr>
            <td>7</td>
            <td>The Call of the Simpsons</td>
            <td>February 18, 1990</td>
          </tr>
          <tr>
            <td>8</td>
            <td>The Telltale Head</td>
            <td>February 25, 1990</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Life on the Fast Lane</td>
            <td>March 18, 1990</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Homer's Night Out</td>
            <td>March 25, 1990</td>
          </tr>
          <tr>
            <td>11</td>
            <td>The Crepes of Wrath</td>
            <td>April 15, 1990</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Krusty Gets Busted</td>
            <td>April 29, 1990</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Some Enchanted Evening</td>
            <td>May 13, 1990</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Bart Gets an F</td>
            <td>October 11, 1990</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Simpson and Delilah</td>
            <td>October 18, 1990</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Treehouse of Horror</td>
            <td>October 25, 1990</td>
          </tr>
          <tr>
            <td>16</td>
            <td>There's Something About Marrying</td>
            <td>February 20, 2005</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Bart Has Two Mommies</td>
            <td>February 27, 2005</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Moe'N'a Lisa</td>
            <td>March 13, 2005</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Kiss Kiss, Bang Bangalore</td>
            <td>March 20, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
          <tr>
            <td>20</td>
            <td>The Wettest Stories Ever Told</td>
            <td>March 27, 2005</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CSSTables;
