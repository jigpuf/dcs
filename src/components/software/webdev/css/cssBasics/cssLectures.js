import React from 'react'

const CSSLectures = () =>{
    return(
        <div>
            <h1>CSS Lectures</h1>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week01/' target='_blank'>Week 1</a></h2>
                <h3>File and folder naming conventions</h3>
                    <li>should be lower case</li>
                    <li>No spaces in names use dashes instead</li>
                    <li>No special characters</li>
                    <li>index.html, images folder, styles folder, scripts folder</li>
                    <li>Use relative paths, ../ goes up a folder, /goes down a folder</li>
                    <li>short meaningful names</li>
                <h3>Intro to HTML</h3>
                    <li>Front end languages are HTML, and CSS</li>
                    <li>PHP and Python are back-end languages</li>
                    <li>When a request is made it goes to the DNS server that provides an address for the browser</li>
                    <li>Front end is processed on the client side, back end is processed by the server.</li>
                <h3>Working with images</h3>
                    <li>GIF small supports transparency</li>
                    <li>PNG all transpareny</li>
                    <li>SVG vector does not degrade with zoom</li>
                    <li>JPG supports compression</li>
                    <li>To optimize, crop to critical information</li>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week02/' target='_blank'>Week 2</a></h2>
            <h3>Color Theory</h3>
            <li>Hue-Color</li>
            <li>Saturation-Intensity, suddle or vibrant</li>
            <li>Value-More black or white</li>
            <li>Monochromatic- 1 hue and changes in sautration and value</li>
            <li>Analagous- uses colors next to each other on the wheel</li>
            <li>Complimentary colors are oppsite on wheel</li>
            <li>Split complimentary- colors are next to the opposite on the color wheel gives more options but same contrast</li>
            <li>Triadic- three colors evenly spaced, be careful with this one</li>
            <li>Tetratic, more than one complimentary colors</li>
            <li>If colors are too busy together, adjust contrast or saturation</li>
            <li>Bright colors- fun or modern</li>
            <h3>Typography</h3>
            <li>Sarif fonts- little strokes that look traditional</li>
            <li>San Sarif- easier to read, more modern</li>
            <li>Display- Decorative, titles, headers</li>
            <li>bad- Comic sans, jokerman, kristen itc, papyrus, curlz, brush script, hobo</li>
            <li>1 or 2 per project</li>
            <li>Hierarchy- guides eye to most important things using emphasis, larger, bolder etc.</li>
            <li>Leading- line spacing.  make it comfortable to read</li>
            <li>Tracking- character spacing</li>
            <li>Kerning- space between specific characters</li>
            <li>@import to make web based font</li>
            <a href='https://byui-cit.github.io/learning-modules/modules/css/css-fonts/prepare1/' target='_blank'>Getting fonts</a>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week03/' target='_blank'>Week 3</a></h2>
                <h3>Comments</h3>
                /*  comments in css there is only one kind   */ 
                <h3>Selectors</h3>
                    <li>Universal *</li>
                    <li>type eg. h1</li>
                    <li>class eg. .selected</li>
                    <li>id eg. #this-one</li>

                <h3>Layout:Float</h3>
                    <li>float:left;    makes it stay on the left and text goes around it</li>
                    <li>float:right;   same thing but on the right</li>
                <h3>Layout:Position</h3>
                <h3></h3>

            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week04/' target='_blank'>Week 4</a></h2>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week05/' target='_blank'>Week 5</a></h2>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week06/' target='_blank'>Week 6</a></h2>
            <h2><a href='https://byui-cse.github.io/wdd130-ww-course/week07/' target='_blank'>Week 7</a></h2>
        </div>
    )
}

export default CSSLectures;