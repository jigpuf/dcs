import React from 'react';

const apis= [
    {name:'', content:'', url:''}
]
const APIs = () =>{
 
    return(
        <div>
            <h2>APIs</h2>
            <h3>Definition</h3>
            APIs provide a way for different types of software to communicate with eachother. 
            <h3>TYpes</h3>
                <li>Browser APi</li>
                    location, local storage, web worker
                <li>Third Party APIs</li>
                    fetch,await- sends an http request to website.

                    The data will return in a JSON which is a long string that can be converted into an object
                    <h4>Json String</h4>
                    It can come in the form of objects or an array of objects.  If it is a single object, you can use JSON.parse.  The same can be done with arrays
                <div></div>
                    <code>

                    
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
document.getElementById("demo").innerHTML = myArr[0];

                    </code>
                       
                        Some fun
                
        </div>
    );
    }

export default APIs;