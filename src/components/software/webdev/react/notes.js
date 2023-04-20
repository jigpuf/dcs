import React from 'react';

class Notes extends React.Component {
  render () {
    return (
      <div>
        <h3>Modern React with redux 2019</h3>
          <h4>Section 1</h4>
            <h5>video5:Critical Questions</h5>
              <p>
              1)The purpose of React is to produce content on the browser and
              react to user interactions<br />
              2)Redux isn't absolutly necesary but it makes complicated
              applications easier<br />
              3)A class is a JS class  from ES 2015.<br />
              4)A component is there to create HTML and react to user interactions<br />
              5)JSX is a dialect of Javascript. The HTML looking stuff is how we
              render HTML on the screen<br />
              6)Event handlers are how we handle user interactions<br />
              7)React Library- contains JS code describing what a component is and how they work together<br />
              8)React -Dom Library is what gets the HTML to show up on the DOM.
              Mobile devices and native will work a bit different.  Use the
              right one for the project<br />
              </p>
            <h5>video6:Installing Node.JS</h5>
              <p>
              1)Install Node.JS<br />
              2)Install create-react app<br />
              3)Generate a project<br />
              4)Build a project<br />
              </p>
            <h5>video8:</h5>
              <p>
              File structure of create react app explained
              </p>
            <h5>video9:</h5>
              <p>To start building react app, delete all source files.  Add an
              index.js file.  In this file, put</p>
              <br />
              import React from 'react';<br />
              //creates variable called React puts all info from react library <br />
              //inside of the node modules directory<br />
              import ReactDOM from 'react-dom';<br />
              import './index.css';<br />
              //imports css file<br />
              import App from './App';<br />
              import * as serviceWorker from './serviceWorker';<br />
              //All this is standard.  App component is being called in this components<br />
              //so it needs to be imported.<br />

              ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));<br />
              //This puts the DOM into the root that lives in index.html<br />


              // If you want your app to work offline and load faster, you can change<br />
              // unregister() to register() below. Note this comes with some pitfalls.<br />
              // Learn more about service workers: http://bit.ly/CRA-PWA<br />
              serviceWorker.unregister();<br />

            <h5>video10:</h5>
              <p>
              A react component is a function or a class that produces HTML(using JSX) to
              show the user and handles user feedback with event handlers.
              </p>

          <hr />
          <h4>Section 2</h4>
            <h5>video16:</h5>
              <p>
                There are a few differences between HTML and JSX
              </p>
              <li>Inline styling</li>
              style='property:value;' &rarr; &#123;&#123;property:'value'&#125;&#125;<br />
              Compound Names of properties remove the dash and get Camel Case<br />
              Don't use inline if possible
            <h5>video18:</h5>
              <p>
              class in HTML becomes className
              </p>
            <h5>video19:</h5>
              <p>
              To reference a javascript variable in JSX, use &#123;variableName&#125;<br />
              To call function in JSX, use &#123;functionName&#40;&#41;&#125;
              </p>
            <h5>video20:</h5>
              <p>
              JSX Cannot display an object as Text
              </p>
            <hr />
          <h4>Section 3</h4>
            <h5>video24:</h5>
              <p>
              Components should nest in each other, be reusable, and useful in
              many circumstances.
              </p>
            <h5>video27:</h5>
              <p>
                Shows how to get css files for styling qickly
              </p>
            <h5>video28:</h5>
              <p>

              </p>
            <h5>video29:</h5>
              <p>

              </p>
            <h5>video30:</h5>
              <p>

              </p>
            <h5>video31:</h5>
              <p>

              </p>
            <h5>video32:</h5>
              <p>

              </p>
            <h5>video33:</h5>
              <p>

              </p>
            <h5>video34:</h5>
              <p>

              </p>
            <h5>video35:</h5>
              <p>

              </p>
            <h5>video36:</h5>
              <p>

              </p>
            <h5>video37:</h5>
              <p>

              </p>
            <h5>video38:</h5>
              <p>

              </p>
            <h5>video39:</h5>
              <p>

              </p>
            <h5>video40:</h5>
              <p>

              </p>
            <h5>video41:</h5>
              <p>

              </p>
            <h5>video42:</h5>
              <p>

              </p>
            <h5>video43:</h5>
              <p>

              </p>
            <h5>video44:</h5>
              <p>

              </p>
            <h5>video45:</h5>
              <p>

              </p>
          <hr />
          <h4>Section 4</h4>
          <hr />
          <h4>Section 5</h4>
          <hr />
          <h4>Section 6</h4>
          <hr />
          <h4>Section 7</h4>
          <hr />
          <h4>Section 8</h4>
          <hr />
          <h4>Section 9</h4>
          <hr />
          <h4>Section 10</h4>
          <hr />
          <h4>Section 11</h4>
          <hr />
          <h4>Section 12</h4>
          <hr />
          <h4>Section 13</h4>
          <hr />
          <h4>Section 14</h4>
          <hr />
          <h4>Section 15</h4>
          <hr />
          <h4>Section 16</h4>
          <hr />
          <h4>Section 17</h4>
          <hr />
          <h4>Section 18</h4>
          <hr />
          <h4>Section 19</h4>
          <hr />
          <h4>Section 20</h4>
          <hr />
          <h4>Section 21</h4>
          <hr />
          <h4>Section 22</h4>
          <hr />
          <h4>Section 23</h4>
          <hr />
          <h4>Section 24</h4>
          <hr />
          <h4>Section 25</h4>
          <hr />
          <h4>Section 26</h4>
          <hr />
          <h4>Section 27</h4>
          <hr />
          <h4>Section 28</h4>
          <hr />
          <h4>Section 29</h4>
          <hr />
          <h4>Section 30</h4>
          <hr />
          <h4>Section 31</h4>
          <hr />
          <h4>Section 32</h4>
          <hr />
          <h4>Section 33</h4>
          <hr />
          <h4>Section 34</h4>
          <hr />
      </div>
    );
  }
}

export default Notes;
