var fs = require('fs');
var prompt = require('readline-sync');

var findData = function() {
	this.allData = function(){
		fs.readFile('exampleData/allData.js', 'utf8',(err, data) => {
		  var parsedAllData = JSON.parse(data)
		  if (err){
		  	throw err;
		  } 
		 console.log(parsedAllData)
		});
	}
	this.dataByBugIssueType = function(){
		fs.readFile('exampleData/dataByBugIssueType.js', 'utf8',(err, data) => {
		  var parsedData = JSON.parse(data)
		  if (err){
		  	throw err;
		  } 
		 console.log(parsedData)
		});
	}	
}

findData.prototype.isWhatTypeOfData = function(){

}

findData.prototype.DataNotFound = function (){
	console.log('Data not found, please try another query');
} 

findData.prototype.search = function(){
	// this.allData();
	// this.DataNotFound();
	this.dataByBugIssueType();
}


var query = new findData();
query.search();


