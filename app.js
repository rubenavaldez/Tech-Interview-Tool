const basicJavascriptModuleNames=[
    "Comment Your JavaScript Code",
    "Declare JavaScript Variables",
    "Storing Values with the Assignment Operator",
    "Initializing Variables with the Assignment Operator",
    "Understanding Uninitialized Variables",
    "Understanding Case Sensitivity in Variables",
    "Add Two Numbers with JavaScript",
    "Subtract One Number from Another with JavaScript",
    "Multiply Two Numbers with JavaScript",
    "Divide One Number by Another with JavaScript",
    "Increment a Number with JavaScript",
    "Decrement a Number with JavaScript",
    "Create Decimal Numbers with JavaScript",
    "Multiply Two Decimals with JavaScript",
    "Divide One Decimal by Another with JavaScript",
    "Finding a Remainder in JavaScript",
    "Compound Assignment With Augmented Addition",
    "Compound Assignment With Augmented Subtraction",
    "Compound Assignment With Augmented Multiplication",
    "Compound Assignment With Augmented Division",
    "Declare String Variables",
    "Escaping Literal Quotes in Strings",
    "Quoting Strings with Single Quotes",
    "Escape Sequences in Strings",
    "Concatenating Strings with Plus Operator",
    "Concatenating Strings with the Plus Equals Operator",
    "Constructing Strings with Variables",
    "Appending Variables to Strings",
    "Find the Length of a String",
    "Use Bracket Notation to Find the First Character in a String",
    "Understand String Immutability",
    "Use Bracket Notation to Find the Nth Character in a String",
    "Use Bracket Notation to Find the Last Character in a String",
    "Use Bracket Notation to Find the Nth-to-Last Character in a String",
    "Word Blanks",
    "Store Multiple Values in one Variable using JavaScript Arrays",
    "Nest one Array within Another Array",
    "Access Array Data with Indexes",
    "Modify Array Data With Indexes",
    "Access Multi-Dimensional Arrays With Indexes",
    "Manipulate Arrays With push()",
    "Manipulate Arrays With pop()",
    "Manipulate Arrays With shift()",
    "Manipulate Arrays With unshift()",
    "Shopping List",
    "Write Reusable JavaScript with Functions",
    "Passing Values to Functions with Arguments",
    "Global Scope and Functions",
    "Local Scope and Functions",
    "Global vs. Local Scope in Functions",
    "Return a Value from a Function with Return",
    "Understanding Undefined Value returned from a Function",
    "Assignment with a Returned Value",
    "Stand in Line",
    "Understanding Boolean Values",
    "Use Conditional Logic with If Statements",
    "Comparison with the Equality Operator",
    "Comparison with the Strict Equality Operator",
    "Practice comparing different values",
    "Comparison with the Inequality Operator",
    "Comparison with the Strict Inequality Operator",
    "Comparison with the Greater Than Operator",
    "Comparison with the Greater Than Or Equal To Operator",
    "Comparison with the Less Than Operator",
    "Comparison with the Less Than Or Equal To Operator",
    "Comparisons with the Logical And Operator",
    "Comparisons with the Logical Or Operator",
    "Introducing Else Statements",
    "Introducing Else If Statements",
    "Logical Order in If Else Statements",
    "Chaining If Else Statements",
    "Golf Code",
    "Selecting from Many Options with Switch Statements",
    "Adding a Default Option in Switch Statements",
    "Multiple Identical Options in Switch Statements",
    "Replacing If Else Chains with Switch",
    "Returning Boolean Values from Functions",
    "Return Early Pattern for Functions",
    "Counting Cards",
    "Build JavaScript Objects",
    "Accessing Object Properties with Dot Notation",
    "Accessing Object Properties with Bracket Notation",
    "Accessing Object Properties with Variables",
    "Updating Object Properties",
    "Add New Properties to a JavaScript Object",
    "Delete Properties from a JavaScript Object",
    "Using Objects for Lookups",
    "Testing Objects for Properties",
    "Manipulating Complex Objects",
    "Accessing Nested Objects",
    "Accessing Nested Arrays",
    "Record Collection",
    "Iterate with JavaScript While Loops",
    "Iterate with JavaScript For Loops",
    "Iterate Odd Numbers With a For Loop",
    "Count Backwards With a For Loop",
    "Iterate Through an Array with a For Loop",
    "Nesting For Loops",
    "Iterate with JavaScript Do...While Loops",
    "Profile Lookup",
    "Generate Random Fractions with JavaScript",
    "Generate Random Whole Numbers with JavaScript",
    "Generate Random Whole Numbers within a Range",
    "Use the parseInt Function",
    "Use the parseInt Function with a Radix",
    "Use the Conditional (Ternary) Operator",
    "Use Multiple Conditional (Ternary) Operators"
    ];

const ES6ModuleNames=[
    'Explore Differences Between the var and let Keywords',
    'Compare Scopes of the var and let Keywords',
    'Declare a Read-Only Variable with the const Keyword',
    'Mutate an Array Declared with const',
    'Prevent Object Mutation',
    'Use Arrow Functions to Write Concise Anonymous Functions',
    'Write Arrow Functions with Parameters',
    'Write Higher-Order Arrow Functions',
    'Set Default Parameters for Your Functions',
    'Use the Rest Operator with Function Parameters',
    'Use the Spread Operator to Evaluate Arrays In-Place',
    'Use Destructuring Assignment to Assign Variables from Objects',
    'Use Destructuring Assignment to Assign Variables from Nested Objects',
    'Use Destructuring Assignment to Assign Variables from Arrays',
    'Use Destructuring Assignment with the Rest Operator to Reassign Array Elements',
    'Use Destructuring Assignment to Pass an Object as a Function\'s Parameters',
    'Create Strings using Template Literals',
    'Write Concise Object Literal Declarations Using Simple Fields',
    'Write Concise Declarative Functions with ES6',
    'Use class Syntax to Define a Constructor Function',
    'Use getters and setters to Control Access to an Object',
    'Understand the Differences Between import and require',
    'Use export to Reuse a Code Block',
    'Use * to Import Everything from a File',
    'Create an Export Fallback with export default',
    'Import a Default Export'
    ];

const RegExModuleNames=[
    "Using the Test Method",
    "Match Literal Strings",
    "Match a Literal String with Different Possibilities",
    "Ignore Case While Matching",
    "Extract Matches",
    "Find More Than the First Match",
    "Match Anything with Wildcard Period",
    "Match Single Character with Multiple Possibilities",
    "Match Letters of the Alphabet",
    "Match Numbers and Letters of the Alphabet",
    "Match Single Characters Not Specified",
    "Match Characters that Occur One or More Times",
    "Match Characters that Occur Zero or More Times",
    "Find Characters with Lazy Matching",
    "Find One or More Criminals in a Hunt",
    "Match Beginning String Patterns",
    "Match Ending String Patterns",
    "Match All Letters and Numbers",
    "Match Everything But Letters and Numbers",
    "Match All Numbers",
    "Match All Non-Numbers",
    "Restrict Possible Usernames",
    "Match Whitespace",
    "Match Non-Whitespace Characters",
    "Specify Upper and Lower Number of Matches",
    "Specify Only the Lower Number of Matches",
    "Specify Exact Number of Matches",
    "Check for All or None",
    "Positive and Negative Lookahead",
    "Check For Mixed Grouping of Characters",
    "Reuse Patterns Using Capture Groups",
    "Use Capture Groups to Search and Replace",
    "Remove Whitespace from Start and End"
];

const DebuggingModuleNames=[
    "Use the JavaScript Console to Check the Value of a Variable",
    "Understanding the Differences between the freeCodeCamp and Browser Console",
    "Use typeof to Check the Type of a Variable",
    "Catch Misspelled Variable and Function Names",
    "Catch Unclosed Parentheses, Brackets, Braces and Quotes",
    "Catch Mixed Usage of Single and Double Quotes",
    "Catch Use of Assignment Operator Instead of Equality Operator",
    "Catch Missing Open and Closing Parenthesis After a Function Call",
    "Catch Arguments Passed in the Wrong Order When Calling a Function",
    "Catch Off By One Errors When Using Indexing",
    "Use Caution When Reinitializing Variables Inside a Loop",
    "Prevent Infinite Loops with a Valid Terminal Condition"
];

const BasicDataStructuresModuleNames=[
    "Use an Array to Store a Collection of Data",
    "Access an Array's Contents Using Bracket Notation",
    "Add Items to an Array with push() and unshift()",
    "Remove Items from an Array with pop() and shift()",
    "Remove Items Using splice()",
    "Add Items Using splice()",
    "Copy Array Items Using slice()",
    "Copy an Array with the Spread Operator",
    "Combine Arrays with the Spread Operator",
    "Check For The Presence of an Element With indexOf()",
    "Iterate Through All an Array's Items Using For Loops",
    "Create complex multi-dimensional arrays",
    "Add Key-Value Pairs to JavaScript Objects",
    "Modify an Object Nested Within an Object",
    "Access Property Names with Bracket Notation",
    "Use the delete Keyword to Remove Object Properties",
    "Check if an Object has a Property",
    " Iterate Through the Keys of an Object with a for...in Statement",
    "Generate an Array of All Object Keys with Object.keys()",
    "Modify an Array Stored in an Object"
];

const BasicAlgorithmScriptingModuleNames=[
    "Convert Celsius to Fahrenheit",
    "Reverse a String",
    "Factorialize a Number",
    "Find the Longest Word in a String",
    "Return Largest Numbers in Arrays",
    "Confirm the Ending",
    "Repeat a String Repeat a String",
    "Truncate a String",
    "Finders Keepers",
    "Boo who",
    "Title Case a Sentence",
    "Slice and Splice",
    "Falsy Bouncer",
    "Where do I Belong",
    "Mutations",
    "Chunky Monkey"
];

const ObjectOrientedProgrammingModuleNames=[
    "Create a Basic JavaScript Object",
    "Use Dot Notation to Access the Properties of an Object",
    "Create a Method on an Object",
    "Make Code More Reusable with the this Keyword",
    "Define a Constructor Function",
    "Use a Constructor to Create Objects",
    "Extend Constructors to Receive Arguments",
    "Verify an Object's Constructor with instanceof",
    "Understand Own Properties",
    "Use Prototype Properties to Reduce Duplicate Code",
    "Iterate Over All Properties",
    "Understand the Constructor Property",
    "Change the Prototype to a New Object",
    "Remember to Set the Constructor Property when Changing the Prototype",
    "Understand Where an Object’s Prototype Comes From",
    "Understand the Prototype Chain",
    "Use Inheritance So You Don't Repeat Yourself",
    "Inherit Behaviors from a Supertype",
    "Set the Child's Prototype to an Instance of the Parent",
    "Reset an Inherited Constructor Property",
    "Add Methods After Inheritance",
    "Override Inherited Methods",
    "Use a Mixin to Add Common Behavior Between Unrelated Objects",
    "Use Closure to Protect Properties Within an Object from Being Modified Externally",
    "Understand the Immediately Invoked Function Expression (IIFE)",
    "Use an IIFE to Create a Module"
];
let currentStudent = undefined;
$(document).on("click", "#get-student", function () {
    
    currentStudent = studentArray[Math.floor(Math.random() * studentArray.length)]
    //console.log(currentStudent)
    $("#student-div").text("Developer " +currentStudent.name);
    $("#question-div").text("")
        $("#challenge-div").text("")
        $("#module-img").attr("src","./images/493-4938095_vector-javascript-html5-css3-html-css-bootstrap-icon.png")
        $("#module-div").text("")
        $("#challenge-div").text("")
})








class Student {
    constructor(name,module, subModule){
        this.name = name;
        this.module = module
        this.subModule = subModule;
    }
}
//Name, Current Module, Current Submodule
const Augustine = new Student("Augustine", 2,8)
const Bruner = new Student("Bruner", 2,7)
const Carroll = new Student("Carroll", 2,4)
const Cook = new Student("Cook", 2,4)
const Dearman = new Student("Dearman", 2,7)
const Dickerson = new Student("Dickerson", 3,3)
const Frazier = new Student("Frazier", 2,8)
const Hardin = new Student("Hardin", 2,8)
const Hall = new Student("Hall",2, 5 )
const James = new Student("James", 2,3)
const Jones = new Student("Jones",2,5)
const Knox = new Student("Knox", 2,4)
const Ney = new Student("Ney",2,5)
const Ramos = new Student("Ramos",2,8)
const Simental = new Student("Simental",2,9)
const Spurgeon = new Student("Spurgeon", 2,7)
const Thomas = new Student("Thomas", 2 ,5)
const Turman = new Student("Turman",2,3)
const Wuori = new Student("Wuori",2,8)
const Yates = new Student("Yates",2,8)

let studentArray = [
    Thomas,
    Knox,
    Turman,
    James,
    Jones,
    Dearman,
    Ney,
    Spurgeon,
    Bruner,
    Frazier,
    Ramos,
    Hardin,
    Carroll,
    Cook,
    Hall,
    Dickerson,
    Simental,
    Yates,
    Augustine,
    Wuori   
];
// console.log(studentArray) 
class Module {
    constructor(name, subMods, pccArr, image, moduleURL){
        this.name = name;
        this.subMods = subMods;
        this.pccArr = [...pccArr];
        this.image = image;
        this.moduleURL = moduleURL; 
    }
}

const RWD = new Module("Responsive Web Design", 7, [
    {name:"Basic HTML and HTML5", challenges:28},
    {name:"Basic CSS", challenges:44},
    {name:"Applied Visual Design", challenges:52},
    {name:"Applied Accessibility", challenges:22},
    {name:"Responsive Web Design Principles", challenges:4},
    {name:"CSS Flex Box", challenges:17},
    {name:"CSS Grid", challenges:22}

], "./images/html_op.png", "http://code.perseverenow.org/learn/responsive-web-design/")
const JavaScript = new Module("JavaScript",9, [
       {name:"Basic Javascript", challenges:basicJavascriptModuleNames},
       {name:"ES6", challenges:ES6ModuleNames},
       {name:"Regular Expressions", challenges:RegExModuleNames},
       {name:"Debugging", challenges:DebuggingModuleNames},
       {name:"Basic Data Structures", challenges:BasicDataStructuresModuleNames},
       {name:"Basic Algorithm Scripting", challenges:BasicAlgorithmScriptingModuleNames},
       {name:"Object Oriented Programming", challenges:ObjectOrientedProgrammingModuleNames},
       {name:"Functional Programming", challenges:23},
       {name:"Intermediate Algorithm Scripting", challenges:21}],
        "./images/javascript_new.png", "http://code.perseverenow.org/learn/javascript-algorithms-and-data-structures/")

const FEL = new Module("Front End Libraries",6, [
        {name:"Bootstrap", challenges:31},
        {name:"jQuery", challenges:18},
        {name:"Sass", challenges:9},
        {name:"React", challenges:48},
        {name:"Redux", challenges:17},
        {name:"React and Redux", challenges:10}
],'./images/jquery2.png', "http://code.perseverenow.org/learn/front-end-libraries/" )
const DataVisualization = new Module("Data Visualization",2, [
    {name:"Data Visualization with D3", challenges:29},
    {name:"JSON APIs and Ajax", challenges:9}], "", "http://code.perseverenow.org/learn/data-visualization/" )
   // console.log(RWD)

const APIandMicro = new Module("FAPI's and Microservices",3, [
    {name:"Managing Packages with Npm", challenges:10},
    {name:"Basic Node and Express", challenges:12},
    {name:"MongoDB and Mongoose", challenges:9}
], "","http://code.perseverenow.org/learn/apis-and-microservices/" ) 
const InfoSec = new Module("Information Security with HelmetJS",3, [
    {name:"Information Security with HelmetJS", challenges:14},
    {name:"Quality Assurance and Testing with Chai", challenges:24},
    {name:"Advanced Node and Express", challenges:22}
],"", "http://code.perseverenow.org/learn/information-security-and-quality-assurance/")   

//console.log(JavaScript)
const moduleArray= [RWD, JavaScript, FEL, DataVisualization, APIandMicro, InfoSec] // add these submodule as you progres

  // Generate a question   
$(document).on("click", "#get-question", function () {
   
    if(currentStudent == undefined){
        $("#student-div").text("First choose a student")
    } else{
        // last completed sub module for current student
        let furthestSubModule = moduleArray[currentStudent.module-1].pccArr[currentStudent.subModule-1]
        console.log("Furthest completed module")
        console.log(furthestSubModule)
        let moduleSelector = currentStudent.subModule;

        //Randomly generate a sub module for the question 
        
        // console.log(RWD)
        // console.log(RWD.subMods)
        //which module
        let moduleIndex = Math.floor(Math.random()*  currentStudent.module)
        // console.log(moduleIndex)
        if(moduleIndex < currentStudent.module-1){
            console.log("The student has completed this module")
            //fix this line do not overwrite the object
            //currentStudent.subModule 
            moduleSelector= moduleArray[moduleIndex].subMods
        }
        
        //Set to javascript with array index during the prelimiary testing
                                    //Replace 1 with module Index
        //manually set to JavaScript
        moduleSelector = 4;
        moduleIndex = 1;

        //Module selcted at random
        let questionSubmodule = moduleArray[moduleIndex].pccArr[
        Math.floor(Math.random() *moduleSelector)
        ]
        let challengeText = questionSubmodule.challenges[Math.ceil(Math.random() *
            questionSubmodule.challenges.length-1)]; 
        let challengeUrl = moduleArray[moduleIndex].moduleURL + questionSubmodule.name.toLowerCase().split(" ").join("-") + "/" +challengeText.toLowerCase().split(" ").join("-") ; // need submodule url piece
            console.log(challengeUrl)
        // console.log("Question Submodule")

        //Push the submodule and challenge to HTML
        $("#question-div").text(questionSubmodule.name)
        $("#module-div").text(moduleArray[moduleIndex].name)
        
        // $("#challenge-div").text("Challenge " +Math.ceil(Math.random() *
        //     questionSubmodule.challenges))
        $("#challenge-div").text(challengeText)
        
        
        
            $("#module-img").attr("src",moduleArray[moduleIndex].image)
            
            








    }
})


/// idea : automatically create a link by joining the string with - 
//have it open a new window automatically so the studen't don't see 
//core knowledge card
//TES card

