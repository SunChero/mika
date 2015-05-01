var express = require('express');
var multiparty = require('multiparty');
var iconv = require('iconv-lite');
fs = require('fs');
var app = express();




app.get('/',function(req,res){
	res.send('OK!');
	res.end();
});
app.post('/',function(req,res){
	//var proc=false;
	var form = new multiparty.Form();
	form.parse(req,function(err,fields,files){
		fs.readFile(files.file[0].path,'utf8' ,function(err, data){
		var str = iconv.decode(data , 'iso-8859-15');
		var arrstr = data.split('?');
		arrstr.forEach(function(tmp){
		 if(tmp.indexOf('prn') === 0)
			var tmp1 = tmp.split(']');
			if (Array.isArray(tmp1)) {
				if(tmp1.length > 1){
					console.log(tmp1[0]);
				}
			
			}	
		//var result = encoding.convert(data.toString(), 'Latin_1')
		//var str = iconv.decode(data , 'iso-8859-15');
		//	console.log(str);
		});			
		res.end();
		});

	

});
});

app.put('/',function(req,res){


	res.send('OK!');
	res.end();

});
app.listen(process.env.PORT || 80);


