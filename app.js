const express = require('express')
require("./database/mongoose");
const app = express()



//Defining Port 
const port = process.env.Port || 3001;

//Routers 
const userRoute = require("./routes/user/user")

//To recognize incoming requests as json object.
app.use(express.json());
app.use(userRoute);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
}

app.listen(port, () => {
  console.log(`Ignio Skills listening at http://localhost:${port}`)
})