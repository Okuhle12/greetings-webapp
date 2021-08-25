const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const Greetings = require('./greetingFactory')
const GreetMe = Greetings()
let app = express()


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

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function(req, res){

    
 res.render('index' , {
    counter: GreetMe.Counterr(),
    displayMessage: GreetMe.greeted()

 }); 
 });


// app.post('/', (req, res) =>{
    
//     // GreetMe.nameSet(names);


//     res.redirect('/')
    
// });

app.post('/', function(req, res){
    const {namess, language} = req.body;
    GreetMe.greet_(language,namess),
    GreetMe.storedNames(namess),
    res.redirect('/')
});

app.get('/greeted', function(req, res){
    let greetedNames = GreetMe.getName();
    res.render('userList', {namesList: greetedNames})
})


const PORT = process.env.PORT || 8000;


app.listen(PORT, function(){
    console.log('App started at port:',PORT)
});
