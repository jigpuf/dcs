import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Final = () =>{
    const linksHead = ['Site', 'Purpose']
    const links =[
        {name:'Week 06 - Final Project', purpose:'Final Project top level', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/index.html'},
        {name:'Final Project Plan', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/project-plan.html'},
        {name:'Final Project - Design Activity', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/design.html'},
        {name:'Final Project Milestone', purpose:'', url:'https://byui-cse.github.io/cse210-ww-course-2023/week06/project-milestone.html'},
    ]
    return(
        <div>
            <h2>C# Week:6 Final Project</h2>
            <h3>Links</h3>
            <TableMaker head={linksHead} array={links} tableType='links' />
    <h3>Videos</h3>
    <h3>Syntax</h3>
    <h3>Prepare</h3>
    <h3>Design</h3>
    <h3>Prove</h3>
    <h3>Ponder</h3>

    <hr></hr>
        </div>
    );
    }

export default Final;