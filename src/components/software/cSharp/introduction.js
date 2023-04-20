import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Introduction = () =>{
    /* Content variables*/
    const links = [
        {subject:'Course Top Level', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/'},
        {subject:'Course Learning Activity Version Control', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/prepare-tools.html'},
        {subject:'Course Prove 1', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/csharp-1.html'},
        {subject:'Course Prove 2', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/csharp-2.html'},
        {subject:'Course Prove 3', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/csharp-3.html'},
        {subject:'Course Prove 4', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/csharp-4.html'},
        {subject:'Course Prove 5', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/csharp-5.html'},
        {subject:'Course Prove Articulate', url:'https://byui-cse.github.io/cse210-ww-course-2023/week01/articulate.html'},
        {subject:'Git Docs', url:'https://docs.github.com/en/get-started/using-git/about-git'},
        {subject:'Things you can do with lists', url:'https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-5.0'},

    ]
    const tools = [
        {tool:'git', purpose:'Allows download/upload to other computers', check:'command line: git --version', download:'command line: git clone https://github.com/git/git'},
        {tool:'Visual Studio Code', purpose:'Text editor with many bells and whistles', check:'', download:'https://code.visualstudio.com/'},
        {tool:'.Net Framework', purpose:'Allows running c# programs', check:'command line: dotnet --list-sdks', download:'https://dotnet.microsoft.com/en-us/download'},
        {tool:'C# extension in VS Code', purpose:'Allows VSC to recognize c#', check:'Look in extensions list on VSC', download:'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp'},

    ]
    const videos = [
        {
            src:'https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_nbm8ur9z&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_85barzu6'
            ,title:'CSE 210 - Getting the Project Template'
        },
        {   
            src:'https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_ge1mio3i&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_sv8kj7jf'
            ,title:'CSE 210 - A Typical Workflow using Git'
        },
        {
            src:"https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_1bulammf&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4npzllq4"
            ,title:"CSE 210 - C# Prep 1 Walkthrough"
        },
        {
            src:"https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_3k127eyk&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_c59kg3os" 
            ,title:"Program Components"
        },
        {
            src:"https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_1bulammf&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4npzllq4" 
            ,title:"CSE 210 - C# Prep 1 Walkthrough"
        },
        {
            src:"https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_78d651c6&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_g7vjr2ui" 
            ,title:"Conditionals and variables"
        },

    ]
    const accounts= [
        {account:'Github', purpose:'Sets up a personal repository that allows public to see your programming', url:'https://github.com/',},
    ]

    const syntax=[
        {subject:'variable Assignment', syntax:['int x = 5;'], },
        {subject:'Output to console no new line', syntax:['Console.Write("There will not be a newline after this.");'], },
        {subject:'Output to console with new line', syntax:['Console.WriteLine("There will be a newline after this.");'], },
        {subject:'Input from user', syntax:['Console.Write("What is your favorite color? ");','string color = Console.ReadLine();'], },
        {subject:'If Else', syntax:['if (x > y){Console.WriteLine("greater");}', 'else if(x < y){Console.WriteLine("less");}', 'else{Console.WriteLine("even");}'], },
        {subject:'String Template', syntax:['string school = "BYU-Idaho";',  'Console.WriteLine($"I am studying at {school}.");'], },
        {subject:'Casting from user input', syntax:['Console.Write("What is your favorite number? ");', 'int number = int.Parse(Console.ReadLine());'], },
        {subject:'While Loop', syntax:['string response = "yes";'
        ,'while (response == "yes")'
        ,'{'
        ,'Console.Write("Do you want to continue? ");'
        ,'response = Console.ReadLine();'
        ,'}']},
        {subject:'Do-While Loop', syntax:['string response;'
        ,'do'
        ,'{'
        ,'Console.Write("Do you want to continue? ");'
        ,'response = Console.ReadLine();'
        ,'} while (response == "yes");'
        ,]},
        {subject:'For Loop', syntax:['for (int i = 0; i < 10; i++)'
        ,'{'
        ,'Console.WriteLine(i);'
        ,'}']},
        {subject:'foreach Loop', syntax:['foreach (string color in colors)'
        ,'{'
        ,'Console.WriteLine(color);'
        ,'}']},
        {subject:'Random Numbers', syntax:['Random randomGenerator = new Random();'
        ,'int number = randomGenerator.Next(1, 11);']},
        {subject:'Create new List/array from List class', syntax:['List<int> numbers = new List<int>();','']},
        {subject:'Include Libray(lists)', syntax:['using System.Collections.Generic;','']},
        {subject:'Adding to an item to a list', syntax:['using System.Collections.Generic;'
        ,'List<string> words = new List<string>();'
        ,'words.Add("phone");'
        ,'words.Add("keyboard");']},
        {subject:'Get Length of array', syntax:['Console.WriteLine(words.Count);']},
        {subject:'Iterate through a List', syntax:['foreach (string word in words)'
        ,'{'
        ,'Console.WriteLine(word);'
        ,'}']},
        {subject:'Iterate list by index', syntax:['for (int i = 0; i < words.Count; i++)'
        ,'{'
        ,'Console.WriteLine(words[i]);'
        ,'}']},
        {subject:'Declare function, use static keyword if not in the context of a class', syntax:['static int AddNumbers(int first, int second)'
        ,'{'
        ,'int sum = first + second;'
        ,'return sum;'
        ,'}']},
        {subject:'', syntax:['','']},
        {subject:'', syntax:['','']},

    ]
    const proveOne = [
        {subject:'Prompt First name', code:['Console.Write("What is your first name? ");',],},
        {subject:'Take in user input', code:['string firstName = Console.ReadLine();',],},
        {subject:'Prompt Last Name', code:['Console.Write("What is your first name? ");',],},
        {subject:'Take in User Output', code:['string lastName = Console.ReadLine();',],},
        {subject:'Output Answer', code:['Console.Write($"Your name is {lastName}, {firstName} {lastName}.");',],},
        {subject:'Full Answer', code:['Console.Write("What is your first name? ");'
        ,'string firstName = Console.ReadLine();'
        ,'Console.Write("What is your first name? ");'
        ,'string lastName = Console.ReadLine();'
        ,'Console.Write($"Your name is {lastName}, {firstName} {lastName}.");',]}
        
    ]
    const boolOperators=[
        {name:'Is equal to', operator:'=='},
        {name:'Greater than', operator:'>'},
        {name:'Less than', operator:'<'},
        {name:'Equal or greater', operator:'>='},
        {name:'And', operator:'&&'},
        {name:'Or', operator:'||'},

    ]
    const proveTwo =[
        {subject:'Prompt for grade', code:['Console.Write("What is your grade? ");',],},
        {subject:'Recieve and cast input as an int', code:['int grade = int.Parse(Console.ReadLine());',],},
        {subject:'create sign variable', code:['string sign = "";',],},
        {subject:'create letter variable', code:['string letter = "";',],},
        {subject:'Get + -', code:['if(grade%10 >= 7){sign = "+";}'
        ,'else if(grade%10 < 3){sign = "-";}',],},
        {subject:'conditionals for grades', code:['if (grade >= 90){letter ="an A";}'
        ,'else if (grade >=80){letter ="a B";}'
        ,'else if (grade >=70){letter ="a C";}'
        ,'else if (grade >=60){letter ="a D";}'
        ,'else{letter ="an F";}'],},
        {subject:'Output conditional string template', code:['if(letter == "an A" && sign == "+"){Console.WriteLine($"You got {letter}");}'
        ,'else if(letter =="an F"){Console.WriteLine($"You got {letter}");}'
        ,'else{Console.WriteLine($"You got {letter}{sign}");}'
        ]}
    ]
    

    const proveThree = [
        {step:'Make Random number', code:['Random randomGenerator = new Random();'
        ,'int number = randomGenerator.Next(1, 101);']},
        {step:'Initialize guess', code:[' int guess = 0;']},
        {step:'While loop to check answer', code:['while (guess != number)',
        ,'{'
        ,'Console.Write("What is your guess? ");'
        ,'guess = int.Parse(Console.ReadLine());'
        ,'if (number > guess)'
        ,'{'
        ,'Console.WriteLine("Higher");'
        ,' }'
        ,'else if (number < guess)'
        ,'{'
        ,'Console.WriteLine("Lower");'
        ,'}'
        ,'else'
        ,'{'
        ,'Console.WriteLine("You guessed it!");'
        ,'}'
        ,'}'
        ]},
    ]
    const proveFour = [
        {step:'Create Array called numbers', code:['List<int> numbers = new List<int>();']},
        {step:'Request numbers from user', code:['Console.WriteLine("Enter a list of numbers, type 0 when finished.");']},
        {step:'Initialize variable to hold number choice', code:['int choice = -1;']},
        {step:'Loop for building List from user input', code:['',
        "while (choice != 0 ){",
        "Console.WriteLine('Enter number:');",
        "choice = int.Parse(Console.ReadLine());",
        "if (choice != 0){",
        "numbers.Add(choice);",
        "}",
        "}",]},
        {step:'Initialize variable to hold the sum', code:['float sum = 0;']},
        {step:'Iterate list to get sum', code:['foreach (int number in numbers){'
        ,'sum += number;'
        ,'}']},
        {step:'Output results', code:['Console.WriteLine($"The sum is: {sum}");'
        ,'Console.WriteLine($"The Average is: {sum/numbers.Count}");']},
        {step:'Initialive variable for largest number', code:['int largest = -1;']},
        {step:'For Each Loop to find largest number in list', code:['foreach  (int number in numbers){'
        ,'if (number > largest){'
        ,'largest = number;'
        ,'}'
        ,'}']},
        {step:'Output for largest number', code:['Console.WriteLine($"The Largest number is: {largest}");']},

    ]
    const proveFive = [
        {step:'Get Library for math', code:['using System;']},
        {step:'Define Welcome Function', code:['static void DisplayWelcome(){'
        ,'Console.WriteLine("Welcome to the program!");'
        ,'}']},
        {step:'Define name prompt function', code:['static string PromptUserName(){'
        ,'Console.WriteLine("Please enter your name:");'
        ,'return(Console.ReadLine());'
        ,'}']},
        {step:'Define number prompt function', code:['static int PromptUserNumber(){'
        ,'Console.WriteLine("Please enter your favorite number:");'
        ,'return(int.Parse(Console.ReadLine()));'
        ,'}']},
        {step:'define function for squaring number', code:['static int SquareNumber(int number){'
        ,'return(number*number);'
        ,'}']},
        {step:'define function to display results', code:['static void DisplayResult(string name,int number, int square){'
        ,'Console.WriteLine($"{name}, the quare of {number} is {square}");'
        ,'}']},
        {step:'In Main: functions return value to variables', code:['DisplayWelcome();'
        ,'string name = PromptUserName();'
        ,'int number = PromptUserNumber();'
        ,'int square = SquareNumber(number);'
        ,'DisplayResult(name, number, square);']},
    ]
    /*Render Variables*/
    const renderLinks = links.map(item=>{
        return(
            <tr>
                <td><a href={item.url} target='_blank'>Week 1:{item.subject}</a></td>
            </tr>
        )
    })
    const renderTools = tools.map(item=>{
        return(
            <tr>
                <td><a href={item.download} target='_blank'>{item.tool}</a></td>
                <td>{item.purpose}</td>
                <td>{item.check}</td>
               
            </tr>
        )
    })

    const renderVideos= videos.map(item=>{
        return(
            <tr>
                <td>{item.title}</td>
                <td>
                    <iframe src={item.src}
                    width='300'
                    allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" 
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" 
                    frameborder="0">
                    </iframe><br/>
                </td>
            </tr>
        )
    })
    const renderAccounts= accounts.map(item=>{
        return(
            <tr>
                <td><a href={item.url} target='_blank'>{item.account}</a></td>
                <td>{item.purpose}</td>
            </tr>
        )
    })
    const renderSyntax = syntax.map(item=>{
        const syntaxLines =item.syntax.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.subject}</td>
                <td>{syntaxLines}</td>
            </tr>
        )
    })
    const renderProveOne = proveOne.map(item=>{
        const codeLines =item.code.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.subject}</td>
                <td>{codeLines}</td>
            </tr>
        )
    })
    const renderBoolOperators = boolOperators.map(item=>{
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.operator}</td>
            </tr>
        )
    })
    const renderProveTwo = proveTwo.map(item=>{
        const codeLines =item.code.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.subject}</td>
                <td>{codeLines}</td>
            </tr>
        )
    })
    
    
    const renderCode = proveThree.map(item=>{
        const codeLines = item.code.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.step}</td>
                <td>{codeLines}</td>
            </tr>
        )
    })
    const renderProveFour = proveFour.map(item=>{
        const codeLines = item.code.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.step}</td>
                <td>{codeLines}</td>
            </tr>
        )
    })
    const renderProveFive = proveFive.map(item=>{
        const codeLines = item.code.map(line=>{
            return(
                <p>{line}</p>
            )
        })
        return(
            <tr>
                <td>{item.step}</td>
                <td>{codeLines}</td>
            </tr>
        )
    })
    //function takes name of an array.  It maps through each object in the array. It builds one vaiable for the internal array, so it can be used in the final return
    ////////////////////////////
    return(
        <div>
            <h2>C# Week:1 Introduction</h2>
            <hr/>

            <h3>Links</h3>
                <table>
                    <tr><th>Week 1 Links</th></tr>
                    {renderLinks}
                </table>

            <h3>Accounts</h3>
                <table>
                    <tr>
                        <th>Account</th>
                        <th>Purpose</th>
                    </tr>
                    {renderAccounts}
                </table>

            <h3>Course Tools</h3>
                <table>
                    <tr>
                        <th>Tool</th>
                        <th>What it does</th>
                        <th>How to check your version</th>
                    </tr>
                    {renderTools}
                </table>

            <h3>Videos</h3>
                <table>
                    <tr><th>Title</th><th>Video</th></tr>
                    {renderVideos}
                </table>
                <hr/>
            <h3>Notes</h3>
               
                <h4>Version Control</h4>
                <hr/>
                <h4>Prove 1</h4>

                    <h5>Variable Types:</h5>
                        <ul>
                        <li><code>int</code> - Integers (whole numbers, positive and negative)</li>
                        <li><code>string</code> - Strings (a sequence of characters, including letters, numbers, or symbols)</li>
                        <li><code>float</code> - Floating point numbers (numbers that use decimals)</li>
                        <li><code>double</code> - Double precision floating point numbers (just like a <code>float</code>, except it takes up twice as much memory, so it can hold larger numbers or numbers with more decimal places)</li>
                        <li><code>bool</code> - Boolean variables (true or false)</li>
                        </ul>

                    <h5>Syntax:</h5>
                        <table>
                            <tr>
                                    <th>Concept</th>
                                    <th>Syntax</th>
                            </tr>
                            {renderSyntax}
                        </table>
                    <h5>Scope</h5>
                    <p>variables declared and used in the body of a function can only be accessed within that function (they cannot be accessed in main or any other function).</p>
                    <h5>Requirements:</h5>
                        <p>Prompt the user for their first name. Then, prompt them for their last name. Display the text back all on one line saying, "Your name is last-name, first-name, last-name" as shown:</p>
                        What is your first name? Kman<br/>
                        What is your last name? Elite<br/>
                        Your name is Young, Kman Elite.<br/>
                    <h5>Code:</h5>
                    <table>
                        <tr>
                            <th>Reason</th>
                            <th>Code</th>
                        </tr>
                        {renderProveOne}
                    </table>
                    <hr/>
                <h4>Prove 2</h4>
                    <h5>Boolean Operators:</h5>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                        </tr>
                        {renderBoolOperators}
                    </table>
                    <h5>Requirements:</h5>
                    <blockquote>
            <h5>Overview</h5>
            <p>Write a program that determines the letter grade for a course according to the following scale:</p>
    
            <ul>
                <li>A greater or equal 90</li>
                <li>B greater or equal 80</li>
                <li>C greater or equal 70</li>
                <li>D greater or equal 60</li>
                <li>F &lt; 60</li>
            </ul>        
    
            <h5>Assignment</h5>
            <p>Start by completing the core requirements, then when that part is complete, if you have time, see if you can complete some of the stretch challenges as well.</p>
    
            <p>Please work through the requirements <strong>in order</strong> rather than jumping ahead to more complicated steps, to ensure that everyone is following the concepts.</p>
    
            <h5>Core Requirements</h5>
            <ol>
                <li><p>Ask the user for their grade percentage, then write a series of <code>if-elif-else</code> statements to print out the appropriate letter grade. (At this point, you'll have a separate print statement for each grade letter in the appropriate block.)</p></li>
    
                <li><p>Assume that you must have at least a 70 to pass the class. After determining the letter grade and printing it out. Add a separate if statement to determine if the user passed the course, and if so display a message to congratulate them. If not, display a different message to encourage them for next time.</p></li>
    
                <li>
                    <p>Change your code from the first part, so that instead of printing the letter grade in the body of each <code>if</code>, <code>elif</code>, or <code>else</code> block, instead create a new variable called <code>letter</code> and then in each block, set this variable to the appropriate value. Finally, after the whole series of <code>if-elif-else</code> statements, have a single print statement that prints the letter grade once.</p>
                </li>
            </ol>
    
            <h5>Stretch Challenge</h5>
            <ol>
                <li>
                    <p>Add to your code the ability to include a "+" or "-" next to the letter grade, such as <em>B+</em> or A-. For each grade, you'll know it is a "+" if the last digit is greater or equal 7. You'll know it is a minus if the last digit is less than 3 and otherwise it has no sign.</p>
    
                    <p>After your logic to determine the grade letter, add another section to determine the sign. Save this sign into a variable. Then, display both the grade letter and the sign in one print statement.</p>
    
                    <p>Hint: To get the last digit, you could divide the number by 10, and get the remainder. You might refer back to the <a href="../lesson03/prepare.html">preparation material for Lesson 03</a> to see the operators and find the one that does division and gives you the remainder.</p>
    
                    <p>At this point, don't worry about the exceptional cases of <em>A+</em>, <em>F+</em>, or <em>F-</em>.</p>
                </li>
                
                <li><p>Recognize that there is no <em>A+</em> grade, only <em>A</em> and <em>A-</em>. Add some additional logic to your program to detect this case and handle it correctly.</p></li>
    
                <li><p>Similarly, recognize that there is no <em>F+</em> or <em>F-</em> grades, only <em>F</em>. Add additional logic to your program to detect these cases and handle them correctly.</p></li>
            </ol>        
    
                    </blockquote>
                    <h5>Code</h5>
                        <table>
                            <tr>
                                <th>Reason</th>
                                <th>Code</th>
                            </tr>
                            {renderProveTwo}
                        </table>
                <h4>Prove 3</h4>
                    <h5>Requirements</h5>
                    <li>Generate random number</li>
                    <li>Ask for a guess</li>
                    <li>If number is higher, respond higher, lower,lower</li>
                    <li>If they guess the number, "You guessed it!"</li>
                    <table>
                        <tr>
                            <th>Step</th>
                            <th>Code</th>
                        </tr>
                        {renderCode}
                    </table>
                <h4>Prove 4</h4>
                <h4>Program Specification</h4>
        <p>Here are the instructions that you saw previously in CSE 110 that we will use as our program specification:</p>

          <h5>Assignment</h5>
          <p>Ask the user for a series of numbers, and append each one to a list. Stop when they enter <code>0</code>.</p>
  
          <p>Once you have a list, have your program do the following:</p>
  
          <h5>Core Requirements</h5>
          <p>Work through these core requirements step-by-step to complete the program. Please don't skip ahead and do the whole thing at once, because others on your team may benefit from building the program up slowly.</p>
  
          <ol>
              <li><p>Compute the sum, or total, of the numbers in the list.</p></li>
              <li><p>Compute the average of the numbers in the list.</p></li>
              <li><p>Find the maximum, or largest, number in the list.</p></li>
          </ol>
                        <table>
                            <tr>
                                <th>Reason</th>
                                <th>Code</th>
                            </tr>
                        {renderProveFour}
                        </table>
                <h4>Prove 5</h4>
                <ul>
                    <li><code>DisplayWelcome</code> - Displays the message, "Welcome to the Program!"</li>
                    <li><code>PromptUserName</code> - Asks for and returns the user's name (as a string)</li>
                    <li><code>PromptUserNumber</code> - Asks for and returns the user's favorite number (as an integer)</li>
                    <li><code>SquareNumber</code> - Accepts an integer as a parameter and returns that number squared (as an integer)</li>
                    <li><code>DisplayResult</code> - Accepts the user's name and the squared number and displays them.</li>
                </ul>
                <table>
                    <tr>
                        <th>Reason</th>
                        <th>Code</th>
                    </tr>
                    {renderProveFive}
                </table>
                <h4>Prove Articulate</h4>
                <ul>
                    <li>What is version control and why is it important?</li>
                    <li>Explain the meaning of Version Control</li>
                    <li>Highlight a benefit of Version Control</li>
                    <li>Provide an application of Version Control</li>
                    <li>Show a command used in Version Control (for example a Git command)</li>
                    ****Need to add this****
                    <li>Thoroughly explain these concepts (this likely cannot be done in less than 100 words)</li>
                    <p>Version control tracks all the changes made on a project.  This allows a programmer to go back to previous versions of the program to allow for undoing bad ideas.  It also allows branching which allows a program to develop in multiple directions to test them.</p>
                    <p>Another benefit of version control is that it allows group collaboration on large projects.  Multiple programmers can push separate branches, or they can work small portions of the code allowing for abstraction.</p>
                    <p>My own use of Version control has been in the development of my own websites.  One particular time I threw away a cashe file that was excessively large and was bogging down my program.  I didn't think it was important, but it broke my program locally on my development platform.  I was able to retrieve the file through my github repository and got my program working again. Since I tend to work alone on these, git push is the main command I use since I develop and troubleshoot locally</p>
                </ul>
        </div>
    )
}

export default Introduction;