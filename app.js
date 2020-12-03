const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const paymentDefault = require('./routes/default')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://database:27017/default', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/payment', paymentDefault)

const port = 5959

app.listen(port, () =>{
  console.log(`Server started on port ${port}`)
})