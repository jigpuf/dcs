import React from 'react';

class Layout extends React.Component {
  render () {
    return (
      <div>
        <h2>CSS Layout</h2>
        <h3>Box Model Layout</h3>
        &#42; &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 0px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 0px;<br />
        &#125;<br />
        <br />
        h1& #123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font: bold 20px Tahoma;<br />
        &#125;<br />
        <br />
        h2& #123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font: bold 14px Tahoma;<br />
        &#125;<br />
        <br />
        header, section, footer, aside, nav, article, hgroup &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:block;<br />
        &#125;<br />
        <br />
        body &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:left;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid black;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 1000px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 20px auto ;<br />
        &#125;<br />
        <br />
        header &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: wheat;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid black;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 20px;<br />
        &#125;<br />
        <br />
        nav &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: grey;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: black;<br />
        &#125;<br />
        <br />
        nav a &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:inline-block;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding:5px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font: bold 14px Tahoma;<br />
        &#125;<br />
        <br />
        article &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float:left;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px;<br />
        &#125;<br />
        <br />
        #rightAside  &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float:right;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 30px;<br />
        &#125;<br />
        <br />
        aside a &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 100px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:block;<br />
        &#125;<br />
        <br />
        footer &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear: both;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:center;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 20px;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-top: 2px solid green;<br />
        &#125;<br /><br />

        table, th, td &#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid black;<br />
        &#125;<br />

        tr:nth-child(2n)&#123;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightgray;<br />
        &#125;
        <br />
      </div>
    );
  }
}

export default Layout;
