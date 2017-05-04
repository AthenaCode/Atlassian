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
		console.log('The total estimate for all issues is:', estimate)
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
		console.log('The issue bug estimate is', estimate);
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
		console.log('The issue story estimate is', estimate);
	})
}

findData.prototype.dataNotFound = function (){
	console.log('Data not found, please try another query');
} 

findData.prototype.prompt = function(){
	var ask = prompt.question('What are you looking for?');
	if(ask === 'all'){
		this.findEstimateForAll();
	} else if (ask === 'bug'){
		this.findEstimateForBug();
	} else if (ask === 'story'){
		this.findEstimateForStory();
	} else if (ask === 'allData'){
		this.allData();
	} else if (ask === 'bugData'){
		this.dataByBugIssueType();
	} else if (ask === 'storyData'){
		this.dataByStoryIssueType();	
	} else {
		this.dataNotFound();
	}
}


findData.prototype.search = function(){
	this.prompt();	
}

var query = new findData();
query.search();
