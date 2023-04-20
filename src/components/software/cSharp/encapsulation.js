import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Encapsulation = () =>{
    const linksHead = ['Site', 'Purpose']
    const links =[
        {name:'Wk 3 Encapsulation', purpose:'Top Level', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/index.html'},
        {name:'Wk 3 Old Course', purpose:'Old Course', url:'https://byui-cse.github.io/cse210-course-competency/encapsulation/materials/the-second-principle.html'},
        {name:'Wk 3 Encapsulation Learning Activity', purpose:'Learning Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/prepare.html'},
        {name:'Wk 3 Learning Activity solution', purpose:'Solution for learning Activity', url:'https://github.com/byui-cse/cse210-ww-student-sample-solutions/tree/main/prepare/Learning03'},
        {name:'Wk 3 Design Activity', purpose:'Instructions for Design Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/design.html'},
        {name:'Wk 3 Develop Activity', purpose:'Instructions for Scripture memorizer', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/develop.html'},
        {name:'Wk 3 Articulate', purpose:'Articulate activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week03/articulate.html'},
    ]
    const codeHead =['Step','Explain', 'Code']
    const syntax =[
        {step:'',
        points:['','','','','',], 
        code:['public class Account{', 'public int balance = 0;', 'public void Deposit(int amount){', 'balance = balance + amount;','}}']},
        {step:'',
        points:['','','',], 
        code:['Account account = new Account();', 'account.balance = 50;','account.Deposit(100);',]},
        {step:'',
        points:['', '','', '','',  ], 
        code:['public class Account{', 'public List<int> transactions = new List<int>(); // if we change this...','public void Deposit(int amount){','transactions.Add(amount);','}}']},
        {step:'',
        points:['','','',], 
        code:['Account account = new Account();', 'account.balance = 50;', 'account.Deposit(100);',]},
        {step:'',
        points:['', '', '', '', '',], 
        code:['public class Account{', 'private List<int> transactions = new List<int>();', 'public void Deposit(int amount){', 'transactions.Add(amount);', '}}',]},
        {step:'',
        points:['', '', '', '', '', '', '',], 
        code:['public class Account{', 'private List<int> transactions = new List<int>(); ', 'public void getTransactions(){', 'return transactions;}', 'public void setTransactions(List<int> transactions){', 'this.transactions = transaction;', '}}',]},]
    const prepare =[
        {step:'Program.cs', 
        points:['','','','','','','','','','','','','','','','',], 
        code:['using System;',
        'class Program{',
        'static void Main(string[] args){',
        'Fraction noParam = new Fraction();','noParam.getFrac();','noParam.getDec();',
        'Fraction topOnly = new Fraction(5);','topOnly.getFrac();','topOnly.getDec();',
        'Fraction threeFourths = new Fraction(4,3);','threeFourths.getFrac();','threeFourths.getDec();',
        'Fraction oneThird = new Fraction(3,1);','oneThird.getFrac();','oneThird.getDec();','}}']},
        {step:'Fraction.cs', 
        points:['','','','','','','','','','','','','','','','','','',], 
        code:['using System;','class Fraction{','private int _top;','private int _bottom;',
        'public Fraction(){','_bottom=1;','_top=1;}',
        'public Fraction(int topNumber){',' _bottom=1;','_top=topNumber;}',
        'public Fraction(int bottomNumber, int tNumber){',' _bottom=bottomNumber;','_top=tNumber;}',
        'public void getFrac(){','Console.WriteLine($"{_top}/{_bottom}");}',
        'public void getDec(){','Console.WriteLine($"{(double)_top/_bottom}");','}}']},

    ]
    const prove =[
        {step:'Program.cs', 
        points:['', '','', '','', '','', '','', '','', '','', '','', '','', '', '',],  
        code:['using System;{','class Program{',
        'static void Main(string[] args){',
        'string choice  = "";',' Scripture chosen = new Scripture();','chosen.SetActiveScripture();','chosen.WriteActiveScripturetoFile();',
        'Display active = new Display();','active.SetActiveText();','Console.Write("\n\nType "quit" to end the program. or anything else to continue.\n>");','choice = Console.ReadLine();',
        'while(choice != "quit"){','Console.Clear();','active.ChangeActiveText();','Console.Write("\n\nType "quit" to end the program. or anything else to continue.\n>");','choice = Console.ReadLine();}',
        'Quit message = new Quit();','message.displayQuit();','}}',]},
        {step:'Display.cs', 
        points:['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',],  
        code:['using System.IO; ',
        'public class Display{',
        'private string[] _ActiveText;',
        'private string[] _Words;',
        'public void SetActiveText(){',
        'string fileName="scripture.txt";',
        '_ActiveText = System.IO.File.ReadAllLines(fileName);',
        '_Words = _ActiveText[0].Split(" ");',
        'Console.Write(_ActiveText[0]);}',
        'public void ChangeActiveText(){',
        'int length = _Words.Length;',
        'Random rnd = new Random();',
        'int index =  rnd.Next(1,length);',
        'if (_Words[index]!="_"){',
        '_Words[index] = "_";} ',
        'else{',
        'while(_Words[index]=="_"){',
        'Random advance = new Random();',
        'index =  advance.Next(1,length);}',
        '_Words[index] = "_";}',
        'foreach (string word in _Words){',
        'Console.Write($"{word} ");}}}',]},
        {step:'Quit.cs', 
        points:['', '', '', '', '',],  
        code:['public class Quit{','private string _text = "Thanks for playing!";','public void displayQuit(){','Console.WriteLine(_text);}','}']},
        {step:'Scripture.cs', 
        points:['', '','', '','', '','', '','', '','', '','',],  
        code:['public class Scripture',
        '{   private int _Index;',
        'private string[] _scriptures={',
        '"Moses_1:39 For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",',
        '"Matthew_5:48 Be ye therefore perfect, even as your Father which is in heaven is perfect.",',
        '"3Nephi_27:19 And no unclean thing can enter into his kingdom; therefore nothing entereth into his rest save it be those who have washed their garments in my blood, because of their faith, and the repentance of all their sins, and their faithfulness unto the end. };"',
        'public void SetActiveScripture(){',
        'Random rnd = new Random();',
        '_Index =  rnd.Next(3);}',
        'public void WriteActiveScripturetoFile(){',
        'using (StreamWriter outputFile = new StreamWriter("scripture.txt"))',
        '{',
        'outputFile.WriteLine($"{_scriptures[_Index]}");}}}',]},]
    const ponder =[
        {step:'Code Example', 
        points:['', '',],  
        code:['','',]},
    ]
    return(
        <div>
            <h2>C# Week:3 Encapsulation</h2>
    <hr></hr>
    <a href="https://byui-cse.github.io/cse210-course-competency/encapsulation/materials/the-second-principle.html">BYU CHeat Sheet on Encapsulation</a>
    <p>Encapsulation is the act of enclosing something, as if it were in a capsule. 
        It is hiding the details of something so that other code can't see or manipulate them. 
        More to the point, it is hiding the sources of change.</p>

        <h3>Links</h3>
        <TableMaker head={linksHead} array={links} tableType='links' />
    <h3>Videos</h3>
        <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_fmkzempr&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_yiy1isfu" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="CSE 210: Scripture Memorizer Program Demo"></iframe>
    <h3>Syntax</h3>
        <TableMaker head={codeHead} array={syntax} tableType='coding' />
    <h3>Prepare</h3>
        <TableMaker head={codeHead} array={prepare} tableType='coding' />
    <h3>Design</h3>
        <img src='/scripture.svg'/>
    <h3>Prove</h3>
        <TableMaker head={codeHead} array={prove} tableType='coding' />
    <h3>Ponder</h3>
        <p>Encapsulation is  a way of separating parts of your code in a way that protects it from being accessed from other parts of the code.  This is done by using keywords of private or public.  If it is private, then only methods within the class can access the data.  If it is public, then it can be access externally.  This makes it so the private data cannot be accessed directly.  It protects the data and makes it easier to troubleshoot code since it limits the number of places that data can be accessed helping you to get to the problem quicker since you know everything affecting that data.</p>
        <TableMaker head={codeHead} array={ponder} tableType='coding' />
        <p>In this, the scriptures cannot be accessed directly because they are private</p>
        </div>
    );
    }

export default Encapsulation;