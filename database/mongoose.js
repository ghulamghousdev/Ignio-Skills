const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose.connect("mongodb://ghulamghousdev:ggatazfm@ignioskills-shard-00-00.jj1pk.mongodb.net:27017,ignioskills-shard-00-01.jj1pk.mongodb.net:27017,ignioskills-shard-00-02.jj1pk.mongodb.net:27017/elearning?ssl=true&replicaSet=atlas-bou4tb-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, })
  .then( () => {
    console.log('Connected to database ')
  })
  .catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
  })