import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Setup = () =>{
    const links = [
        {subject:'Top Level', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023'},
        {subject:'Top Level', section:'competancy', url:'https://byui-cse.github.io/cse210-course-competency/'},
        {subject:'Wk 1: Intro' , section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/index.html'},
        {subject:'Wk 2: Abstraction', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/index.html'},
        {subject:'Wk 3: Encapsulation', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/index.html'},
        {subject:'Wk 4: Inheritance', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/index.html'},
        {subject:'Week 5: Polymorphism', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/index.html'},
        {subject:'Week 6: Final Project', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/index.html'},
        {subject:'Week 7: Conclusion', section:'course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week07/index.html'},
    ]
    const renderLinks = links.map(item=>{
        return(
            <tr>
                <td><a href={item.url} target='_blank'>{item.subject} {item.section}</a></td>
            </tr>
        )
    })
    return(
        <div>
            <h2>C# Setup CSE 210</h2>
        <hr></hr>
        <table>
            <tr>
                <th>Subject</th>
            </tr>
            {renderLinks}
        </table>
        </div>
    );
    }

export default Setup;