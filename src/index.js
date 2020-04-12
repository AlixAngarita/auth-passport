const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.urlencoded({extended:true})) // analiza urlencoded
app.use(express.json({type:"application/json"})) // solo se analizara json
// Configure Express application.
app.use(require('morgan')('combined'));

// Connect to MongoDB
require('./database.config')


//routes
app.use(require('./routes/auth'));


app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});