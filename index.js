const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greetings = require('./greetingFactory')

const flash = require('express-flash');
const session = require('express-session');

const GreetMe = Greetings()
let app = express()

app.use(session({
    secret : '<add a secret string here>',
    resave: false,
    saveUninitialized: true
  }));

  // initialise the flash middleware
  app.use(flash());


// const handlebarSetup = exphbs({
//     partialsDir: './views/partials',
//     viewPath: './views',
//     layoutsDir: './views/layouts'
//   });

//setup handlebars ,Body-parser and public
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ layoutsDir: './views/layouts' }));


// app.engine('handlebars', handlebarSetup);
// app.set('view engine", "handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function (req, res) {

    // var name = req.body.namess
    // var language = req.body.language

    // req.flash('error',  GreetMe.errorMessage(language, name))
    res.render('index', {
        counter: GreetMe.Counterr(),
        displayMessage: GreetMe.greeted()


    });
});


// app.post('/', (req, res) =>{

//     // GreetMe.nameSet(names);


//     res.redirect('/')

// });

app.post('/', function (req, res) {
    // const { namess, language } = req.body;

    var name = req.body.namess
    var language = req.body.language

if (name == '' && language == null){
    req.flash('error', 'Please enter your name and select langauge')

}else if ( name !== '' && language == null) {

    req.flash('error', 'Please select langauge');

}
else if ( name == '' && language !== '') {

    req.flash('error', 'Please enter name');

}else{

    GreetMe.greet_(language, name),
        GreetMe.storedNames(name)
    }

        res.redirect('/')
});

app.get('/greeted', function (req, res) {
    let greetedNames = GreetMe.getName();
    res.render('userList', { namesList: greetedNames })
})

// app.get('/timesGreeted' , function(req, res){
//     const countList = req.params.countList;

//      res.render('times', 

//      {countList, countListed: greeted})

// })

app.get('/greeted/:theNames', function (req, res) {

    let countList = req.params.theNames
    console.log(countList)
    let greetedNames = GreetMe.getName();

    res.render('times',
        {
            names: countList,
            counter: greetedNames[countList]

        })
})


// app.get('/greeted', function (req, res) {
// // const errorMessages = {
// //     'name': req.body.namess,
// //     'language': req.body.language

// // };

// var name = req.body.namess
// var language = req.body.language

// if (name == '' && language ===null){
//     req.flash('error', 'Please enter your name and select langauge')
//     res.redirect('/');
// }else if ( name !== '' && language == null) {
//     req.flash('error', 'Please select langauge');
//     res.redirect('/')
// }


//     req.flash('info', 'Flash Message Added');
//     res.redirect('/');
// });

const PORT = process.env.PORT || 8000;


app.listen(PORT, function () {
    console.log('App started at port:', PORT)
});
