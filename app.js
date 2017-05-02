const fs = require('fs');
var prompt = require('readline-sync');


fs.readFile('exampleData.js', 'utf8',(err, data) => {
  var parsedData = JSON.parse(data)
  if (err){
  	throw err;
  } 
 console.log(parsedData[0].id)
});

