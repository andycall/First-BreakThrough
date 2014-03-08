(function(){
	var container = document.querySelectorAll('.box_container');
	var boxArr = [];
	var properArr = [];
	var EnterFliter = /\n/g;
	var properDivide = /\.([\w\s]+)\{([\w\:\ \;\'\-]+)\}/;
	var getProperty = /\.(..+)\{(.+)\}/;


	container = Array.prototype.slice.call(container);


	container.forEach(function(value,index){
		boxArr[index] = [];
		for(var i = 0; i < 2; i ++){
			boxArr[index].push(value.children[i]);
		}
		document.getElementById('method' + index).addEventListener('change',function(){
			var text = document.getElementById('method' + index).value;
			console.log(propertyGetter(text));
		});

	});

	console.log(boxArr);
	
	function propertyGetter(value){
		value = value.replace(EnterFliter,"");
		console.log(value);
		var propertys =  value.match(properDivide);
		console.log(propertys);
		var json = {};
		propertys.forEach(function(value,index){
			var name = value.match(getProperty)[1];
			var value = value.match(getProperty)[2];
			json[name] = value;
		})

		return json;
	}




})();