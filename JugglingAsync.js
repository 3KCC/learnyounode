var http = require('http');
var bl = require('bl');
var dataArr = [];
var count = 0;

function httpGet (index){
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function (err, data) {
			response.on("error", function(error){
				console.error(err);
			});
			
			dataArr[index] = data.toString();
			count++;

			if (count == 3){
				for(var i = 0; i < 3; i++){
					console.log(dataArr[i]);
				}
			}
		}));
	});
}

for(var i = 0; i < 3; i++){
	httpGet(i);
}