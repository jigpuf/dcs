import React from 'react';

const HtmlLectures = () =>{
    const boston = [
        {name:'HTML5 - 1 - Introduction(done)', url:'https://www.youtube.com/watch?v=Mp0f0zTPLec&list=PL081AC329706B2953'},
        {name:'HTML5 - 2 - Creating a Basic Template(done)', url:'https://www.youtube.com/watch?v=qseNjA-73Fw&list=PL081AC329706B2953&index=2'},
        {name:'HTML5 - 3 - Setting up the body(done)', url:'https://www.youtube.com/watch?v=eDR7zpVfX_4&list=PL081AC329706B2953&index=3'},
        {name:'HTML5 - 4 - Adding the Meat!(done)', url:'https://www.youtube.com/watch?v=go5U9wfM9h4&list=PL081AC329706B2953&index=4'},
        {name:'HTML5 - 5 - Attribute Selectors(done)', url:'https://www.youtube.com/watch?v=a5KD47HDRho&list=PL081AC329706B2953&index=5'},
        {name:'HTML5 - 6 - Introduction to pseudo-classes(done)', url:'https://www.youtube.com/watch?v=0pb81VdSO_E&list=PL081AC329706B2953&index=6'},
        {name:'HTML5 - 7 - negation pseudo-class(done)', url:'https://www.youtube.com/watch?v=JaLebQ-QDVo&list=PL081AC329706B2953&index=7'},
        {name:'HTML5 - 8 - Sweet New CSS3 Selectors(done)', url:'https://www.youtube.com/watch?v=tIznbrsfQZQ&list=PL081AC329706B2953&index=8'},
        {name:'HTML5 - 9 - Laying Out the Website(done)', url:'https://www.youtube.com/watch?v=Q7eoOSZ7JdY&list=PL081AC329706B2953&index=9'},
        {name:'HTML5 - 10 - Starting the Styling(done)', url:'https://www.youtube.com/watch?v=P71U-doyzNg&list=PL081AC329706B2953&index=10'},
        {name:'HTML5 - 11 - Styling the Navigation Menu(done)', url:'https://www.youtube.com/watch?v=8uTNq7fs5-s&list=PL081AC329706B2953&index=11'},
        {name:'HTML5 - 12 - Making Everything Pretty(done)', url:'https://www.youtube.com/watch?v=yNtIO4X6cag&list=PL081AC329706B2953&index=12'},
        {name:'HTML5 - 13 - Finishing the Layout(done)', url:'https://www.youtube.com/watch?v=tzAEGnBNAn0&list=PL081AC329706B2953&index=13'},
        {name:'HTML5 - 14 - Flexible Box Model', url:'https://www.youtube.com/watch?v=xgYmccJ61eA&list=PL081AC329706B2953&index=14'},
        {name:'HTML5 - 15 - Styling the Header and Navigation', url:'https://www.youtube.com/watch?v=bi7ccKky8JU&list=PL081AC329706B2953&index=15'},
        {name:'', url:''},

    ]
    const renderBoston = boston.map(item=>{
        return(
            <div>
                <a href={item.url} target='_blank'>{item.name}</a>
            </div>
        )
    })
    return(
        <div>
            <h2>Lectures</h2>
            <h3>New Boston</h3>
            {renderBoston}<br/>
            <a href='https://www.youtube.com/watch?v=F1uzS6PAjuc&list=PL081AC329706B2953&index=16' target='_blank'
            >HTML5 - 16 - Finishing the Flexible Box Model Layout</a><br />
            <a href='https://www.youtube.com/watch?v=iTEgQP87IhQ&list=PL081AC329706B2953&index=17' target='_blank'
            >HTML5 - 17 - Reversing the Box Order</a><br />
            <a href='https://www.youtube.com/watch?v=6L2DQkf0oR8&list=PL081AC329706B2953&index=18' target='_blank'
            >HTML5 - 18 - More Flexible Box Model Tricks!</a><br />
            <a href='https://www.youtube.com/watch?v=s_4zvAMU4BY&list=PL081AC329706B2953&index=19' target='_blank'
            >HTML5 - 19 - Finishing up the Flexible Box Model</a><br />
            <a href='https://www.youtube.com/watch?v=fCU641pu6ys&list=PL081AC329706B2953&index=20' target='_blank'
            >HTML5 - 20 - Rounded Corners and Shadows!</a><br />
            <a href='https://www.youtube.com/watch?v=ritFiWDm08g&list=PL081AC329706B2953&index=21' target='_blank'
            >HTML5 - 21 - Text Shadows, Gradients, and Alpha</a><br />
            <a href='https://www.youtube.com/watch?v=jRWGqBUNk_c&list=PL081AC329706B2953&index=22' target='_blank'
            >HTML5 - 22 - Crazy Transformations</a><br />
            <a href='https://www.youtube.com/watch?v=Ie1h8KgoDtg&list=PL081AC329706B2953&index=23' target='_blank'
            >HTML5 - 23 - Animating with Transitions</a><br />
            <a href='https://www.youtube.com/watch?v=WCsuxaqpQP8&list=PL081AC329706B2953&index=24' target='_blank'
            >HTML5 - 24 - Making Awesome Rollover Buttons</a><br />
            <a href='https://www.youtube.com/watch?v=L-FM97j7MyY&list=PL081AC329706B2953&index=25' target='_blank'
            >HTML5 - 25 - Working with JavaScript in HTML5</a><br />
            <a href='https://www.youtube.com/watch?v=f15cVPPbjMI&list=PL081AC329706B2953&index=26' target='_blank'
            >HTML5 - 26 - querySelectorAll</a><br />
            <a href='https://www.youtube.com/watch?v=Gas8f7dJfWc&list=PL081AC329706B2953&index=27' target='_blank'
            >HTML5 - 27 - Playing Video on Your Website</a><br />
            <a href='https://www.youtube.com/watch?v=_JbFcQF5OR4&list=PL081AC329706B2953&index=28' target='_blank'
            >HTML5 - 28 - How to Customize Your Video Player</a><br />
            <a href='https://www.youtube.com/watch?v=p1bTTHVhlfM&list=PL081AC329706B2953&index=29' target='_blank'
            >HTML5 - 29 - Making Your Skin Look Pretty!</a><br />
            <a href='https://www.youtube.com/watch?v=d8PRA5kqL9s&list=PL081AC329706B2953&index=30' target='_blank'
            >HTML5 - 30 - Styling the Default and Progress Bars</a><br />
            <a href='https://www.youtube.com/watch?v=M9dUfcmpuJY&list=PL081AC329706B2953&index=31' target='_blank'
            >HTML5 - 31 - Programming the Video Player</a><br />
            <a href='https://www.youtube.com/watch?v=wX0CdtO_1T0&list=PL081AC329706B2953&index=32' target='_blank'
            >HTML5 - 32 - Playing and Pausing the Movie</a><br />
            <a href='https://www.youtube.com/watch?v=6Ag9Gnv0o_8&list=PL081AC329706B2953&index=33' target='_blank'
            >HTML5 - 33 - How to Update the Progress Bar</a><br />
            <a href='https://www.youtube.com/watch?v=FtvGVpSg4wA&list=PL081AC329706B2953&index=34' target='_blank'
            >HTML5 - 34 - Finishing Up the Video Player!</a><br />
            <a href='https://www.youtube.com/watch?v=wyaEthRt330&list=PL081AC329706B2953&index=35' target='_blank'
            >HTML5 - 35 - The Canvas Element</a><br />
            <a href='https://www.youtube.com/watch?v=t51omnjifl0&list=PL081AC329706B2953&index=36' target='_blank'
            >HTML5 - 36 - Drawing Shapes on the Canvas</a><br />
            <a href='https://www.youtube.com/watch?v=FWB7SF9TM-A&list=PL081AC329706B2953&index=37' target='_blank'
            >HTML5 - 37 - Gradients on the Canvas</a><br />
            <a href='https://www.youtube.com/watch?v=1RdNGbfT_ok&list=PL081AC329706B2953&index=38' target='_blank'
            >HTML5 - 38 - Making Sweet Custom Shapes!</a><br />
            <a href='https://www.youtube.com/watch?v=Pa9ASGA3m8U&list=PL081AC329706B2953&index=39' target='_blank'
            >HTML5 - 39 - Working with Text and Shadows</a><br />
            <a href='https://www.youtube.com/watch?v=vU_wNPd3R_Q&list=PL081AC329706B2953&index=40' target='_blank'
            >HTML5 - 40 - Transformations</a><br />
            <a href='https://www.youtube.com/watch?v=mqP8aWI758Q&list=PL081AC329706B2953&index=41' target='_blank'
            >HTML5 - 41 - Saving and Restoring the Canvas</a><br />
            <a href='https://www.youtube.com/watch?v=HM112U8pOWk&list=PL081AC329706B2953&index=42' target='_blank'
            >HTML5 - 42 - Images on the Canvas</a><br />
            <a href='https://www.youtube.com/watch?v=4nRg5ljNpsc&list=PL081AC329706B2953&index=43' target='_blank'
            >HTML5 - 43 - Animation for Games!</a><br />
            <a href='https://www.youtube.com/watch?v=Kfi3uRJS6hA&list=PL081AC329706B2953&index=44' target='_blank'
            >HTML5 - 44 - Drag and Drop</a><br />
            <a href='https://www.youtube.com/watch?v=-2qhd7uJkn8&list=PL081AC329706B2953&index=45' target='_blank'
            >HTML5 - 45 - Working on the Drag and Drop Program</a><br />
            <a href='https://www.youtube.com/watch?v=SWR5ojeSmvM&list=PL081AC329706B2953&index=46' target='_blank'
            >HTML5 - 46 - Finishing the Drag and Drop Program!</a><br />
            <a href='https://www.youtube.com/watch?v=e6t-8EoT2HM&list=PL081AC329706B2953&index=47' target='_blank'
            >HTML5 - 47 - Spice it Up</a><br />
            <a href='https://www.youtube.com/watch?v=PN0RgFnRxAQ&list=PL081AC329706B2953&index=48' target='_blank'
            >HTML5 - 48 - Web Storage API</a><br />
            <a href='https://www.youtube.com/watch?v=Xq9KKJfbzg4&list=PL081AC329706B2953&index=49' target='_blank'
            >HTML5 - 49 - Making the Web Storage Program Pretty</a><br />
            <a href='https://www.youtube.com/watch?v=AUOe6E7GgP8&list=PL081AC329706B2953&index=50' target='_blank'
            >HTML5 - 50 - Saving Data</a><br />
            <a href='https://www.youtube.com/watch?v=1pz9zExrj5o&list=PL081AC329706B2953&index=51' target='_blank'
            >HTML5 - 51 - Retrieving and Displaying Stored Data</a><br />
            <a href='https://www.youtube.com/watch?v=zG-mivHf1_I&list=PL081AC329706B2953&index=52' target='_blank'
            >HTML5 - 52 - Making Something Useful</a><br />
            <a href='https://www.youtube.com/watch?v=Kn_AIiV6Cp0&list=PL081AC329706B2953&index=53' target='_blank'
            >HTML5 - 53 - Saving Data While Visiting Other Websites</a><br /><hr />
          <h3>Khan Academy</h3>
            <a href='https://www.youtube.com/watch?v=ItZN6o0ylao&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr' target='_blank'
            >HTML basics(done)</a><br />
            <a href='https://www.youtube.com/watch?v=r2qd-MKHhgs&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=2' target='_blank'
            >HTML: Text emphasis(done)</a><br />
            <a href='https://www.youtube.com/watch?v=6fmob-VeAMo&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=3' target='_blank'
            >HTML: Lists(done)</a><br />
            <a href='https://www.youtube.com/watch?v=LyINBQFpL0o&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=4' target='_blank'
            >HTML: Images(done)</a><br />
            <a href='https://www.youtube.com/watch?v=xiGguPT09sQ&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=5' target='_blank'
            >CSS: Selecting by class(done)</a><br />
            <a href='https://www.youtube.com/watch?v=XN4AxR78Yc0&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=6' target='_blank'
            >CSS: Selecting by id(done)</a><br />
            <a href='https://www.youtube.com/watch?v=prG3mvho3tU&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=7' target='_blank'
            >HTML links(done)</a><br />
            <a href='https://www.youtube.com/watch?v=q3kVcOTWsC0&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=8' target='_blank'
            >HTML comments(done)</a><br />
            <a href='https://www.youtube.com/watch?v=UL3Gvq2zOLs&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=9' target='_blank'
            >HTML tables(done)</a><br />
            <a href='https://www.youtube.com/watch?v=c62_yTwex9E&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=10' target='_blank'
            >HTML internal links(done)</a><br />
            <a href='https://www.youtube.com/watch?v=LwX_v2jGmYU&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=11' target='_blank'
            >CSS specificity(done)</a><br />
            <a href='https://www.youtube.com/watch?v=a3mvlBdcELc&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=13' target='_blank'
            >Grouping CSS selectors(done)</a><br />
            <a href='https://www.youtube.com/watch?v=6UYA4zow-Ps&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=14' target='_blank'
            >CSS dynamic pseudo-classes(done)</a><br />
            <a href='https://www.youtube.com/watch?v=V0-KK15Bc_g&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=15CSS position' target='_blank'
            >CSS position(done)</a><br />
            <a href='https://www.youtube.com/watch?v=jBd9-jw-kTc&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=16' target='_blank'
            >CSS floating elements(done)</a><br />
            <a href='https://www.youtube.com/watch?v=PZYwZxDcs78&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=17' target='_blank'
            >Using multiple CSS classes(done)</a><br />
            <a href='https://www.youtube.com/watch?v=go9d5Ywqx2k&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=18' target='_blank'
            >Combining CSS class and element selectors(done)</a><br />
            <a href='https://www.youtube.com/watch?v=PhyF-HdbV8M&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=19' target='_blank'
            >CSS inheritance(done)</a><br />
            <a href='https://www.youtube.com/watch?v=KGGF6WZdsns&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=20' target='_blank'
            >CSS grouping elements(done)</a><br />
            <a href='https://www.youtube.com/watch?v=Xhta9NIqG0o&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=21' target='_blank'
            >CSS width, height, and overflow(done)</a><br />
            <a href='https://www.youtube.com/watch?v=g3jMAW7k7TE&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=22' target='_blank'
            >CSS box model(done)</a><br />
            <a href='https://www.youtube.com/watch?v=pSyjy3HctSM&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=23' target='_blank'
            >More CSS Text Properties(done)</a><br />
            <a href='https://www.youtube.com/watch?v=Jm_nbl55rWE&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=24' target='_blank'
            >CSS font styles and shorthand(done)</a><br />
            <a href='https://www.youtube.com/watch?v=gc1O5v1Zhyo&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=25' target='_blank'
            >CSS font-size property(done)</a><br />
            <a href='https://www.youtube.com/watch?v=6kylHlh-1k4&list=PLC51FJvpvRvyK3n1d-Kth7ldHO__Tpygr&index=26' target='_blank'
            >CSS font-family property(done)</a><br />
            <hr />
          <h3>EJ Media</h3>
            <a href='https://www.youtube.com/watch?v=Sa6lzOe-e70&list=PLr6-GrHUlVf8JluGhfyaOSN8bugLtDXhK&index=2&t=0s' target='_blank'
            >HTML5 Tutorial for Beginners - 01 - Introduction</a><br /><hr />
          <h3>Learn Code Academy</h3>
            <a href='https://www.youtube.com/watch?v=gQojMIhELvM&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc&index=2&t=0s' target='_blank'
            >Web Development Tutorial For Beginners</a><br /><hr />
          <h3>Programming Knowledge</h3>
            <a href='https://www.youtube.com/watch?v=g3L2jUmnuNA&list=PLS1QulWo1RIbU9SCKLXBou3-p6LZye5L_' target='_blank'
            >HTML5 Tutorial For Beginners 1 # Introduction</a><br /><hr />
          <h3>Net Ninja</h3>
            <a href='https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc' target='_blank'
            >HTML Tutorial for Beginners 01 - HTML Introduction</a><br /><hr />
          <h3>Tutor 4 you</h3>
            <a href='https://www.youtube.com/watch?v=9gTw2EDkaDQ&list=PLzmyR17f55-J7oZew4QxQ7cfw7d3__ZZs&index=2&t=0s' target='_blank'
            >HTML5 Tutorial For Beginners - part 1 of 6</a><br /><hr />
        </div>
    );
    }

export default HtmlLectures;