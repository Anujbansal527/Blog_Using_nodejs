const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000 ;

app.use(express.json());

const routeBlog = require("./Routes/routes");
app.use("/api/v1",routeBlog);

app.listen(PORT, () =>
    {
     console.log(`Server start at ${PORT}`)
    });


try
{
const dbConnect = require("./Config/connectingDB");
dbConnect.connectingDB();
}
catch(err){
    console.log(err);
}

app.get("/",(req,res) =>{
    res.send("home diretcory");
});