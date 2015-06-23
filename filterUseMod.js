var filter = require('./filterModule.js');

filter(process.argv[2], process.argv[3], function(err, result){
	if (err){ console.log(err);}
	result.forEach( function(file){ console.log(file);});
});