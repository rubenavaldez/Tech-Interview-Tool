// name email address password age 

const { func } = require("prop-types");


let reqbody = {
    username: "YellowSubmarine74",
    user_password: 'Welcome1',
    user_address: '123 Main st',
    name: "Jane Doe",
    age: '32'
};

class UserProfile {
    constructor(uName, uPassword, rName, addr, age) {
        this.faceBookUserName = uName;
        this.faceBookUserPassword = encrypt(uPassword);
        this.faceBookUserRealName = rName;
        this.faceBookUserAddress = addr;
        this.faceBookUserAge = parseInt(age);
        this.adminAccess = false;
        this.paidUser = false;
        this.bizUser = false;
        this.gender = undefined;
        this.proNouns = undefined;
        this.politicalParty = undefined;
        this.marketingPreferences = [];
        this.blockedUsers = [];

    }
    get birthYear(){
        return 2021 - this.age;

    }
    set changePronouns(val){
        this.proNouns = val;
    }

}

const User = new UserProfile(reqbody.username, reqbody.user_password, reqbody.name, reqbody.user_address, reqbody.age)
const SecondUser = new UserProfile(reqbody.username, reqbody.user_password, reqbody.name, reqbody.user_address, reqbody.age)


function updateAddress(currentUser, str) {

    currentUser.faceBookUserAddress = str;
}

updateAddress(User, "1600 Pennsylvania ave")

function encrypt(password) {

    return [password, true]

}

let json = { 
"Title": "28 Days Later: The Aftermath (Chapter 3) - Decimation", 
"Year": "2007", 
"Rated": "N/A", 
"Released": "09 Oct 2007", 
"Runtime": "5 min", 
"Genre": "Animation, Short, Horror", 
"Director": "Jamieson Fry", "Writer": "Steve Niles", "Actors": "Resmine Atis, Mitchell Barnett, Kirstin Eggers, Mack Greenlaw", "Plot": "A short story set in London during the time period of the film 28 Days Later... (2002), told in the form of an animated comic strip.", "Language": "English", "Country": "UK", "Awards": "N/A", "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NTVkMTktYTA4MC00NWU0LWFjNDktZDZiMTNjNzE5MzQ1XkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_SX300.jpg", 
"Ratings": [{ "Source": "Internet Movie Database", "Value": "6.5/10" }], "Metascore": "N/A", "imdbRating": "6.5", "imdbVotes": "339", "imdbID": "tt1132131", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "N/A", "Website": "N/A", "Response": "True" }