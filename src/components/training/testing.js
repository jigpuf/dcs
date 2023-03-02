import React from 'react';

function shuffle(array){
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
}

return array;
}

class Testing extends React.Component {
  state = {
    voltage: undefined,
    resistance: undefined,
    answerList: [],
  }


  createNumbers = () => {
    //set up value
    const voltage = Math.ceil(Math.random()*20);
    const resistance = Math.ceil(Math.random()*20);
    //set up answers
    const current = (voltage / resistance).toFixed(2);
    const power = (voltage * current).toFixed(2);
    const invCurrent = (resistance / voltage).toFixed(2);
    const invPower = (1 / power).toFixed(2);
    //scramble scramble
    const answerList = shuffle([current, power, invCurrent, invPower]);
    this.setState({answerList,voltage,resistance})
  }

  render() {
    const {voltage,resistance,answerList} = this.state;
    const answerOptions = answerList.map((a,index)=>{
      return(
        <div>
          <button class='bubblebutton'>answer</button>{a}
        </div>
      )
    })
    return(
      <div>
        <h1>Electric Math Test</h1>
        <img alt="sumfin cool" src="https://d2vlcm61l7u1fs.cloudfront.net/media/d31/d31a7bc3-67d9-407b-96ed-cdc8bb2ca7b9/phpxEkYUI.png" />
        <button onClick={this.createNumbers} >Start Test</button>
        <div id="setupOutput">Voltage = {voltage}
        <br />
        Resistance = {resistance}</div>
        <div id="answers">
          <div>What is the current?</div>
          {answerOptions}
        </div>
        <div id="score"></div>
      </div>
    )
  }
}

export default Testing;
