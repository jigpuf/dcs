import React from 'react';

class Excel extends React.Component {
  render () {
    return (
      <div>
      <h2>Excel</h2>
      <li>Pivot Tables</li>
      These help sumarize data<br />
      <a href='https://www.youtube.com/watch?v=qu-AK0Hv0b4' target='_blank'>
      Pivot Table Tutorial</a><br />
      <p>Insert &rarr; Pivot Table.  Choose field and whether to put in rows or
      columns.  You can put multiple fields in one section to sub-divide the
      information</p>
      <li>Slicers</li>
      Clickable buttons to filter a pivot table
      <a href='https://www.youtube.com/watch?v=G6ImRBn3cQk' target='_blank'>
      Pivot Table with slicers Tutorial</a><br />
      </div>
    );
  }
}

export default Excel;
