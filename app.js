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
    {name:"Basic HTML and HTML5", challenges:BasicHTMLandHTML5ModuleNames},
    {name:"Basic CSS", challenges:BasicCSSModuleNames},
    {name:"Applied Visual Design", challenges:AppliedVisualDesignModuleNames},
    {name:"Applied Accessibility", challenges:AppliedAccessibilityModuleNames},
    {name:"Responsive Web Design Principles", challenges:ResponsiveWebDesignPriniciplesModuleNames},
    {name:"CSS Flex Box", challenges:CSSFlexboxModuleNames},
    {name:"CSS Grid", challenges:CSSGridModuleNames}

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
            
            //opens a new window with the challenge url
            window.open(challengeUrl, "challenge-window", "height=800,width=1200");
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

