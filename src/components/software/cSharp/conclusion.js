import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Conclusion = () =>{
    const linksHead = ['Site', 'Purpose']
    const links =[
        {name:'Wk 7 Conclusio', purpose:'Top Level', url:'https://byui-cse.github.io/cse210-ww-course-2023/week07/index.html'},
        {name:'Week 07 Team Activity: Final Project Demo', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week07/project-demo.html'},
        {name:'Week 07 Develop: Final Project', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week07/develop.html'},
        {name:'Final Project Plan', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/project-plan.html'},
        {name:'Programming with Classes - Articulate', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week07/articulate.html'}
    ]
    return(
        <div>
            <h2>C# Week:7 Conclusion</h2>
    <hr></hr>
    <h3>Links</h3>
    <TableMaker head={linksHead} array={links} tableType='links' />
    <h3>Videos</h3>
    <h3>Syntax</h3>
    <h3>Prepare</h3>
    <h3>Design</h3>
    <h3>Prove</h3>
    <h3>Ponder</h3>

        </div>
    );
    }

export default Conclusion;