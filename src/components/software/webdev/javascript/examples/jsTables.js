import React from 'react';


const JSTables = () =>{
    const table = '<table id="peopleList"></table>';
    const tools = 'const people = [{name:"<strong>Name</strong>", age:"<strong>Age</strong>"},{name:"Jbob", age:"37"}];';
    const renderTools = 'const renderPeople = people.map(item=>`<tr><td>${item.name}</td><td>${item.age}</td></tr>`);';
    const insert = 'document.getElementById("peopleList").innerHTML=renderPeople;';
    return(
        <div>
            <h2>Javascript table examples</h2>
            <h3>Table by string innerHTML</h3>
            //Make the table<br/>
            {table}<br/><br/>
            //make the array of objects<br/>
            {tools}<br/><br/>
            //Use the Array to make a sting templae with tags in it<br/>
            {renderTools}<br/><br/>
            //Put array in the table<br/>
            {insert}<br/><br/>
        </div>
    );
    }

export default JSTables;
