const mongoose = require('mongoose');
// DB Config
const db_mongo = {
  // MONGODB FORMAT -->  mongodb://username:password@host:port/database
    //mongoURI: 'mongodb+srv://admin:expo@cluster0-s8ukh.mongodb.net/Expocheck',
    secretOrKey: "secret",

};

mongoose.connect(db_mongo, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));