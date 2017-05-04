var fs = require('fs');
var prompt = require('readline-sync');

var findData = function() {
	this.allData = function(){
		fs.readFile('exampleData/allData.js', 'utf8',(err, data) => {
		  var parsedData = JSON.parse(data);
		  if (err){
		  	throw err;
		  } 
		 console.log(parsedData)
		});
	}
	this.dataByBugIssueType = function(){
		fs.readFile('exampleData/dataByBugIssueType.js', 'utf8',(err, data) => {
		 var parsedData = JSON.parse(data);	
		  if (err){
		  	throw err;
		  } 
		console.log(parsedData)
		});
	}	
	this.dataByStoryIssueType = function(){
		fs.readFile('exampleData/dataByStoryIssueType.js', 'utf8',(err, data) => {
		  var parsedData = JSON.parse(data);
		  if (err){
		  	throw err;
		  } 
		 console.log(parsedData)
		});
	}		
}

findData.prototype.findEstimateForAll = function(){
	fs.readFile('exampleData/allData.js', 'utf8',(err, data) => {
		var parsedData = JSON.parse(data);
		if (err) {
			throw err; 
		}
		var estimate = 0;
		for(var i = 0; i < parsedData.length; i++){
				if(parsedData[i].estimate){
					estimate = +estimate + +parsedData[i].estimate;
				}
			}
		console.log('This is estimate:', estimate)
	})
}

findData.prototype.findEstimateForBug = function(){
	fs.readFile('exampleData/dataByBugIssueType.js', 'utf8',(err, data) => {
		var parsedData = JSON.parse(data);
		if (err) {
			throw err; 
		}
		var estimate = 0;
		for(var i = 0; i < parsedData.length; i++){
				estimate = +estimate + +parsedData[i].estimate;
			}
		console.log('This is estimate:', estimate)
	})
}

findData.prototype.findEstimateForStory = function(){
	fs.readFile('exampleData/dataByStoryIssueType.js', 'utf8',(err, data) => {
		var parsedData = JSON.parse(data);
		if (err) {
			throw err; 
		}
		var estimate = 0;
		for(var i = 0; i < parsedData.length; i++){
				estimate = +estimate + +parsedData[i].estimate;
			}
		console.log('This is estimate:', estimate)
	})
}

findData.prototype.dataNotFound = function (){
	console.log('Data not found, please try another query');
} 

findData.prototype.prompt = function(){
	var ask = prompt.question('What kind of data are you looking for? Type in all, bug, or story to see the issues estimate time.');
	
}


findData.prototype.search = function(){
	//this.prompt();	
	this.findEstimateForAll();
}

var query = new findData();
query.search();
