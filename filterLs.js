var fs = require('fs');
var path = require('path');
var folderPath = process.argv[2];
var extn = '.' + process.argv[3];
var filteredList = undefined;

fs.readdir(folderPath, function(err, listFiles){
	for (var i in listFiles){
		if (path.extname(listFiles[i]) == extn){
			console.log(listFiles[i]);
		}
	}
});