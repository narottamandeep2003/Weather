const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT ||8000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, './static')))
app.get('/', (req, res) => {

    res.render('index');

})
app.get('/about', (req, res) => {

    res.end("about");
})
app.get('*', (req, res) => {
    res.status(404)
    res.end("error")
})
app.listen(port, () => {
    console.log("start");
})