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
    {name:"CSS FlexBox", challenges:CSSFlexboxModuleNames},
    {name:"CSS Grid", challenges:CSSGridModuleNames}

], "./images/html_op.png", "http://192.168.0.253:8000/learn/responsive-web-design/")
const JavaScript = new Module("JavaScript",9, [
       {name:"Basic Javascript", challenges:basicJavascriptModuleNames},
       {name:"ES6", challenges:ES6ModuleNames},
       {name:"Regular Expressions", challenges:RegExModuleNames},
       {name:"Debugging", challenges:DebuggingModuleNames},
       {name:"Basic Data Structures", challenges:BasicDataStructuresModuleNames},
       {name:"Basic Algorithm Scripting", challenges:BasicAlgorithmScriptingModuleNames},
       {name:"Object Oriented Programming", challenges:ObjectOrientedProgrammingModuleNames},
       {name:"Functional Programming", challenges:FunctionalProgrammingModuleNames},
       {name:"Intermediate Algorithm Scripting", challenges:IntermediateAlgorithmScriptingModuleNames}],
        "./images/javascript_new.png", "http://192.168.0.253:8000/learn/javascript-algorithms-and-data-structures/")

const FEL = new Module("Front End Libraries",6, [
        {name:"Bootstrap", challenges:BootstrapModulenames},
        {name:"jQuery", challenges:JQueryModuleNames},
        {name:"Sass", challenges:SassModuleNames},
        {name:"React", challenges:ReactModuleNames},
        {name:"Redux", challenges:ReduxModuleNames},
        {name:"React and Redux", challenges:ReactAndReduxModuleNames,}
],'./images/jquery2.png', "http://192.168.0.253:8000/learn/front-end-libraries/" )
const DataVisualization = new Module("Data Visualization",2, [
    {name:"Data Visualization with D3", challenges:DataVisualizationWithD3},
    {name:"JSON APIs and Ajax", challenges:JSONAPIsAndAjaxModuleNames}], "./images/d3js-icon.png", "http://192.168.0.253:8000/learn/data-visualization/" )
   // console.log(RWD)

const APIandMicro = new Module("API's and Microservices",3, [
    {name:"Managing Packages with Npm", challenges:ManagingPackagesWithNPMModuleNames},
    {name:"Basic Node and Express", challenges:BasicNodeAndExpress},
    {name:"MongoDB and Mongoose", challenges:MongoDBAndMongoose}
], "./images/node.png","http://192.168.0.253:8000/learn/apis-and-microservices/" ) 
const InfoSec = new Module("Information Security with HelmetJS",3, [
    {name:"Information Security with HelmetJS", challenges:InformationSecurityWithHelmetJSModuleNames},
    {name:"Quality Assurance and Testing with Chai", challenges:QualityAssuranceAndTestingWithChaiModuleNames},
    {name:"Advanced Node and Express", challenges:AdvancedNodeandExpressModuleNames}
],"./images/mongo.png", "http://192.168.0.253:8000/learn/information-security-and-quality-assurance/")   

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

        //all module test
        // moduleIndex = Math.floor(Math.random()*  6)
        // moduleSelector = moduleArray[moduleIndex].subMods
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
        // moduleSelector = 3;
        // moduleIndex = 1;

        //All Module Test
        // moduleIndex = Math.floor(Math.random() *5)
        // moduleSelector= moduleArray[moduleIndex].subMods

        //Module selcted at random
        let questionSubmodule = moduleArray[moduleIndex].pccArr[
        Math.floor(Math.random() *moduleSelector)
        ]
        let challengeText = questionSubmodule.challenges[Math.ceil(Math.random() *
            questionSubmodule.challenges.length-1)]; 
            console.log( questionSubmodule)
        let challengeUrl = moduleArray[moduleIndex].moduleURL + questionSubmodule.name.toLowerCase().split(" ").join("-") + "/" +challengeText.toLowerCase().split(" ").join("-") ; // need submodule url piece
            console.log(challengeUrl)
            
            //opens a new window with the challenge url
            window.open(challengeUrl, "challenge-window", "height=800,width=1200");
        // console.log("Question Submodule")
           // console.log(`Module ${moduleArray[moduleIndex].name} Submodule ${questionSubmodule.name} Challenge ${challengeText}`)
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

