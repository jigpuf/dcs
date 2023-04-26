import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Abstraction = () =>{
    //------------------------------------------------------content 
    const linksHead = ['Name','Purpose']      
    const links = [
        {name:'BYU Cheatsheet on Abstraction', purpose:'Old Course', url:'https://byui-cse.github.io/cse210-course-competency/abstraction/materials/the-first-principle.html',},
        {name:'Abstraction Course Top Level', purpose:'Current Course', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/index.html',},
        {name:'Abstraction Learning Activity', purpose:'learning Activity:Resume', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/prepare.html',},
        {name:'Abstraction Design Activity', purpose:'Group Design:Journal Program', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/design.html',},
        {name:'Abstraction Prove Activity', purpose:'Program on your own:Journal Program', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/develop.html',},
        {name:'Abstraction Ponder/Articulate', purpose:'Explain in your own words', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/articulate.html',},
        {name:'Week 02 Develop: Journal Program', purpose:'Get specs for Design Program Here', url:'https://byui-cse.github.io/cse210-ww-course-2023/week02/develop.html',},
    ] 
    
    const codeHead =['Step','Explain', 'Code']
    const syntax =[
        {step:'Define Class',
        points:['Class name with public level visibility',
        'Person Class Open Scope',
        'Public visibility atribute, string type',
        'Constructor Method to create new objects',
        'Constructor Method Open Scope',
        'Constructor Method Close Scope',
        'Public Method, no arguments',
        'showName method open scope',
        'output with string template',
        'showName method close scope',
        'Person Class Close scope',], 
        code:['public class Person'
        ,'{'
        ,'public string _givenName = "";'
        ,'public Person()'
        ,'{'
        ,' }'
        ,'public string showName()'
        ,'{'
        ,'Console.WriteLine($"{givenName}");'
        ,'}'
        ,'}']},

        {step:'Creating object from class:in main', 
        points:['Create Object named person from class'
        ,'set attribute of person._givenName to Joseph'
        ,'Call method from object person which would give an output'], 
        code:['Person person = new Person();'
        ,'person._givenName = "Joseph";'
        ,'person.Name();']},

        {step:'Nesting a class within a class', 
        points:['This is the top level class'
        ,'House Class Open Scope'
        ,'House Class Attribute'
        ,'Blind Class Attribute(Sub Class) as a House Class Attribute'
        ,'Blind Class Attribute(Sub Class) as a House Class Attribute' 
        ,'House Class Close Scope'],
        code:['public class House'
        ,'{'
        ,'public string _owner = "";'
        ,'public Blind _kitchen = new Blind();'
        ,'public Blind _livingRoom = new Blind();'
        ,'}']},

        {step:'Initialize a new House Class and sub-classes'
        , points:['Instatiate new johnsonHome object'
        ,'Instantiate new johnsonHome kitchen attribute frome the Blind class'
        ,'Instantiate new johnsonHome livingRoom attribute frome the Blind class'
        ,'These could also be instantiatedwithin the class as follows:public Blind _livingRoom = new Blind();']
        , code:['House johnsonHome = new House()'
        ,'johnsonHome._kitchen = new Blind();'
        ,'JohnsonHome._livingRoom = new Bind();']},

        {step:'Access attributes from subclass', 
        points:['using dot notation to access blind attributes from the house class',], 
        code:['johnsonHome._kitchen._width = 60;',]},

        {step:'Random Number', 
        points:['Creates new random number {rnd} from random class',
        'sets value on variable with random int value from 1-4. Min is included, but max is not'], 
        code:['Random rnd = new Random();',
        'index =  rnd.Next(1,5);']},
    ]
    const prepareProgram = [
        {step:'Create Program File', 
        points:['Create job1 object  from Job Class',
        'Assign value to job1 jobTitle attribute',
        'Assign value to job1 company attribute',
        'Assign value to job1 startYear attribute',
        'Assign value to job1 endYear attribute',
        'Create job2 object  from Job Class',
        'Assign value to job2 jobTitle attribute',
        'Assign value to job2 company attribute',
        'Assign value to job2 startYear attribute',
        'Assign value to job2 endYear attribute',
        'Create myResume object from Resume Class',
        'Assign value to myResume name attribute',
        'append value to job<list> attribute in myResume that is a list of objects',
        'append value to job<list> attribute in myResume that is a list of objects',
        'call display method from myResume object',
        ], 
        code:['Job job1 = new Job();',
        'job1._jobTitle = "Software Engineer";',
        'job1._company = "Microsoft";',
        'job1._startYear = 2019;',
        'job1._endYear = 2022;',
        'Job job2 = new Job();',
        'job2._jobTitle = "Manager";',
        'job2._company = "Apple";',
        'job2._startYear = 2022;',
        'job2._endYear = 2023;',
        'Resume myResume = new Resume();',
        'myResume._name = "Allison Rose";',
        'myResume._jobs.Add(job1);',
        'myResume._jobs.Add(job2);',
        'myResume.Display();',
        ]},
        {step:'Create Job Class File',
         points:['Start Job Class Definition'
        ,'Open Job Class Scope'
        ,'Create jobTitle attribute'
        ,'Create company attribute'
        ,'Create startYear attribute'
        ,'Create endYear attribute'
        ,'Start Display Method definition'
        ,'Open Display method Scope'
        ,'Display to console string template with all attributes'
        ,'Close Display Method Scope'
        ,'Close Job Class Scope'], 
        code:['public class Job'
        ,'{'
        ,'public string _jobTitle;'
        ,'public string _company;'
        ,'public int _startYear;'
        ,'public int _endYear;'
        ,'public void Display()'
        ,'{'
        ,'Console.WriteLine($"{_jobTitle} ({_company}) {_startYear}-{_endYear}");'
        ,'}'
        ,'}']},
        {step:'Create Resume Class File', 
        points:['Start Resume Class Definition',
        'Open Resume Class Scope',
        'create name attribute',
        'create list of Job Class called jobs',
        'Start Display Method definition',
        'Open Display Method Scope',
        'display{}: Write to console String template',
        'display{}: Write to console String template',
        'display{}: for each(variableType VariableForLoop in listName)',
        'Open for each loop',
        'display{}:foreach{}: display function from job objects',
        'Close For Each Loop',
        'Close Display Method Scope',
        'Close Resume Class Scope',], 
        code:['public class Resume',
        '{',
        'public string _name;',
        'public List<Job> _jobs = new List<Job>();',
        'public void Display()',
        '{',
        'Console.WriteLine($"Name: {_name}");',
        'Console.WriteLine("Jobs:");',
        'foreach (Job job in _jobs)',
        '{',
        'job.Display();',
        '}',
        '}',
        '}',]},
    ]
    const prove2Program = [
      {step:'Program.cs', 
      points:['Library that allows for writing files',
      'Library that allows for writing files',
      'Begining of Program Class Definition',
      'Open Program Class Scope',
      'Program{}: Begin Main Definition',
      'Program{}: Open Main Scope',
      'This clears all the annoying text out of the console',
      'assign value to choice so that it doesnt cause problems',
      'Begin While loop for duration of program 6 is the quit instruction, open scope',
      'Write line for first option newline character needs to be turned around and it will make it cleaner',
      'Write line for second option',
      'Write line for third option',
      'Write line for fourth option',
      'Write line for fifth option',
      'Write line for sixth option',
      'Write line for seventh option',
      'Write asking for user input',
      'value of user input is casted into an integer and assigned to the choice variable',
      'Set up switch statement withvariable.  Open switch scope',
      'Case 1 Start',
      'if case == 1, create new message object from Write Class',
      'from message object, call display prompt function()',
      'from message object, call getEntry function.  This takes the entry',
      'Break from case 1',
      'Case 2 Start',
      'create new display object from Display Class',
      'call getData function from display class',
      'Break from case 2',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',], 
      code:['using System;',
      'using System.IO;',
      'class Program',
      '{',
      'static void Main(string[] args)',
      '{',
      'Console.Clear();',
      'int choice = 0;',
      'while(choice != 6){',
      'Console.WriteLine("/n1) Write to Working File");',
      'Console.WriteLine("2) Display Working File");',
      'Console.WriteLine("3) Load Another File");',
      'Console.WriteLine("4) Save to Another File");',
      'Console.WriteLine("5) Clear Working File");',
      'Console.WriteLine("6) Quit");',
      'Console.WriteLine("7) Clear Console");',
      'Console.Write("Choose one: ");',
      'choice = int.Parse(Console.ReadLine());',
      ' switch(choice){',
      'case 1:',
      'Write message = new Write();',
      'message.displayPrompt();',
      'message.getEntry();',
      'break;',
      'case 2:',
      'Display display = new Display();',
      'display.getData();',
      'break;',
      'case 3:',
      'Load load = new Load();',
      'load.displayLoad();',
      'break;',
      'case 4:',
      'Save save = new Save();',
      'save.getFileName();',
      'break;',
      'case 5:',
      'using (StreamWriter outputFile = new StreamWriter("workingFile.txt"))',
      'outputFile.WriteLine("");',
      'break;',
      'case 6:',
      'Console.WriteLine("Thanks for playing!");',
      'break;',
      'case 7:',
      'Console.Clear();',
      'break;',
      'default:',
      'Console.WriteLine("Pick a real number!!!");',
      'break;',
      '}',
      '}',
      '}',
      '}',]},
      {step:'Display.cs', 
      points:['',
      '',
      '',
      '',
      '',
      '',
      '',
      '',], 
      code:['using System.IO;',
      'public class Display',
      '{',
      'public void getData(){',
      'string[] lines = System.IO.File.ReadAllLines("workingFile.txt");',
      'foreach (string line in lines){',
      'Console.WriteLine($"{line}");',
      '}}}']},
      {step:'Save.cs', 
      points:['',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',], 
      code:['using System.IO;',
      'public class Save{',
      'public void getFileName(){',
      'Console.WriteLine("WHat is the name of the file we will save to?");',
      'string saveFileName = Console.ReadLine();',
      'string[] lines = System.IO.File.ReadAllLines("workingFile.txt");',
      'foreach (string line in lines){',
      'using (StreamWriter outputFile = new StreamWriter(saveFileName,true))',
      'outputFile.WriteLine($"{line}");',
      '}}}']},
      {step:'Load.cs', 
      points:['',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',], 
      code:['public class Load{',
      'public void displayLoad(){',
      'Console.WriteLine("What file would you like to load into your working file?");',
      'string loadFile = Console.ReadLine();',
      'string[] lines = System.IO.File.ReadAllLines(loadFile);',
      'foreach (string line in lines){',
      'using (StreamWriter outputFile = new StreamWriter("workingFile.txt",true))',
      'outputFile.WriteLine($"{line}");',
      '}}}']},
      {step:'Write.cs', 
      points:['',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',], 
      code:['public class Write{',
      'int index;',
      'string prompt;',
      'public void displayPrompt(){',
      'string[] prompts = {"Who was the most interesting person I interacted with today?",',
      '"What was the best part of my day?",',
      '"How did I see the hand of the Lord in my life today?",',
      '"What was the strongest emotion I felt today?",',
      '"If I had one thing I could do over today, what would it be?", ',
      '"What super Power would you choose?"};',
      'Random rnd = new Random();',
      'index = rnd.Next(7);',
      'prompt = prompts[index];',
      'Console.WriteLine($"{prompt}");',
      'Console.Write(">");}',
      'public void getEntry(){',
      'string fileName = "workingFile.txt";',
      'string entry = Console.ReadLine();',
      'DateTime theCurrentTime = DateTime.Now;',
      'string dateText = theCurrentTime.ToShortDateString();',
      'using (StreamWriter outputFile = new StreamWriter(fileName,true))',
      'outputFile.WriteLine($"{dateText} {prompt} {entry}");',
      '}}']},

    ]
  const designActivityHead = ['Step', 'Questions', 'Responses']
  const designActivity = [
    {step:'review program specs' , 
    points:['What does the program do?',
    'What user inputs does it have?',
    'What output does it produce',
    'How does it end?',],
    response:[
      'The Program will take new entries by showing a random prompt, after they respond, the program will save the prompt, entry, and date to an entries file that the user can save to the journal file if they choose.  It will also display all saved entries on the screen when requested from a journal file. Finally it can display all the entries in the entry file',
      'The user will choose between writing an entry, displaying the entries, loading the journal file, saving the entries to the journal file or quiting.  They will need to enter journal entries, file names for saving',
      'The program outputs include random prompts, the date, display of working entries, display of journal files, extra would be to create JSON or CSV files',
      'When the user chooses Quit, the program closes',]},
    {step:'Determine the Classes', 
    points:['What are good candidates for classes in the program',
    'What is the primary responsibility of each class'],
    response:[
      'Write Class, Display Class, Load Class, Save Class, Quit Class',
      'Write class would randomly produce a prompt, accept an entry, get the date, add the entry to the entry list this doesnt need to exist in a file, just as objects, Display class just needs to show all the entry objects, Load class needs to display all the entries from a file. Save Class needs to take a file name to write all current entry objects to the file. Quit class needs to display a goodbye message',]},
    {step:'Define Class behavior', 
    points:['What should each class do?'],
    response:['I feel like I already answered this above.  I probably should have been less verbose there and moreso here',]},
    {step:'Define Class Attributes', 
    points:['What attributes does this class need to fulfil its behaviors',
    'What are the data Types of these member variables'],
    response:[
      'Write class needs date, prompts to randomly generate, an entry variable.  Display just needs to list the entries. Load needs a fileName to load from. Save needs a fileName to load to. Quit just needs an exit message',
      '',]},
  ]
//---------------------------------component return
    return(
        <div>
            <h2>C# Week:2 Abstraction</h2>
                <hr/> 
                <p>Abstraction is the process of turning complex ideas into simple ones. 
                    It is removing characteristics from something so that only the essential ones remain. 
                    As programmers, we create and use abstractions all the time.</p>
                <h3>Links</h3>
                    <TableMaker head={linksHead} array={links} tableType='links' />
                <h3>Videos</h3>
                    <iframe src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_6ya4vtjb&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_3xbqixpl" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="CSE 210 Journal Program Demo"></iframe>
                <h3>Class Diagram</h3>
                    <li>Person is the Class and is written capitalised</li>
                    <li>Attributes are written with underscores and camel case</li>
                    <li>Methods are captiatalized and show the return type</li>
                    <br/>
                    <img src='https://byui-cse.github.io/cse210-ww-course-2023/week02/images/person-class-diagram.png'></img>
                    <li>Class file will be a new csharp file in the same folder as the program folder.  Main can access that</li>
                <h3>Syntax</h3>
                    <TableMaker head={codeHead} array={syntax} tableType='coding' />
                <h3>Learning 2 Prepare</h3>
                <h3 class="step-reset">Activity Instructions</h3>
    <p>Practice the principle of abstraction by creating classes to represent a resume or an job history for a person like you might see on LinkedIn.</p>
    <h4 class="step">Design the Classes</h4>
    <p>You program should contain two classes one for a Job and one for the Resume itself, as follows:</p>

    <h5>Class: Job</h5>
    <ul>
      <li>Responsibilities:</li>
      <ul>
        <li>Keeps track of the company, job title, start year, and end year.</li>
      </ul>
      <li>Behaviors:</li>
      <ul>
        <li>Displays the job information in the format "<code>Job Title (Company) StartYear-EndYear</code>", for example: "<code>Software Engineer (Microsoft) 2019-2022</code>".</li>
      </ul>
    </ul>
    <h5>Class: Resume</h5>
    <ul>
      <li>Responsibilities:</li>
      <ul>
        <li>Keeps track of the person's name and a list of their jobs.</li>
      </ul>
      <li>Behaviors:</li>
      <ul>
        <li>Displays the resume, which shows the name first, followed by displaying each one of the jobs.</li>
      </ul>
    </ul>

    <p>Based on these descriptions, you could create class diagrams like the following:</p>

      <img src="https://byui-cse.github.io/cse210-ww-course-2023/week02/images/resume-class-diagrams.png"/>

    <h4 class="step">Create the Job class</h4>
    <ol>
      <li>Create a new file for your job class. By convention this should be named <code>Job.cs</code> .</li>
      <li>Create the class (Hint this is the <code>public class Job</code> syntax).</li>
      <li>Create member variables in the class for each element that this class should contain. By convention these member variables should begin with an underscore and a lowercase letter such as <code>_jobTitle</code> .</li>
    </ol>

    <h4 class="step">Test your Job class</h4>
    <ol>
      <li>Back in your Program.cs file, add code to your <code>Main</code> function.</li>
      <li>Create a new job instance named <code>job1</code> .</li>
      <li>Set the member variables using the dot notation for example, <code>job1._jobTitle = "Software Engineer";</code></li>
      <li>Verify that you can display the company of this job on the screen, again using the dot notation to access the member variable.</li>
      <li>Create a second job, set its variables, display this company on the screen as well.</li>
    </ol>

<p>Sample Output</p>
<pre><code class="plaintext">
Microsoft
Apple
</code></pre>

    <h4 class="step">Add a Display method to the Job class</h4>
    <ol>
      <li>Return to your <code>Job.cs</code> file and add a method (member function) to display the job details. This method should not have any parameters and does not need to return anything. By convention, this method should begin with a capital letter, such as <code>Display</code>, and if you have multiple words each word should be capitalized, such as <code>DisplayJobDetails</code> .</li>
      <li>This method should display the job details on the screen in the correct format. Remember that the method can access the member variables directly, without needing them to be passed into it.</li>
      <li>Return to your <code>Program.cs</code> file. Remove the lines of code where you displayed the company earlier, and replace them with calls to your new method. Remember that you call the method using the same dot notation such as <code>job1.Display();</code> .</li>
    </ol>

<p>Sample Output</p>
<pre><code class="plaintext">
Software Engineer (Microsoft) 2019-2022
Manager (Apple) 2022-2023
</code></pre>

    <h4 class="step">Create the Resume class</h4>
    <ol>
      <li>Create a new file for your <code>Resume</code> class. Each class should be in its own file and the file name should match the name of the class.</li>
      <li>Create the <code>Resume</code> class.</li>
      <li>Create the member variable for the person's name.</li>
      <li>Create the member variable for the list of Jobs. (Hint: the data type for this should be <code>List&lt;Job&gt;</code> , and it is probably easiest to initialize this to a new list right when you declare it..)</li>
    </ol>

    <h4 class="step">Test your Resume class</h4>
    <ol>
      <li>Return to your <code>Program.cs</code>. Add the end of the <code>Main</code> function, create a new instance of the <code>Resume</code> class.</li>
      <li>Add the two jobs you created earlier, to the list of jobs in the resume object.</li>
      <li>Verify that you can access and display the first job title using dot notation similar to <code>myResume._jobs[0]._jobTitle</code> .</li>
    </ol>

    <h4 class="step">Add a Display method to the Resume class</h4>
    <ol>
      <li>Return to your <code>Resume</code> class and add a method to display its details.</li>
      <li>This method should not have any parameters and should not return anything.</li>
      <li>In the method body, you should display the person's name and then iterate through each <code>Job</code> instance in the list of jobs and display them.</li>
      <li>Hint: remember that you can call each job's <code>Display</code> method that you created earlier.</li>
      <li>Return to your main function, remove any code that is displaying information, and instead, add a call at the end to the <code>Display</code> method from your <code>Resume</code> class to display the name and all the jobs in one line.</li>
    </ol>

<p>Sample Output</p>
Name: Allison Rose<br/>
Jobs:<br/>
Software Engineer (Microsoft) 2019-2022<br/>
Manager (Apple) 2022-2023<br/>
        <h3>Prepare Program</h3>
          <TableMaker head={codeHead} array={prepareProgram} tableType='coding'/> 
        <h3>Learning 2 Design Activity</h3>
          <TableMaker head={designActivityHead} array={designActivity} tableType='1LL'/>
          <img src='/csharp/journalDiagram.png'/>
        <h3>Learning 2 Prove</h3>
          <TableMaker head={codeHead} array={prove2Program} tableType='coding'/>
          <h4>How I went above and beyond</h4>
          <p>I put a clear console in two places in the program.  One at the beginning so you dont have to see all the file loading and one as a choice in the menu so you can  clear it as you go.  Also I added a response in case something other than the options is picked.  I actually made a file to hold the working entries so that there are actually two files in use.  I looked up switch statements and used that to make the code cleaner.</p>
        <h3>Learning 2 Ponder:Articulate</h3>
                <p>What is abstraction and why is it important?Explain the meaning of Abstraction. Provide an application of Abstraction. Use a code example of Abstraction from the program you wrote</p>
                <p>Abstraction is a way of thinking only about inputs and outputs.  essentially it is a way of turning code into a black box so that you only need to know what comes out when you put something in.  It is the same concept that API's work on in that you don't need to know all the ins and out of the code driving something if you know how to request what you want from it. In a sense all functions work on the principle of bstraction. Classes are just a broader use case of the concept.  There are many examples of abstraction within my code.  At any point that I call any class, there is abstraction there.When I write "message.displayPrompt();" I am exporting the work of using that memberfunction to the class and it does everything involver with that without me needing to type it and it can be done many times over.  Another example of abstraction is the StreamWriter library I used to make files.  I have no idea of what it is doing.  I just know how to use it and that is the essense of abstraction. </p>
        </div>  
    );
}

export default Abstraction;