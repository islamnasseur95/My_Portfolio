const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000;


app.set('view engine', 'ejs')

app.set('views', './views')

app.use('/assets', express.static(__dirname + '/assets'));

app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.render('index', {});
})

app.listen(PORT, ()=>{
    console.log(`Server Running on port${PORT}`)
});

