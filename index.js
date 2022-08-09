require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// GET /places  

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)


/*
3. Repeat the process above that you followed for creating a view for both the home page and 404 page.



Import React and your default component.
Make a function called index and fill it with some stub HTML.
Export the index function.
If you forgot how to do these steps, refer to the directions you followed for the 404 page or the home page.

*/