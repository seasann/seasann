// write to js file
const fs = require('fs')
const path = require('path');
const { marked } = require('marked');

let directoryPath = path.join(__dirname, '/posts')
const content = `
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello!")
})

app.listen(port, () => {
  console.log("Example app listening on port " + port);
})
`
fs.writeFile('./express.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
})


console.log('Buiding...')
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {      
      let nfile = path.parse(file).name;
      let acontent = `
app.get('/${nfile}', (req, res) => {
  res.sendFile('./app/${nfile}.html', { root: __dirname })
})
      `
      fs.appendFile('./express.js', acontent, err => {
        if (err) {
          console.error(err)
          return
        }
      })
      fs.readFile(`./posts/${file}`, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const nhtml = marked.parse(data);
        fs.writeFile(`./app/${nfile}.html`, nhtml, err => {
          if (err) {
            console.error(err)
            return
          }
        })
      });




    });
});

console.log('Done! You can now run the the app by running')
console.log('')