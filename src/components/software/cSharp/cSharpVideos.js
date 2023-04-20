import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const CSharpVideos = () =>{
    const videosHead = ['Video', 'About']
    const videos=[
            {name:'C# Tutorial For Beginners - Learn C# Basics in 1 Hour', purpose:'', url:'https://www.youtube.com/watch?v=gfkTfcpWqAY'},
            {name:'', purpose:'', url:''},
            {name:'', purpose:'', url:''},
            {name:'', purpose:'', url:''},
            {name:'', purpose:'', url:''},
    ]
    return(
        <div>
            <h2>C# Videos</h2>
            <TableMaker head={videosHead} array={videos} tableType='links' />
        </div>
    );
    }

export default CSharpVideos;