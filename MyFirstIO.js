var fs = require('fs')
var path = process.argv[2]
var content = fs.readFileSync(path).toString()
console.log(content.split('\n').length - 1)