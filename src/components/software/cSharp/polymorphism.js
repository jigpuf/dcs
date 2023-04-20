import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Polymorphism = () =>{
    const linksHead = ['Site', 'Purpose']
    const links =[
        {name:'Week 05 - Polymorphism', purpose:'Top Level', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/index.html'},
        {name:'Polymorphism: The Fourth Principle', purpose:'The old Course', url:'https://byui-cse.github.io/cse210-course-competency/polymorphism/materials/the-fourth-principle.html'},
        {name:'Polymorphism Learning Activity', purpose:'Learning Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/prepare.html'},
        {name:'Learning Activity Sample Solution', purpose:'Sample Solution', url:'https://github.com/byui-cse/cse210-ww-student-sample-solutions/tree/main/prepare/Learning05'},
        {name:'Polymorphism - Design Activity', purpose:'Design Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/design.html'},
        {name:'Week 05 Develop: Eternal Quest Program', purpose:'Program requirements', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/develop.html'},
        {name:'Polymorphism - Articulate', purpose:'Articulate', url:'https://byui-cse.github.io/cse210-ww-course-2023/week05/articulate.html'},
    ]
    return(
        <div>
            <h2>C# Week:5 Polymorphism</h2>
    <hr></hr>
    <a href ='https://byui-cse.github.io/cse210-course-competency/polymorphism/materials/the-fourth-principle.html' target='_blank'>BYU cheatsheet on Polymorphism</a>
        
        <p>Polymorphism is the ability to take on many forms. More specifically, it is the ability of a child class to change the behavior in a method inherited from a parent class. The method name stays the same but the specific code varies. Consider the following example.</p>
        
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

export default Polymorphism;