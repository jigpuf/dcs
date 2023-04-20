import React from 'react';

const JSXFileStructure = () =>{

    return(
        <div>
            <h2>JSX/React File Structure</h2>
            <ul>
                <li>node_modules</li>
                    <dd>These make things run. Don't touch them</dd>
                <li>public</li>
                    <ul>
                        <li>Any static files</li>
                            <dd>Pictures, json, text</dd>
                        <li>index.html</li>
                            <dd>This is the only HTML file in the program.  This is where the root div lives that the entire program feeds into.  It is otherwise  a standard HTML file.  Since react is for making single page Applictaions, this is the only page that exists and everything else is placed here dynamically</dd>
                    </ul>
                <li>src</li>
                    <ul>
                        <li>components</li>
                            <dd>This is where you hold any additional files you make to run your program</dd>
                        <li>App.css</li>
                            <dd></dd>
                        <li>App.js</li>
                        <li>App.test.js</li>
                        <li>index.css</li>
                        <li>index.js</li>
                        <li>reportWebVitals.js</li>
                        <li>setupTests.js</li>
                    </ul>
                <li>.gitignore</li>
                <li>package-lock.json</li>
                <li>package.json</li>
                <li>README</li>
                <h2>SRC Folder</h2>
        Program lives here
        <h2>Public Folder</h2>
        Contains static files like HTML, images etc.
        <h2>Node Modules</h2>
        Contains all dependencies. Don't need to go here much.
        <h2>Package.json file</h2>
        Project config files. List dependencies needed
        <h2>Package-lock.json file</h2>
        Records version of all dependencies in project
        <h2>Read Me</h2>
        Tells how to run Project
        <h2>GitIgnore </h2>
        These are things not transfered to Git when uploading.
            </ul>
        </div>
    );
    }

export default JSXFileStructure;