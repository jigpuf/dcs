import React from 'react';

class Storage extends React.Component {
  render () {
    return (
      <div>
        <h2>Storage</h2>
        const storedSymbols = window.localStorage.getItem('symbols');
      </div>
    );
  }
}

export default Storage;
