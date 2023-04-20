import React from 'react';

const HtmlFileStructure = () =>{
    return(
        <div>
            <h2>File Structure</h2>
            <ul>
                <li>index.html</li>
                <li>index.css</li>
                <li>index.js</li>
                <li>styles</li>
                    <ol>
                        <li>specific style sheets</li>
                    </ol>
                <li>scripts</li>
                    <ol>
                        <li>specific scripts</li>
                    </ol>
                <li>assets</li>
                    <ol>
                        <li>videos</li>
                        <li>pictures</li>
                        <li>sounds</li>
                        <li>PDF</li>
                    </ol>
            </ul>
        </div>
    );
    }

export default HtmlFileStructure;