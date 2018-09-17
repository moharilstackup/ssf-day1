//Load libraries
const express = require("express");
const path = require("path");

//Create an instance of express
const app = express();

//middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

//Start the app with listening at port 3000
app.listen(3000, () => {
    console.info("Application started on port 3000");
    console.info("Running directory is  ", __dirname);
    console.info("Public directory is ", path.join(__dirname, "public"));
}
);

app.use((req,resp) => {
    resp.status(404);
    resp.sendfile(path.join(__dirname, "images","404.png"));
 });
 

//  const s = express.static(__dirname + "/public");
//  console.log('Type = ', typeof s );
//  console.log('Value ', s );


