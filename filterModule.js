var fs = require('fs');
var path = require('path');

module.exports = function (dir, extn, callback){
	fs.readdir(dir, function(err, listFiles){
		if (err){ return callback(err);}
		for (var i = listFiles.length - 1; i > -1; i--){
			if (path.extname(listFiles[i]) != ('.' + extn)){
				listFiles.splice(i,1);
			}
		}
		callback(null, listFiles);
	});
}