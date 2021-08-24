



module.exports = function greetExerciseFactory(){

    var regex = /^[A-Za-z ]+$/;
    
    var namesArr = [];
    


function greet_(language,names_){
    var newName = names_.toLowerCase()

    var upperCase = newName.charAt(0).toUpperCase();
    var deleteCharacter = newName.slice(1);
    var names_ = upperCase + deleteCharacter;

    var regex = /^[A-Za-z ]+$/;
    var isValid = regex.test(names_);
     if (!isValid){
        return "invalid name"
    }

    
    if(!namesArr.includes(names_)){
        namesArr.push(names_);
    }

    
    if(language === "English"){
        return "Hello, " + names_;        
    }
    else if(language === "Isixhosa"){
        
        return "Molo, " + names_;
    }
    else if(language === "French"){
       
        return "Bonjour, " + names_;

    }
        
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
        nameSet,
        storedNames,
        Counterr,
        greet_,
        errorMessage,
        getName
    }

}


