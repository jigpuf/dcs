import React, { useState, useEffect }from 'react';

const ResCaps = () =>{
  const [stripeOne, setStripeOne] = useState(null);
  const [stripeTwo, setStripeTwo] = useState(null);
  const [stripeThree, setStripeThree] = useState(null);
  const [stripeFour, setStripeFour] = useState(null);
  const [stripeFive, setStripeFive] = useState(null);
  const [stripeSix, setStripeSix] = useState(null);
  const [stripeNumber, setStripeNumber] = useState(4);
  const [tolerance, setTolerance] = useState(null);
  const [multiplier, setMultiplier] = useState(null);
  const [temp, setTemp] = useState(null);
  const [digitOne, setDigitOne] =useState(0);
  const [digitTwo, setDigitTwo] =useState(null);
  const [digitThree, setDigitThree] =useState(null);

  useEffect(()=>{
    if(stripeFive == null){
      return setStripeNumber(4);
    }
    setStripeNumber(5);
  },[stripeFive])


 //arrays for colors
  const digitColors = [
    {slug:'black' , color:'black', value:0},
    {slug:'brown' , color:'brown', value:1},
    {slug:'red' , color:'red', value:2},
    {slug:'orange' , color:'orange', value:3},
    {slug:'yellow' , color:'yellow', value:4},
    {slug:'green' , color:'green', value:5},
    {slug:'blue' , color:'blue', value:6},
    {slug:'violet' , color:'violet', value:7},
    {slug:'gray' , color:'gray', value:8},
    {slug:'white' , color:'white', value:9},
  ]
  const multiplierColors = [
    {slug:'black' , color:'black', value:1},
    {slug:'brown' , color:'brown', value:10},
    {slug:'red' , color:'red', value:100},
    {slug:'orange' , color:'orange', value:1000},
    {slug:'yellow' , color:'yellow', value:10000},
    {slug:'green' , color:'green', value:100000},
    {slug:'blue' , color:'blue', value:1000000},
    {slug:'violet' , color:'violet', value:10000000},
    {slug:'gray' , color:'gray', value:100000000},
    {slug:'white' , color:'white', value:1000000000},
    {slug:'gold' , color:'gold', value:.1},
    {slug:'silver' , color:'silver', value:.01},
  ]
  const toleranceColors = [
    {slug:'brown' , color:'brown', value:.01},
    {slug:'red' , color:'red', value:.02},
    {slug:'orange' , color:'orange', value:.03},
    {slug:'yellow' , color:'yellow', value:.04},
    {slug:'green' , color:'green', value:.005},
    {slug:'blue' , color:'blue', value:.0025},
    {slug:'violet' , color:'violet', value:.001},
    {slug:'gray' , color:'gray', value:.0005},
    {slug:'gold' , color:'gold', value:.05},
    {slug:'silver' , color:'silver', value:.1},
  ]
  const tempColors = [
    {slug:'black', color:'black', value:250},
    {slug:'brown' , color:'brown', value:100},
    {slug:'red' , color:'red', value:50},
    {slug:'orange' , color:'orange', value:15},
    {slug:'yellow' , color:'yellow', value:25},
    {slug:'green' , color:'green', value:20},
    {slug:'blue' , color:'blue', value:10},
    {slug:'violet' , color:'violet', value:5},
    {slug:'gray' , color:'gray', value:1},
  ]
  // //Derived from colors
  const getTolerance = (color) =>{
    switch(color){
      case 'brown':
        return .01;
      case 'red':
        return .02;
      case 'orange':
        return .03;
      case 'yellow':
        return .04;
      case 'green':
        return .005;
      case 'blue':
        return .025;
      case 'violet':
        return .001;
      case 'gray':
        return .0005;
      case 'gold':
        return .05;
      case 'silver':
        return .1;
    }
  }
  const getMultiplier = (color) =>{
    switch(color){
      case 'black':
        return 1;
      case 'brown':
        return 10;
      case 'red':
        return 100;
      case 'orange':
        return 1000;
      case 'yellow':
        return 10000;
      case 'green':
        return 100000;
      case 'blue':
        return 1000000;
      case 'violet':
        return 10000000;
      case 'gray':
        return 100000000;
      case 'gold':
        return .1;
      case 'silver':
        return .01;
    }
  }

const getTemp = (color) =>{
  switch (color){
    case 'brown':
      return 100;
    case 'red':
      return 50;
    case 'orange':
      return 15;
    case 'yellow':
      return 25;
    case 'blue':
      return 10;
    case 'violet':
      return 5;
  }
}
// stripe values

const setColor = (color,position) =>{
  switch(position){
    case 1:
      return (setStripeOne(color));
    case 2:
      return (setStripeTwo(color));
    case 3:
      return (setStripeThree(color));
    case 4:
      return (setStripeFour(color));
    case 5:
      return (setStripeFive(color));
    case 6:
      return (setStripeSix(color));
  }
}
const getDigit = (color) =>{
  switch(color){
    case 'black':
      return 0;
    case 'brown':
      return 1;
    case 'red':
      return 2;
    case 'orange':
      return 3;
    case 'yellow':
      return 4;
    case 'green':
      return 5;
    case 'blue':
      return 6;
    case 'violet':
      return 7;
    case 'gray':
      return 8;
    case 'white':
      return 9;
  }
}
const applyStripe = (color, position) =>{
   setColor(color, position);
   switch(position){
     case 1:
      setDigitOne(getDigit(color));
      break;
     case 2:
      setDigitTwo(getDigit(color));
      break;
     case 3:
      if(stripeNumber > 4){
        setDigitThree(getDigit(color))
      }
      else{
        setMultiplier(getMultiplier(color))
      };
      break;
    case 4:
      if(stripeNumber > 4){
        setMultiplier(getMultiplier(color))
      }
      else{
        setTolerance(getTolerance(color))
      };
      break;
    case 5:
      setTolerance(getTolerance(color));
    case 6:
      setTemp(getTemp(color));
      break;
    default:
     break;
   }
}
const nominal = (setting) =>{
  let nom;
  if(stripeNumber > 4){
    nom = ((digitOne*100)+(digitTwo*10)+(digitThree))*multiplier;
  }else{
    nom = ((digitOne*10)+(digitTwo))*multiplier;
  }
  switch(setting){
    case 'nom':
      return nom;
    case 'low':
      return (nom * (1-(tolerance)));
    case 'high':
      return (nom * (1+(tolerance)));

  }

}

  return(
    <div>
    <form>
    <label for='stripes'>Number of Stripes:</label>
    <select  name='stripes'>
      <option value='four' >4</option>
      <option value='five' >5</option>
      <option value='six' >6</option>
    </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 1:</label>
      <select name='stripeOneSelect'>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='violet'>Violet</option>
        <option value='gray'>Gray</option>
        <option value='white'>White</option>
      </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 2:</label>
      <select name='stripeOneSelect'>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='violet'>Violet</option>
        <option value='gray'>Gray</option>
        <option value='white'>White</option>
      </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 3:</label>
      <select name='stripeOneSelect'>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='violet'>Violet</option>
        <option value='gray'>Gray</option>
        <option value='white'>White</option>
        <option value='gold'>Gold</option>
        <option value='silver'>Silver</option>
      </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 4:</label>
      <select name='stripeOneSelect'>
        <option value='black'>Black</option>
        <option value='brown'>Brown</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='violet'>Violet</option>
        <option value='gray'>Gray</option>
        <option value='white'>White</option>
        <option value='gold'>Gold</option>
        <option value='silver'>Silver</option>
      </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 5:</label>
      <select name='stripeOneSelect'>
      <option value='clear'>-</option>
      <option value='brown'>Brown</option>
      <option value='red'>Red</option>
      <option value='orange'>Orange</option>
      <option value='yellow'>Yellow</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
      <option value='violet'>Violet</option>
      <option value='gray'>Gray</option>
      <option value='gold'>Gold</option>
      <option value='silver'>Silver</option>
      </select>
    </form>
    <form>
      <label for='stripeOneSelect'>Stripe 6:</label>
      <select name='stripeOneSelect'>
      <option value='clear'>-</option>
      <option value='brown'>Brown</option>
      <option value='red'>Red</option>
      <option value='orange'>Orange</option>
      <option value='yellow'>Yellow</option>
      <option value='blue'>Blue</option>
      <option value='violet'>Violet</option>
      </select>
    </form>

   <h1>Resisters and Caps</h1>
      Stripe 1:

      <form>
       <input type="radio" name="stripeOne" value="black"
       onChange= {() =>applyStripe('black',1)}
       checked= {stripeOne === 'black'}/>Black
       <input type="radio" name="stripeOne" value="brown"
       onChange= {() =>applyStripe('brown',1)}
       checked={stripeOne === 'brown'} />Brown
       <input type="radio" name="stripeOne" value="red"
       onChange= {() =>applyStripe('red',1)}
       checked={stripeOne === 'red'} />Red
       <input type="radio" name="stripeOne" value="orange"
       onChange= {() =>applyStripe('orange',1)}
       checked={stripeOne === 'orange'} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       onChange= {() =>applyStripe('yellow',1)}
       checked={stripeOne === 'yellow'} />Yellow
       <input type="radio" name="stripeOne" value="green"
       onChange= {() =>applyStripe('green',1)}
       checked={stripeOne === 'green'} />Green
       <input type="radio" name="stripeOne" value="blue"
       onChange= {() =>applyStripe('blue',1)}
       checked={stripeOne === 'blue'} />Blue
       <input type="radio" name="stripeOne" value="violet"
       onChange= {() =>applyStripe('violet',1)}
       checked={stripeOne === 'violet'} />Violet
       <input type="radio" name="stripeOne" value="gray"
       onChange= {() =>applyStripe('gray',1)}
       checked={stripeOne === 'gray'} />Gray
       <input type="radio" name="stripeOne" value="white"
       onChange= {() =>applyStripe('white',1)}
       checked={stripeOne === 'white'} />White
      </form>
      Stripe 2:
      <form>
       <input type="radio" name="stripeTwo" value="black"
       onChange= {() =>applyStripe('Black',2)}
       checked= {stripeTwo === 'Black'}/>Black
       <input type="radio" name="stripeTwo" value="brown"
       onChange= {() =>applyStripe('brown',2)}
       checked= {stripeTwo === 'brown'}/>Brown
       <input type="radio" name="stripeTwo" value="red"
       onChange= {() =>applyStripe('red',2)}
       checked= {stripeTwo === 'red'}/>Red
       <input type="radio" name="stripeTwo" value="orange"
       onChange= {() =>applyStripe('orange',2)}
       checked= {stripeTwo === 'orange'}/>Orange
       <input type="radio" name="stripeTwo" value="yellow"
       onChange= {() =>applyStripe('yellow',2)}
       checked= {stripeTwo === 'yellow'}/>Yellow
       <input type="radio" name="stripeTwo" value="green"
       onChange= {() =>applyStripe('green',2)}
       checked= {stripeTwo === 'green'}/>Green
       <input type="radio" name="stripeTwo" value="blue"
       onChange= {() =>applyStripe('blue',2)}
       checked= {stripeTwo === 'blue'}/>Blue
       <input type="radio" name="stripeTwo" value="violet"
       onChange= {() =>applyStripe('violet',2)}
       checked= {stripeTwo === 'violet'}/>Violet
       <input type="radio" name="stripeTwo" value="gray"
       onChange= {() =>applyStripe('gray',2)}
       checked= {stripeTwo === 'gray'}/>Gray
       <input type="radio" name="stripeTwo" value="white"
       onChange= {() =>applyStripe('white',2)}
       checked= {stripeTwo === 'white'}/>White
      </form>
      Stripe 3:
      <form>
       <input type="radio" name="stripeThree" value="black"
       onChange= {() =>applyStripe('black',3)}
       checked= {stripeThree === 'black'}/>Black
       <input type="radio" name="stripeThree" value="brown"
       onChange= {() =>applyStripe('brown',3)}
       checked= {stripeThree === 'brown'}/>Brown
       <input type="radio" name="stripeThree" value="red"
       onChange= {() =>applyStripe('red',3)}
       checked= {stripeThree === 'red'}/>Red
       <input type="radio" name="stripeThree" value="orange"
       onChange= {() =>applyStripe('orange',3)}
       checked= {stripeThree === 'orange'}/>Orange
       <input type="radio" name="stripeThree" value="yellow"
       onChange= {() =>applyStripe('yellow',3)}
       checked= {stripeThree === 'yellow'}/>Yellow
       <input type="radio" name="stripeThree" value="green"
       onChange= {() =>applyStripe('green',3)}
       checked= {stripeThree === 'green'}/>Green
       <input type="radio" name="stripeThree" value="blue"
       onChange= {() =>applyStripe('blue',3)}
       checked= {stripeThree === 'blue'}/>Blue
       <input type="radio" name="stripeThree" value="violet"
       onChange= {() =>applyStripe('violet',3)}
       checked= {stripeThree === 'violet'}/>Violet
       <input type="radio" name="stripeThree" value="gray"
       onChange= {() =>applyStripe('gray',3)}
       checked= {stripeThree === 'gray'}/>Gray
       <input type="radio" name="stripeThree" value="white"
       onChange= {() =>applyStripe('white',3)}
       checked= {stripeThree === 'white'}/>White
       <input type="radio" name="stripeThree" value="Gold"
       onChange= {() =>applyStripe('gold',3)}
       checked= {stripeThree === 'gold'}/>Gold
       <input type="radio" name="stripeThree" value="Silver"
       onChange= {() =>applyStripe('silver',3)}
       checked= {stripeThree === 'silver'}/>Silver
      </form>
      Stripe 4:
      <form>
       <input type="radio" name="stripeFour" value="black"
       onChange= {() =>applyStripe('black',4)}
       checked= {stripeFour === 'black'}/>Black
       <input type="radio" name="stripeFour" value="brown"
       onChange= {() =>applyStripe('brown',4)}
       checked= {stripeFour === 'brown'}/>Brown
       <input type="radio" name="stripeFour" value="red"
       onChange= {() =>applyStripe('red',4)}
       checked= {stripeFour === 'red'}/>Red
       <input type="radio" name="stripeFour" value="orange"
       onChange= {() =>applyStripe('orange',4)}
       checked= {stripeFour === 'orange'}/>Orange
       <input type="radio" name="stripeFour" value="yellow"
       onChange= {() =>applyStripe('yellow',4)}
       checked= {stripeFour === 'yellow'}/>Yellow
       <input type="radio" name="stripeFour" value="green"
       onChange= {() =>applyStripe('green',4)}
       checked= {stripeFour === 'green'}/>Green
       <input type="radio" name="stripeFour" value="blue"
       onChange= {() =>applyStripe('blue',4)}
       checked= {stripeFour === 'blue'}/>Blue
       <input type="radio" name="stripeFour" value="violet"
       onChange= {() =>applyStripe('violet',4)}
       checked= {stripeFour === 'violet'}/>Violet
       <input type="radio" name="stripeFour" value="gray"
       onChange= {() =>applyStripe('gray',4)}
       checked= {stripeFour === 'gray'}/>Gray
       <input type="radio" name="stripeFour" value="white"
       onChange= {() =>applyStripe('white',4)}
       checked= {stripeFour === 'white'}/>White
       <input type="radio" name="stripeFour" value="Gold"
       onChange= {() =>applyStripe('gold',4)}
       checked= {stripeFour === 'gold'}/>Gold
       <input type="radio" name="stripeFour" value="Silver"
       onChange= {() =>applyStripe('silver',4)}
       checked= {stripeFour === 'silver'}/>Silver
      </form>
      Stripe 5:
      <form>
       <input type="radio" name="stripeFive" value="brown"
       onChange= {() =>applyStripe('brown',5)}
       checked= {stripeFive === 'brown'}/>Brown
       <input type="radio" name="stripeFive" value="red"
       onChange= {() =>applyStripe('red',5)}
       checked= {stripeFive === 'red'}/>Red
       <input type="radio" name="stripeFive" value="orange"
       onChange= {() =>applyStripe('orange',5)}
       checked= {stripeFive === 'orange'}/>Orange
       <input type="radio" name="stripeFive" value="yellow"
       onChange= {() =>applyStripe('yellow',5)}
       checked= {stripeFive === 'yellow'}/>Yellow
       <input type="radio" name="stripeFive" value="green"
       onChange= {() =>applyStripe('green',5)}
       checked= {stripeFive === 'green'}/>Green
       <input type="radio" name="stripeFive" value="blue"
       onChange= {() =>applyStripe('blue',5)}
       checked= {stripeFive === 'blue'}/>Blue
       <input type="radio" name="stripeFive" value="violet"
       onChange= {() =>applyStripe('violet',5)}
       checked= {stripeFive === 'violet'}/>Violet
       <input type="radio" name="stripeFive" value="gray"
       onChange= {() =>applyStripe('gray',5)}
       checked= {stripeFive === 'gray'}/>Gray
       <input type="radio" name="stripeFive" value="Gold"
       onChange= {() =>applyStripe('gold',5)}
       checked= {stripeFive === 'gold'}/>Gold
       <input type="radio" name="stripeFive" value="Silver"
       onChange= {() =>applyStripe('silver',5)}
       checked= {stripeFive === 'silver'}/>Silver
       <input type="radio" name="stripeFive" value="clear"
       onChange= {() =>applyStripe(null,5)}
       checked= {stripeFive == null}/>Clear
      </form>
      Stripe 6:
      <form>
       <input type="radio" name="stripeSix" value="brown"
       onChange= {() =>applyStripe('brown',6)}
       checked= {stripeSix === 'brown'}/>Brown
       <input type="radio" name="stripeSix" value="red"
       onChange= {() =>applyStripe('red',6)}
       checked= {stripeSix === 'red'}/>Red
       <input type="radio" name="stripeSix" value="orange"
       onChange= {() =>applyStripe('orange',6)}
       checked= {stripeSix === 'orange'}/>Orange
       <input type="radio" name="stripeSix" value="yellow"
       onChange= {() =>applyStripe('yellow',6)}
       checked= {stripeSix === 'yellow'}/>Yellow
       <input type="radio" name="stripeSix" value="blue"
       onChange= {() =>applyStripe('blue',6)}
       checked= {stripeSix === 'blue'}/>Blue
       <input type="radio" name="stripeSix" value="violet"
       onChange= {() =>applyStripe('violet',6)}
       checked= {stripeSix === 'violet'}/>Violet
      </form>

      <table>
        <tr>
         <th>Stripe 1</th>
         <th>Stripe 2</th>
         <th>Stripe 3</th>
         <th>Stripe 4</th>
         <th>Stripe 5</th>
         <th>Stripe 6</th>
         <th>Stripes</th>
        </tr>
        <tr>
         <td>{stripeOne}</td>
         <td>{stripeTwo}</td>
         <td>{stripeThree}</td>
         <td>{stripeFour}</td>
         <td>{stripeFive}</td>
         <td>{stripeSix}</td>
         <td>{stripeNumber}</td>
        </tr>
        <tr>
         <th>DigitOne</th>
         <th>DigitTwo</th>
         <th>DigitThree</th>
         <th>Multiplier</th>
         <th>Tolerance</th>
         <th>TempCo</th>
        </tr>
        <tr>
         <td>{digitOne}</td>
         <td>{digitTwo}</td>
         <td>{digitThree}</td>
         <td>{multiplier}</td>
         <td>{tolerance}</td>
         <td>{temp}</td>
        </tr>
        <tr>
         <th>Nominal</th>
         <th>Low</th>
         <th>High</th>
        </tr>
        <tr>
         <td>{nominal('nom')}</td>
         <td>{nominal('low')}</td>
         <td>{nominal('high')}</td>
        </tr>

      </table>
      <h3>How to read resisters:</h3>
      <table>
        <tr>
         <th>Stripes</th>
         <th>Stripe 1</th>
         <th>Stripe 2</th>
         <th>Stripe 3</th>
         <th>Stripe 4</th>
         <th>Stripe 5</th>
         <th>Stripe 6</th>
        </tr>
        <tr>
         <td>4 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>N/A</td>
         <td>N/A</td>
        </tr>
        <tr>
         <td>5 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Digit 3</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>N/A</td>
      </tr>
        <tr>
         <td>6 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Digit 3</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>Temp Coeficient</td>
        </tr>
      </table>
      <br/>
      <table>
      <tr>
        <th>Part</th>
        <th>Black</th>
        <th>Brown</th>
        <th>Red</th>
        <th>Orange</th>
        <th>Yellow</th>
        <th>Green</th>
        <th>Blue</th>
        <th>Violet</th>
        <th>Gray</th>
        <th>White</th>
        <th>Gold</th>
        <th>Silver</th>
      </tr>
      <tr>
        <td>Digits</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>---</td>
        <td>---</td>
      </tr>
      <tr>
        <td>Multiplier</td>
        <td>1</td>
        <td>10</td>
        <td>100</td>
        <td>1K</td>
        <td>10K</td>
        <td>100K</td>
        <td>1M</td>
        <td>10M</td>
        <td>100M</td>
        <td>1G</td>
        <td>.1</td>
        <td>.01</td>
      </tr>
      <tr>
        <td>Tolerance</td>
        <td>---</td>
        <td>+/-1%</td>
        <td>+/-2%</td>
        <td>+/-3%</td>
        <td>+/-4%</td>
        <td>+/-.5%</td>
        <td>+/-.25%</td>
        <td>+/-.1%</td>
        <td>+/-.05%</td>
        <td>---</td>
        <td>+/-5%</td>
        <td>+/10%</td>

      </tr>
      <tr>
        <td>Temp Co</td>
        <td>---</td>
        <td>100</td>
        <td>50</td>
        <td>15</td>
        <td>25</td>
        <td>---</td>
        <td>10</td>
        <td>5</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
      </tr>
      </table>
      <br/>


    </div>
  )
}

export default ResCaps;
