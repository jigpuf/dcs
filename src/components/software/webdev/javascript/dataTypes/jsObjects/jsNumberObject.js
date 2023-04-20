import React from 'react';

const num = 432.12345;
const numString = '432.12345';

const NumMethods=[
    {name:'isInteger()', syntax:'Number.isInteger(num)', action:`Checks if number is an integer, returns ${typeof(Number.isInteger(num))}`, returned:`${Number.isInteger(num)}`,  },
    {name:'toFixed()', syntax:'num.toFixed(3)', action:`sets number of decimal places, returns ${typeof(num.toFixed(3))}`, returned:`${num.toFixed(3)}`,  },
    {name:'toExponential()', syntax:'num.toExponential(2)', action:`Changes to scientific notation, returns ${typeof(num.toExponential(2))}`, returned:`${num.toExponential(2)}`,  },
    {name:'toPrecision()', syntax:'num.toPrecision(4)', action:`Sets number of digits shown, returns ${typeof(num.toPrecision(4))}`, returned:`${num.toPrecision(4)}`,  },
    {name:'toString()', syntax:'num.toString()', action:`Changes a number to a string,returns ${typeof(num.toString())}`, returned:`${num.toString()}`,  },
    {name:'Number()', syntax:'Number(numString)', action:`Converts a string to a number and returns a ${typeof(Number(numString))}`, returned:`${Number(numString)}`,  },
    {name:'Number.parseFloat()', syntax:'num.parseFloat()', action:`Gives number in ${typeof(Number.parseFloat(num))}`, returned:`${Number.parseFloat(num)}`,  },
    {name:'Number.parsInt()', syntax:'num.parseInt()', action:`Returns number as a ${typeof(Number.parseInt(num))}`, returned:`${Number.parseInt(num)}`,  },
]

const numbers=[
    {number:'Standard', output:'456.33'},
    {number:'Exponential', output:'4.5633e2'},
]

const num1 = 5.86;
const num2 = 3;
const MathMethods=[
    {name:'Math.PI', syntax:'Math.PI', action:`produces the value of PI returns ${typeof(Math.PI)} `, returned:`${Math.PI}`,  },  
    {name:'Math.cbrt()', syntax:'Math.cbrt(num1)', action:`produces the value of PI returns ${typeof(Math.cbrt(num1))} `, returned:`${Math.cbrt(num1)}`,  },
    {name:'Math.ceil()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.floor()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.pow()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.random()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.round()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.sqrt()', syntax:'#', action:`#`, returned:`#`,  },
    {name:'Math.trunc()', syntax:'#', action:`#`, returned:`#`,  },

]
const renderNumMethods = NumMethods.map(item => {
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.syntax}</td>
            <td>{item.action}</td>
            <td>{item.returned}</td>
        </tr>
    )
})
const renderNumbers = numbers.map(item => {
    return(
        <tr>
            <td>{item.number}</td>
            <td>{item.output}</td>
        </tr>
    )
})

const RenderMathMethods = MathMethods.map(item =>{
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.syntax}</td>
            <td>{item.action}</td>
            <td>{item.returned}</td>
        </tr>
    )
})

const JSNumberObject = () => {
    return(
        <div>
            <h1>JS Numbers</h1>
                Numbers can be written in two different ways:
            
            {renderNumbers}
                All numbers in Javascript can access the global Number Method and the Math Method.  While the primitive number data type goes into the method<br/>
                !!!!A string is the returned value!!!<br/><br/>
            <hr/>
            <h3>Number Methods:</h3>
                <p>const num = 432.12345;</p>
                <p>const numString = '432.12345';</p>
            <table>
                <tr><th>Number Method</th><th>Syntax</th><th>What it does</th><th>Output</th></tr>
                {renderNumMethods}
            </table>
           
            <h3>Math Methods:</h3>
                const num1 = 5.86; <br/><br/>
                const num2 =3;<br/><br/>
            <table>
            <tr><th>Number Method</th><th>Syntax</th><th>What it does</th><th>Output</th></tr>
                {RenderMathMethods}
            </table>
            <table>
            <tr><th>Operator</th><th>Operator Symbol</th><th>Example</th><th>Output</th></tr>
            <tr><td>Add</td><td>+</td><td>5+5</td><td>10</td></tr>
            <tr><td>Subtract</td><td>-</td><td>5-5</td><td>0</td></tr>
            <tr><td>Multiply</td><td>*</td><td>5*5</td><td>25</td></tr>
            <tr><td>Divide</td><td>/</td><td>6/5</td><td>1.2</td></tr>
            <tr><td>Power</td><td>**</td><td>5**5</td><td>125</td></tr>
            <tr><td>Remainder</td><td>%</td><td>11%5</td><td>1</td></tr>
            <tr><td>Increment Up</td><td>++</td><td>let Variable = 4; Variable++;</td><td>5</td></tr>
            <tr><td>Increment Down</td><td>--</td><td>let Variable = 4; Variable--;</td><td>3</td></tr>
            <tr><td>Set with Operator</td><td>+= -= *= /= **= %=</td><td>let Variable = 4; Variable *= 5;</td><td>20</td></tr>
          </table>
          NAN means Not a number when program is expecting a number and gets
          another data type.<br />
          let likes = 'me' + 'hello';<br />
          NAN<br />
            <hr/>

        </div>
    );
}
export default JSNumberObject;