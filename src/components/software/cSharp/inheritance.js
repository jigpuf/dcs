import React from 'react';
import TableMaker from '../../../utilities/tableMaker.js'


const Inheritance = () =>{
  const linksHead = ['Site', 'Purpose']
  const links =[
      {name:'Week 04 - Inheritance', purpose:'Top level Inheritance', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/index.html'},
      {name:'Wk 4 Inheritance', purpose:'Old Course', url:'https://byui-cse.github.io/cse210-course-competency/inheritance/materials/the-third-principle.html'},
      {name:'Inheritance Learning Activity', purpose:'Learning Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/prepare.html'},
      {name:'Wk 4 learning activity Solution', purpose:'Sample solution', url:'https://github.com/byui-cse/cse210-ww-student-sample-solutions/tree/main/prepare/Learning04'},
      {name:'Wk 4 Inheritance - Design Activity', purpose:'Design Activity', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/design.html'},
      {name:'Week 04 Develop: Mindfulness Program', purpose:'Instruction for Prove Program', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/develop.html'},
      {name:'Week 4 Inheritance - Articulate', purpose:'Articulate', url:'https://byui-cse.github.io/cse210-ww-course-2023/week04/articulate.html'},
  ]
  const codeHead = ['Step','Explain', 'Code']
  const prepare=[
    {step:'Program.cs', 
    points:['','',], 
    code:['','',]},
    {step:'Assignment.cs', 
    points:['','',], 
    code:['','',]},
    {step:'MathAssignment.cs', 
    points:['','',], 
    code:['','',]},
    {step:'WritingAssignment.cs', 
    points:['','',], 
    code:['','',]},
]
  const prove =[{step:'', points:['','',], code:['','',]},]
  const syntax =[
    {step:'Create the Parent Class', 
    points:['','','',], 
    code:['public class Person{',
    'public string GetName(){',
    'return "Joseph";}}',]},
    {step:'Create Child Class', 
    points:['','','',], 
    code:['public class Student : Person{',
    'public string GetNumber(){',
    'return "0123456789";}}',]},
    {step:'Create Student instance that uses parent class', 
    points:['','','',], 
    code:['Student student = new Student();',
    'string name = student.GetName();',
    'Console.WriteLine(name);']},
    {step:'Output', 
    points:['',], 
    code:['Joseph']},
]

    return(
        <div>
          <h1>C# Week:4 Inheritance</h1>
            <hr/>
            <p>Inheritance is the acquisition of attributes and methods through descendancy. In other words, inheritance is the mechanism by which one class obtains the attributes and methods of another class automatically or without having to type them. Consider the following code.</p>
            <p>Inheritance is the ability for one class to obtain the attributes and methods of another class directly, without having to type them. It follows the same idea of people inheriting certain characteristics from their parents.</p>
            <h2>Resources</h2>
              <details>
                <summary>Links</summary>
                <TableMaker head={linksHead} array={links} tableType='links' />
              </details>
              <details>
                <summary>Videos</summary>
                <div>
                  <p>Inheritance (8 minutes) (<a href="https://video.byui.edu/media/t/1_xdew8t7r">Direct link</a>)</p>
                  <figure class="video-container">
                  <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_xdew8t7r&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_grh4g5mi" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Inheritance Intro"></iframe>
                  </figure>
          
                  <p>Inheritance in C# (7 minutes) (<a href="https://video.byui.edu/media/t/1_luemyjq1">Direct link</a>)</p>
                  <figure class="video-container">
                  <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_luemyjq1&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_bfbj2gts" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Inheritance in C# Demo"></iframe>
                  </figure>
          
                  <p>Inheritance Details in C# (8 minutes) (<a href="https://video.byui.edu/media/t/1_lzxk0qgp">Direct link</a>)</p>
                  <figure class="video-container">
                  <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&playerId=kaltura_player&entry_id=1_lzxk0qgp&flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_wybbwq3h" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Inheritance Details in C#"></iframe>
                  </figure>
                  </div>
              </details>
              
            <h2>Prepare Assignment</h2>
              <p>Consider two classes, a <code>Person</code> and a <code>Student</code>. A person may have a certain set attributes and methods that all people share, such as <code>GetName()</code>. A student <em>is a</em> person, so the student should have all the properties and behaviors that a person does, but then a student may have other more specific items, such as a student ID number, which could be accessed via a <code>GetNumber()</code> method. In this case, we could have the Student class inherit all Person class functionality, and then add to it.</p>
              <TableMaker head={codeHead} array={syntax} tableType='coding' />
    
              <p>In this case, the <code>Person</code> class is known as a <strong>parent</strong> class. The <code>Student</code> class is known as a <strong>child</strong> class. They are also called <strong>base</strong> and <strong>derived</strong> or <strong>super</strong> and <strong>sub</strong> classes.  It doesn't matter what pair of terms you use as long as you understand the principle.</p>
              <p>The syntax for specifying an inheritance relationship is different from language to language but is always found in the declaration of the child class. In C#, when defining the name of the class, you use a colon followed by the name of the parent class. No other special syntax is required. </p>
    
              <p>A class diagram showing this relationship shows the base class on top and the derived class beneath it. An arrow with an open arrowhead goes from the derived class to the base class.</p>
              <p>The real benefit of inheritance is demonstrated in the last part of the example above. You are able to call the <code>GetName</code> method on an instance of <code>Student</code> even though it is not defined in that class. The <code>Student</code> class automatically got it by virtue of the inheritance relationship with <code>Person</code>.</p>
              <h4>Super and Base</h4>
              <p>In some circumstances, it is helpful to be able to call methods in a parent class from a child class. In C#, you use the <code>base</code> keyword. Consider the following code:</p>
              <pre><code>
                // a parent class called Person<br/>
                public class Person&#123;<br/>
                private string _name;<br/>
                public Person(string name)&#123;<br/>
                _name = name;&#125;<br/>
                public string GetName()&#123;<br/>
                return _name;&#125;&#125;<br/>
                // a child class called Student<br/>
                public class Student : Person&#123;<br/>
                private string _number;<br/>
                // calling the parent constructor using "base"!<br/>
                public Student(string name, string number) : base(name)&#123;<br/>
                _number = number;&#125;<br/>
                public string GetNumber()&#123;<br/>
                return _number;&#125;&#125;<br/>
              </code></pre>
    
              <pre><code>
                Student student = new Student("Brigham", "234");<br/>
                string name = student.GetName();<br/>
                string number = student.GetNumber();<br/>
                Console.WriteLine(name);<br/>
                Console.WriteLine(number);<br/>
              </code></pre>
    
              <p>Output:</p>
              <pre><code>
                Brigham<br/>
                234<br/>
              </code></pre>
    
              <p>In this example, the <code>Student</code> class inherits from the <code>Person</code> class. The <code>Student</code> constructor calls the <code>Person</code> constructor using the <code>base</code> keyword, and passes the name parameter through.</p>
              <p>Note that <code>base</code> is not limited to constructors. We can use it anywhere in the derived class methods, with dot notation, to invoke a behavior in the parent class as the following example shows.</p>
              <pre><code>
                string number = base.GetName();<br/>
                Console.WriteLine($"Student Number: &#123;number&#125;");<br/>
              </code></pre>
    
              <h4>Accessing Private Data</h4>
                <p>In the example above, the <code>Student</code> inherits the member variable <code>_name</code> from the base class, but because it is private, you cannot access <code>_name</code> directly in methods defined in the <code>Student</code> class. Consider a method for students called, <code>GetStudentInfo()</code> that returns both the student's name and id number. You may want to write something like the following:</p>
    
                <pre><code>
                  public class Student : Person&#123;<br/>
                  private string _number;...<br/>
      
                  public string GetStudentInfo()&#123;<br/>
                  // ERROR! This line doesn't work, because _name is private in the base class<br/>
                  return _name + " " + _number;&#125;&#125;<br/>
                </code></pre>
    
                <p>There are two ways to fix this problem. The first is to create a getter for the <code>_name</code> variable in the base class and then, in this method, you could call the getter to access the value.</p>
      
                <p>The other approach is to make the variable accessible to the derived class. We have previously learned about <code>public</code> and <code>private</code>, but there is another level in between them called <code>protected</code>. Member variables and methods that are labeled as <code>protected</code> can be accessed by methods in the class as well as by methods in derived classes, but they cannot be accessed by code outside of these classes.</p>
      
                <p>So which is better?</p>
      
                <p>Generally speaking, we should try to limit the access to variables as much as possible, so because making a member variable <code>protected</code> rather than <code>private</code> increases access to it, it can open the door for more problems later. So it is usually better to leave the variable <code>private</code> and use the getter. There are cases, however, where this causes more problems than it helps and it makes sense to make the variable <code>protected</code> and access it directly in the derived class.</p>
    
              <h4>In Summary</h4>
                <p>Inheritance is the third principle of programming with classes. The key to understanding it is to remember that inheritance is mechanism for code reuse. Instead of writing the same thing over and over again we can simply inherit from one class to another. </p>
            
                <p>Be careful though. As a certain uncle once said to his budding superhero nephew, "with great power comes great responsibility!" Discipline yourself in how you apply inheritance. Keep your hierarchies shallow and manageable. You'll be able to add more functionality in less time all while ensuring your program stays maintainable.</p>
            
            <h3>Activity Instructions</h3>
              <p>Practice the principle of inheritance by creating a base class and derived classes.</p>
              <p>For this activity, you will write classes to represent different kinds of homework assignments. Consider the following example of Math and writing assignments.</p>
          
              <h5>Math Assignments</h5>
                <p>A Math assignment may need to store the student's name, the topic (for example, "Fractions"), the textbook section (for example, "7.3"), and the problems from that section (for example, "3-10, 20-21").</p>
            
                <p>The Math assignment should have a constructor that requires a value for each of the items that it stores.</p>
                
                <p>The Math assignment needs to provide a method to return a summary of the assignment that contains the student's name and the topic, and it also needs to provide a method to display the Math homework list including the section number and the problems (for example, "Section 7.3 Problems 8-19").</p>
            
              <h5>Writing Assignments</h5>
                <p>A writing assignment may need to store the student's name, the topic (for example, "European History"), and the title of the assignment (for example, "The Causes of World War II").</p>
                
                <p>The writing assignment should have a constructor that requires a value for each of the items that it stores.</p>
            
                <p>The writing assignment needs to provide a method to return a summary of the assignment that contains the student's name and the topic, and it also needs to provide a method to get the writing information which consists of the title and the student's name (for example, "The Causes of World War II by Mary Waters").</p>
            
              <h4>Design the Classes</h4>
                <p>There are a number of things these classes have in common and a number of differences. Using inheritance, you can separate the things that change from the things that stay the same, putting the common elements in a base class and the differing elements in a derived class.</p>
            
                <p>Consider the following class diagram:</p>
      
    
        <p>From these diagrams you can see that the <code>_studentName</code> and <code>_topic</code> attributes are the same in both classes, and so is the <code>GetSummary()</code> method. Instead of duplicating these items, you can create a base class that they both inherit from.</p>
    
        <p>The following class diagram shows an approach that uses inheritance. This is the approach you will use for this assignment.</p>
  
        <h4>Start the Project</h4>
        <ol>
          <li>Open the class project in VS Code.</li>
          <li>Navigate to the <code>Learning04</code> project in the <code>prepare</code> directory. Find the <code>Program.cs</code> file, which will be your entry point for the program.</li>
          <li>Verify that you can run the project.</li>
        </ol>
    
        <h4>Create the base class</h4>
        <ol>
          <li>Begin by creating a new file and a class for your base <code>Assignment</code> class.</li>
          <li>Add the attributes as private member variables.</li>
          <li>Create a constructor for this class that receives a student name and topic and sets the member variables.</li>
          <li>Add the method for <code>GetSummary()</code> to return the student's name and the topic.</li>
          <li>Test your class by returning to the <code>Main</code> method in the <code>Program.cs</code> file. Create a simple assignment, call the method to get the summary, and then display it to the screen.</li>
        </ol>
    
    <p>Sample Output</p>
    <pre><code>
    Samuel Bennett - Multiplication
    </code></pre>
    
        <h3>Create the MathAssignment class</h3>
        <ol>
          <li>Create a new file for the <code>MathAssignment</code> class.</li>
          <li>Create this class and make sure to specify that it inherits from the base <code>Assignment</code> class.</li>
          <li>Add the attributes as private member variables. Make sure that you do not create new member variables for the ones you inherited from the base class.</li>
          <li>Create a constructor for your class that accepts all four parameters, have it call the base class constructor to set the base class attributes that way.</li>
          <li>Add the <code>GetHomeworkList()</code> method.</li>
          <li>Test your class by returning to the <code>Main</code> method and creating a new <code>MathAssignment</code> object and set its values. Make sure to test both the <code>GetSummary()</code> and the <code>GetHomeworkList()</code> methods.</li>
        </ol>
    
    <p>Sample Output</p>
    <pre><code>
    Roberto Rodriguez - Fractions
    Section 7.3 Problems 8-19
    </code></pre>
    
        <h3>Create the WritingAssignment class</h3>
        <ol>
          <li>Follow the same pattern as before by creating a new file for the <code>WritingAssignment</code> class.</li>
          <li>Create the class and set up the inheritance relationship.</li>
          <li>Add the member variables and set up the constructor as you did for the <code>MathAssignment</code> class.</li>
          <li>Add the <code>GetWritingInformation()</code> method.</li>
          <li>
            <p>Notice that this method needs to access the <code>_studentName</code> variable defined in the base class. Even though <code>WritingAssignment</code> class inherited this attribute, it is private, so you cannot access it directly in the derived class.</p>
            <p>To get the data you need for the method you can either make the variable <code>protected</code> in the base class, or you can create a public <code>GetStudentName</code> method to return it.</p>
          </li>
          <li>Return to <code>Main</code> and test your new class.</li>
        </ol>
    
    <p>Sample Output</p>
    <pre><code>
    Mary Waters - European History
    The Causes of World War II by Mary Waters
    </code></pre>
    
        <h3>Submission</h3>
        <ol>
          <li>Verify that each of your classes works as described above.</li>
          <li>Commit and push your code to your GitHub repository.</li>
          <li>Verify that you can see your updated code at GitHub.</li>
          <li>Submit the I-Learn quiz to report on your work.</li>
        </ol>
    <h3>Code for Prepare</h3>
    <TableMaker head={codeHead} array={prepare} tableType='coding' />
    <hr/>

    <h3>Designer</h3>
      <h2>Inheritance - Design Activity</h2>

      <h4>Review the Program Specification</h4>
      <ol>
        <li>What does the program do?</li>
        <li>What user inputs does it have?</li>
        <li>What output does it produce?</li>
        <li>How does the program end?</li>
      </ol>
  
      <h4>Define class behaviors</h4>
      <p>Now that you have decided on the classes, you will need and their responsibilities, the next step is to define the behaviors of these classes. These will become methods for the class.</p>
  
      <p>Go through each of your classes and ask:</p>
      <ol>
        <li>What are the behaviors this class will have in order to fulfill its responsibilities? (In other words, what things should this class <em>do</em>?)</li>
      </ol>
  
      <details>
        <summary>
          Guidance from a Mentor
        </summary>
  
        <p>The biggest trick here is that if any behavior is used by all the activities then you should include it in the base class.</p>
  
        <p>Common behaviors might include:</p>
        <ul>
          <li>Displaying the starting message</li>
          <li>Displaying the ending message</li>
          <li>Pausing while showing a spinner</li>
          <li>Pausing while showing a countdown timer</li>
        </ul>
  
        <p>The following behaviors might be similar in name, but different in the way they behave, so they would need to be defined separately for each derived class: (As a side note, in the next unit you will learn an even more clever way to handle methods like this.)</p>
  
        <ul>
          <li>Run the activity</li>
        </ul>
  
        <p>Finally, there are behaviors for each activity that are completely unique to that activity. For example, the <code>ReflectingActivity</code> would have behaviors like:</p>
  
        <ul>
          <li>Get a random prompt</li>
          <li>Get a random question about the prompt</li>
          <li>Display the prompt</li>
          <li>Display questions about the prompt and get answers</li>
        </ul>
  
        <p>Then it may also have other "helper" functions that are used internally to perform part of the task of these behaviors.</p>
  
        <p>The other activities may have behaviors that are similar to these. Take time to think about each of them.</p>
  
      </details>
  
  
      <h4>Define class attributes</h4>
      <p>Now that you have defined the classes, their responsibilities, and their behaviors, the next step is to determine what attributes the class should have, or what variables it needs to store.</p>
  
      <p>Go through each of your classes and ask:</p>
      <ol>
        <li>What attributes does this class need to fulfill its behaviors? (In other words, what variables should this class <em>store</em>?)</li>
        <li>What are the data types of these member variables?</li>
        <li>What constructors should each class have?</li>
      </ol>
  
      <details>
        <summary>
          Guidance from a Mentor
        </summary>
  
        <p>Once again, you need to think about the attributes that are in common and include them in the base class. Then, each derived class may have its own unique attributes as well.</p>
  
        <p>Base class attributes may include some such as:</p>
        <ul>
          <li>The activity name</li>
          <li>The description</li>
          <li>The duration in seconds</li>
        </ul>
  
        <p>What unique attributes might the other classes have? It may be that they don't have any, or it may be that they have some that are only used internally to facilitate the behaviors of that class, such as a list of prompts to select from.</p>
        
        <p>Take time to think about each one of these derived classes and their behaviors.</p>
  
      </details>
  
      <h4>Define Constructors</h4>
      <p>Now that you have defined the classes, including their methods and attributes, the next step is to think about the constructors you will need to create new instances of these classes. Remember that you can create multiple constructors with different parameters to make it easy to work with your classes.</p>
      <p>Remember, that constructors help set up the initial state of the object, so you should consider what data is necessary for that initial state.</p>
      <ol>
        <li><p>What constructors should each class have?</p>
          <ul>
            <li>In other words, what parameters should you pass in when creating an object of that type.</li>
          </ul>
        </li>
  
        <li><p>What other work needs to be done to set up these objects?</p>
          <ul>
            <li>For example, does the constructor need to run code to perform set up tasks, like creating lists, iterating through variables, etc.</li>
          </ul>
        </li>
      </ol>
  

        <summary>
          Guidance from a Mentor
        </summary>
  
        <p>The base class will need to initialize all of its member variables. You might require them to be passed in as parameters or you might have a constructor that sets some/all to default values to be changed later.</p>
  
        <p>The derived class constructor may be able to set good values in the base class even if you don't pass parameters to it. For example, a constructor that has no parameters could look like this:</p>
  
  <pre>
      public ReflectingActivity()
      &#123;
          _name = "Reflecting";
          _description = "This activity will help you reflect on times ...";
          _duration = 50;
  
          // Set other values here that are unique to the Reflecting Activity
          &#125;
  </pre>
  
        <p>The code above shows the most simple and straightforward way to do this, but these member variables could also be set using Setters or passed along to the base class constructor if desired.</p>
  
      <h3>Submission</h3>
      <TableMaker head={codeHead} array={prove} tableType='coding' />
      <p>After this team activity, each person needs to individually do the the following:</p>
      <ol>
        <li>
          <p>Complete a design based on the team discussion.</p>
          <ul>
            <li>Include a class diagram for each class you will need.</li>
            <li>Include some kind of description or chart showing how the program will run or how these methods relate to one another.</li>
            <li>You are welcome to use any drawings, diagrams, or other artifacts that you created as a team.</li>
            <li>You might also need to create a few more on your own, based on the discussion you had with your team.</li>
          </ul>
        </li>
        <li>Each person should individually submit their design to I-Learn.</li>
      </ol>
    <hr/>


        </div>
    );
    }

export default Inheritance;