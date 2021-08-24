
const assert = require('assert');

const greetExerciseFactory = require('../greetingFactory');


// describe('The greetings exercise unit tests', function(){
    

        describe('Languages', function(){
    
            


        it('Should be able to greet people in English', function(){

            let greets = greetExerciseFactory();
            greets.greet_("English", "AmanDa")
       
        
        assert.equal("Hello, Amanda", greets.greeted());
    
             

    });


    
    it('Should be able to greet people in English', function(){

        let greets = greetExerciseFactory();
        greets.greet_('English', 'qaqamba')

    
    
    assert.equal("Hello, Qaqamba", greets.greeted());
   });
   it('Should be able to greet people in English', function(){

    let greets = greetExerciseFactory();
    greets.greet_('English', 'zUSIPhe')
    



assert.equal("Hello, Zusiphe", greets.greeted());
});



   it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();
    greets.greet_('Isixhosa', 'KuNGAwo')



  assert.equal("Molo, Kungawo", greets.greeted());

  });
  it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();
    greets.greet_('Isixhosa', 'Sisamkelo')


  assert.equal("Molo, Sisamkelo", greets.greeted());

  });
  it('Should be able to greet people in Isixhosa', function(){

    let greets = greetExerciseFactory();
    greets.greet_('Isixhosa', 'OlweTHU')


  assert.equal("Molo, Olwethu", greets.greeted());

  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();
    greets.greet_('French', 'SaKHiwo')



  assert.equal("Bonjour, Sakhiwo", greets.greeted());
  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();
    greets.greet_('French', 'LihlE')



  assert.equal("Bonjour, Lihle", greets.greeted());
  });
  it('Should be able to greet people in French', function(){

    let greets = greetExerciseFactory();
    greets.greet_('French', 'LeeeH')



  assert.equal("Bonjour, Leeeh", greets.greeted());
  });
  it('Should return "invalid name" when a character greeted contains numbers and string', function(){

    let greets = greetExerciseFactory();
    greets.greet_("English", "amanda2222")



assert.equal("", greets.greeted());

     

});

it('Should return "invalid name" when a character greeted contains numbers and strings', function(){

    let greets = greetExerciseFactory();



assert.equal("invalid name", greets.greet_("English", "kulo5555222255222!!!!!1*"));

});

it('Should return "invalid name" when a character greeted contains numbers and string', function(){

    let greets = greetExerciseFactory();



assert.equal("invalid name", greets.greet_("English", "Noloyiso897&&&%"));

});





  });
  
  describe('Counter', function(){
    
            


    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("Amish")

        assert.equal(2, greets.Counterr());
    });

    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("AmAnDA");

        assert.equal(1, greets.Counterr());
    });
    it('Should be able to count the number of people greeted', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda");
        greets.storedNames("Amish");
        greets.storedNames("KungA");


        assert.equal(3, greets.Counterr());
    });


    it('Should not count when the character contains numbers and strings', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda22");
        greets.storedNames("AmAnDA!");

        assert.equal(0, greets.Counterr());
    });
    it('Should not count when the character contains numbers and strings', function(){

        let greets = greetExerciseFactory();

        greets.storedNames("Amanda22");
        greets.storedNames("AmAnDA!");
        greets.storedNames("AmAnDA");

        assert.equal(1, greets.Counterr());
    });
});

describe('Error Messages', function(){
    

    it('Should be able to return an error message that says "Please enter your name and select langauge" when no name is typed in the text box and no language is selected', function(){

        let greets = greetExerciseFactory();

   
    
    assert.equal("Please enter your name and select langauge", greets.errorMessage(null, ""));
    
})
it('Should be able to return an error message that says "Please select langauge" When no language is selected and name is entered in the text box', function(){

    let greets = greetExerciseFactory();



assert.equal("Please select langauge", greets.errorMessage(null, "Amanda"));
})
it('Should be able to return an error message that says "Please enter your name" When language is selected and  no name is entered in the text box', function(){

    let greets = greetExerciseFactory();



assert.equal("Please enter your name", greets.errorMessage("English", ""));
})
})
