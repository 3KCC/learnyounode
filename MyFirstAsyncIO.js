var fs = require('fs')
var numOfNewLines = undefined;

function countNewLines(callback){
	fs.readFile(process.argv[2], function doneReading(err, fileContents){
		numOfNewLines = fileContents.toString().split('\n').length - 1;
		callback();
	});
}

function logNumber() {
  console.log(numOfNewLines);
}

countNewLines(logNumber);