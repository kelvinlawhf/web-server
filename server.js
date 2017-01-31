var express = require('express');
var PORT = 3000;
var app = express();

// app.get('/',function(req,res){
// 	res.send("Hello Express");
// });

//about 
//About Us

app.get('/about',function(req,res){
	res.send("About Page");
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

//3000 is port
app.listen(PORT,function(){
	console.log('Express server started!' + PORT);
});