const express = require('express')
const app = express()
const concatenateStrings = require('concatenation')

let myArray = ['premier élément', 'deuxième élément', 'troisième élément'];
let separator = '--';
let concatenatedString = concatenateStrings(myArray, separator);

app.get('/', function (req, res) {
  res.send(concatenatedString)
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})