import basicJavascriptModuleNames from "./module1names.js"
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
    constructor(name, subMods, pccArr, image){
        this.name = name;
        this.subMods = subMods;
        this.pccArr = [...pccArr];
        this.image = image;
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

], "./images/html_op.png")
const JavaScript = new Module("JavaScript",9, [
       {name:"Basic Javascript", challenges:107},
       {name:"ES6", challenges:26},
       {name:"Regular Expressions", challenges:33},
       {name:"Debugging", challenges:12},
       {name:"Basic Data Structures", challenges:20},
       {name:"Basic Algorithm Scripting", challenges:16},
       {name:"Object Oriented Programming", challenges:26},
       {name:"Functional Programming", challenges:23},
       {name:"Intermediate Algorithm Scripting", challenges:21}],
        "./images/javascript_new.png")

const FEL = new Module("Front End Libraries",6, [
        {name:"Bootstrap", challenges:31},
        {name:"jQuery", challenges:18},
        {name:"Sass", challenges:9},
        {name:"React", challenges:48},
        {name:"Redux", challenges:17},
        {name:"React and Redux", challenges:10}
],'./images/jquery2.png' )
const DataVisualization = new Module("Data Visualization",2, [
    {name:"Data Visualization with D3", challenges:29},
    {name:"JSON APIs and Ajax", challenges:9}] )
   // console.log(RWD)

const APIandMicro = new Module("FAPI's and Microservices",3, [
    {name:"Managing Packages with Npm", challenges:10},
    {name:"Basic Node and Express", challenges:12},
    {name:"MongoDB and Mongoose", challenges:9}
]) 
const InfoSec = new Module("Information Security with HelmetJS",3, [
    {name:"Information Security with HelmetJS", challenges:14},
    {name:"Quality Assurance and Testing with Chai", challenges:24},
    {name:"Advanced Node and Express", challenges:22}
])   

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
        moduleSelector = 0;
        moduleIndex = 1;

        //Module selcted at random
        let questionSubmodule = moduleArray[moduleIndex].pccArr[
        Math.floor(Math.random() *moduleSelector)
        ]


        // console.log("Question Submodule")

        //Push the submodule and challenge to HTML
        $("#question-div").text(questionSubmodule.name)
        $("#module-div").text(moduleArray[moduleIndex].name)
        $("#challenge-div").text("Challenge " +Math.ceil(Math.random() *
            questionSubmodule.challenges))
        $("#module-img").attr("src",moduleArray[moduleIndex].image)









    }
})
