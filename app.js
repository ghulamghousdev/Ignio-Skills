const express = require("express");
require("./database/mongoose");
const userRouter = require("./routes/user/user");
const app = express();

//Defining Port
const port = process.env.Port || 5000;

//To recognize incoming requests as json object.
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Ignio Skills listening at http://localhost:${port}`);
});
