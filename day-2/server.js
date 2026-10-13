const express = require('express');

const app = express(); 

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.get('/about',function(req,res) {
    res.send('This is about Page')
});

app.get('/home',(req,res) => {
 res.send('this is home page')

})

app.get('/contact',(req,res) => {
    res.send('this is contact page')
})



app.listen(3000) 