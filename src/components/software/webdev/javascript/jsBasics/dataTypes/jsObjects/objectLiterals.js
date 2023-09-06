import React from 'react';

class ObjectLiterals extends React.Component {
  render () {
    return (
      <div>
        <h2>Object Literals</h2>
          <p>Object have properties and Methods</p>
        <h3>Constructor for building objects</h3>
          function User(name,age,email)&#123;<br />
          &nbsp;this.name=name;<br />
          &nbsp;this.age=age;<br />
          &nbsp;this.email=email;<br />
          &nbsp;this.greeting=function()&#123;<br />
          &nbsp;&nbsp;if(this.name == tyson)&#123;<br />
          &nbsp;&nbsp;&nbsp;alert("Not my ear!");<br />
          &nbsp;&nbsp;&#125;<br />
          &nbsp;&nbsp;else&#123;<br />
          &nbsp;&nbsp;&nbsp;alert("Hi!" + this.name);<br />
          &nbsp;&nbsp;&#125;<br />
          &#125;<br />
        <h3>Object Literal Notation, Adding Properties</h3>
          let user = &#123;<br />
            name:'Crystal',<br />
            age: 30,<br />
            email:'sefn@yahoo...',<br />
            sayHi: function(greeting)&#123;code&#125;<br />
            &#125;;<br />
        <h3>Calling/assigning value using key</h3>
          console.log(user.name) //Crystal<br />
          user.age = 35;//changes age to 35<br />
          user.function();<br />
        <h3>Another way to access value</h3>
          console.log(user['name']);<br />
          user['name'] = 'Crab Man';<br />
        <h3>Adding Methods to Objects</h3>
          let user =&#123;<br />
            login: function()&#123;<br />
            code<br />
            &#125;<br />
          &#125;;<br />
        <h3>This Keyword</h3>
          This refers to the object<br />
          this.methodName;<br />
          this.propertyName;<br />
        <h3>Enumerating Properties with for-in loop</h3>
        let prop;<br />
        for(prop in user)&#123;<br />
        &nbsp;&nbsp;alert("user has a " + prop + " property");<br />
        &nbsp;if (prop == "name") &#123;<br />
        &nbsp;&nbsp;alert("this is " + user[prop]);<br />
        &nbsp;&#125;<br />
        &#125;<br />
        <h3>Objects can be passed as an argument</h3>
        Once passed to a parameter, all properties can be accessed in the functions<br />
        This is possible since you are not passing a value but rather a pointer reference<br />
        This means the values of the object can be changed<br />
        <h3>Deleting properties</h3>
        delete user.age;<br />
      </div>
    );
  }
}

export default ObjectLiterals;
/*

  */
