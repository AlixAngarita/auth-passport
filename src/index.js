const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport')

//settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.urlencoded({extended:false})) 
app.use(express.json({type:"application/json"})) // solo se analizara json
// passport
app.use(passport.initialize())
require('../src/passport/local-strategy')

// Configure Express application.
app.use(require('morgan')('dev'));


// Connect to MongoDB
require('./database.config')



app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

//routes
app.use(require('./routes/auth'));