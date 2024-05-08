// server.js
const express = require('express');
// const path = require('path')
const app = express();
const PORT =  3000;

// Serve static files from the 'public' directory
//using middleware
// app.use(express.static(path.join(__dirname, 'public')));

//defing routes
app.get('/' , ( req,res) => {
    res.sendFile('./public/index.html')
})

app.get('/contact' , ( req,res) => {
    res.sendFile('./public/contact.html')
})
app.get('/movies' , ( req,res) => {
    res.sendFile('./public/movies.html')
})


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
