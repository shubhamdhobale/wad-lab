// server.js
const express = require('express');
const path = require('path')
const app = express();
const PORT =  3000;

// Serve static files from the 'public' directory

//defing routes
app.get('/' , ( req,res) => {
    res.sendFile('./public/index.html', { root: __dirname });

})

app.get('/contact' , ( req,res) => {
    res.sendFile('./public/contact.html', { root: __dirname });

})
app.get('/movies' , ( req,res) => {
    res.sendFile('./public/movies.html', { root: __dirname });
})


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
