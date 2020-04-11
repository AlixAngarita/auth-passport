const express = require('express');
//const passport = require('passport')
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/auth'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});