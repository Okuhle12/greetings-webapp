
module.exports = function greetExerciseFactory(){

    var regex = /^[A-Za-z ]+$/;
    
    var namesArr = [];

    var greetMessage = "";
    


function greet_(language,namess){
    var newName = namess.toLowerCase()

    var upperCase = newName.charAt(0).toUpperCase();
    var deleteCharacter = newName.slice(1);
    var namess = upperCase + deleteCharacter;

    var regex = /^[A-Za-z ]+$/;
    var isValid = regex.test(namess);
     if (!isValid){
        return "invalid name"
    }

    
    if(!namesArr.includes(namess)){
        namesArr.push(namess);
    }

    
    if(language === "English"){
        greetMessage = "Hello, " + namess;        
    }
    else if(language === "Isixhosa"){
        
        greetMessage = "Molo, " + namess;
    }
    else if(language === "French"){
       
        greetMessage = "Bonjour, " + namess;

    }
        
}

function setGreet(userName, lang){
    // let userName  = user.charAt(0).toUpperCase() + user.toLowerCase().slice(1);
	if (lang === "English") {
        greetMessage1 = "Hello " + userName;
        } else if (lang === "isiXhosa") {
            greetMessage1 = "Molo " + userName;
        } else if (lang === "French") {
            greetMessage1 = "Bonjour, " + userName;
        }
}

function greeted(){
    return greetMessage;
}

//for writing my names in correct manner sta

function nameSet(name){
    var newName = name.toLowerCase()

    var upperCase = newName.charAt(0).toUpperCase();
    var deleteCharacter = newName.slice(1);
    var name = upperCase + deleteCharacter;

    if(!names.includes(name)){
        return names.push(name)
    }
}



function errorMessage(language, name){
    
    if (language === null && name ==""){
    return "Please enter your name and select langauge"
        
 
     }else if(!language){
        return "Please select langauge"
 
   
     }else if(!name){
         return "Please enter your name"
  
     }
     

    else if (!regex.test(name)){
         return "invalid name"
        }




}




// for my counter
function storedNames(names){

    var newName = names.toLowerCase()

    var upperCase = newName.charAt(0).toUpperCase();
    var deleteCharacter = newName.slice(1);
    var names = upperCase + deleteCharacter;

    var regex = /^[A-Za-z ]+$/;
    var isValid = regex.test(names);
    if (!isValid){
        return names.length;
    }
     
    //this help the app not to count one name twice when the name is greeted more than once


    if(!namesArr.includes(names)){
        return namesArr.push(names);
    }
    return;
}


function Counterr(){
     return namesArr.length;
     
}

function getName (){
    return namesArr;
}



    return{
        setGreet,
        nameSet,
        storedNames,
        Counterr,
        greet_,
        errorMessage,
        getName,
        greeted
    }

}


