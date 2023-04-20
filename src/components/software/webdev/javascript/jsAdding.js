import React from 'react';
import ButtonMaker from '../../../../utilities/buttonMaker.js';
import Placeholder from '../../../../utilities/placeholder.js';

const JSAdding = () =>{

    return(
        <div>
            <h2>Script Tag</h2>
                <ins><strong>Internal</strong></ins><br />
                &lt;script&gt;<br />
                Javascript...<br />
            <h2>External File</h2>
              <ins><strong>External</strong></ins><br />
                &lt;script src= "filePath"&gt;&lt;/script&gt;<br />
                &lt;/script&gt;<br />
            <h2>Libraries</h2>
            <h2>Modules</h2>

        </div>
    );
    }

export default JSAdding;