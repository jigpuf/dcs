import React from 'react'
import TableMaker from '../../../utilities/tableMaker'

const ArduinoCommands = () =>{
    const commandsHead =['commands', 'syntax', 'example', 'notes']
    const commands=[
        {command:'Digital Write', syntax:'digitalWrite(pin,value);', example:'digitalWrite(13, HIGH);', notes:'Value can be HIGH or LOW',},
        {command:'Analog Write', syntax:'analogWrite(pin,value);', example:'analogWrite(3,200);', notes:'on value, arrduino goes to 255, ESP32?',},
        {command:'Digital Read', syntax:'digitalRead(pin);', example:'digitalRead(3);', notes:'returns as HIGH or LOW',},
        {command:'Analog Read', syntax:'analogRead(pin);', example:'analogRead(A1);', notes:'returns number as int.  Uno is 10 bit(1023). ESP32?',},
        {command:'Pin Mode', syntax:'pinMode(pin, mode);', example:'pinMode(3, OUTPUT);', notes:'it can be INPUT or OUTPUT',},
        {command:'Single Line Comment', syntax:'//comment text', example:'//comment text', notes:'comments out everything after',},
        {command:'Multi-Line Comment', syntax:'/* comment text */', example:'/* comment text */', notes:'comments out everything between',},


    ]
    const control = [
        {command:'For Loop', syntax:'for(iterator intitialization; stop condition; increment instruction){code;}', example:'for(int j 0; j==10;j++){Serial.println(j);}', notes:'',},
        {command:'While Loop', syntax:'while(condition){code;}', example:'while(int j<50){j++;}', notes:'',},
        {command:'Delay', syntax:'delay(time);', example:'delay(2500);', notes:'time is in milliseconds',},
        {command:'if/else if/else', syntax:'if(condition){code} else if(condition){code} else{code}', example:'if(first>last){answer = first;} else if(last>first){answer=last;}else{answer = "none";}', notes:'',},


    ]
    const serialMonitor = [
        {command:'Serial.begin', syntax:'Serial.begin(speed);', example:'Serial.begin(9600);', notes:'Speed must match anything it is communicationg with such as serial Monitor',},
        {command:'Serial.print', syntax:'Serial.print(text);', example:'Serial.print("hello");', notes:'Does not put in new line character. Always retunrs a text even if a number is read',},
        {command:'Serial.println', syntax:'Serial.println(text)', example:'Serial.println("goodbye");', notes:'Puts in new line character',},
        {command:'Serial.parseint', syntax:'Serial.parseInt(number);', example:'Serial.parseInt("42");', notes:'returns an int',},
        {command:'Serial.parseFloat', syntax:'Serial.parseFloat(number);', example:'Serial.parseFloat("42.");', notes:'returns a float',},
        {command:'Serial.readString', syntax:'Serial.readString(string);', example:'Serial.readString("Hello");', notes:'returns a string',},
        {command:'Serial.available', syntax:'Serial.available()', example:'Serial.available()', notes:'Checkes to see if there is anything is the serial buffer.  This is used to wait in a while loop for user input',},
        {command:'', syntax:'', example:'', notes:'',},

    ]
    const wifi = [
        {command:'', syntax:'', example:'', notes:'',},

    ]

    const operators = [
        {command:'assignment', syntax:'=', example:'', notes:'',},
        {command:'addition', syntax:'+', example:'', notes:'',},
        {command:'subtraction', syntax:'-', example:'', notes:'',},
        {command:'multiplication', syntax:'*', example:'', notes:'',},
        {command:'division', syntax:'/', example:'', notes:'',},
        {command:'modulo', syntax:'%', example:'', notes:'',},
        {command:'Power', syntax:'pow(base, exponent);', example:'pow(2,3);', notes:'8',},
        {command:'Square', syntax:'sq(base);', example:'sq(3);', notes:'9',},
        {command:'Square root', syntax:'sqrt(base);', example:'sqrt(9);', notes:'3',},
        {command:'Cosine', syntax:'cos(base);', example:'', notes:'takes float value in radians and returns float value in radians',},
        {command:'Sine', syntax:'sin(base);', example:'', notes:'takes float value in radians and returns float value in radians',},
        {command:'Tangeant', syntax:'tan(base);', example:'', notes:'takes float value in radians and returns float value in radians',},
        {command:'Minimum', syntax:'min(number1, number2);', example:'min(2, 8);', notes:'returns lower number',},
        {command:'Maximum', syntax:'maxnumber1, number2);', example:'max(2, 8);', notes:'returns higher number',},


        {command:'Equal to', syntax:'==', example:'', notes:'',},
        {command:'Not Equal to', syntax:'!=', example:'', notes:'',},
        {command:'less than', syntax:'<', example:'', notes:'',},
        {command:'more than', syntax:'>', example:'', notes:'',},
        {command:'less than or equal', syntax:'<=', example:'', notes:'',},
        {command:'greater than or equal', syntax:'>=', example:'', notes:'',},
        {command:'And', syntax:'&&', example:'', notes:'',},
        {command:'Or', syntax:'||', example:'', notes:'',},
        {command:'Not', syntax:'!', example:'', notes:'',},
        {command:'increment', syntax:'++', example:'', notes:'',},
        {command:'decriment', syntax:'--', example:'', notes:'',},
        {command:'compound operators', syntax:'+=, -=, *=, /=', example:'firstNumber += 4; //firstNumber = firstNumber+4', notes:'sets first number to the result of it and the right number ',},
 
    ]
    return(
        <div>
            <h1>Arduino Commands</h1>
            <h2>General:</h2>
            <TableMaker head={commandsHead} array={commands} tableType='simpleColumn' />

            <h2>Control Flow:</h2>
            <TableMaker head={commandsHead} array={control} tableType='simpleColumn' />

            <h2>Serial Monitor:</h2>
            <TableMaker head={commandsHead} array={serialMonitor} tableType='simpleColumn' />

            <h2>WiFi Bluetooth</h2>
            <TableMaker head={commandsHead} array={wifi} tableType='simpleColumn' />

            <h2>Math</h2>
            <h2>Operators</h2>
            <TableMaker head={commandsHead} array={operators} tableType='simpleColumn' />

            Finished through lecture 10
        </div>
    )
}

export default ArduinoCommands