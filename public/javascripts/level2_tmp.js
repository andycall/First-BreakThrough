(function(){
	var container = document.querySelectorAll('.box_container');
	var boxArr = [];
	var properArr = [];
	var EnterFliter = /\n|\t/g;
	var properDivide = /[\.\#]([0-9a-zA-Z]+)\{([\w\s\:\;\-\'\"\#]+)\}+/g; //卧槽。。写了好久= =

	container = Array.prototype.slice.call(container);


	container.forEach(function(value,index){
		boxArr[index] = [];
		for(var i = 0; i < 2; i ++){
			boxArr[index].push(value.children[i]);
		}
		console.log(document.getElementById('method' + index));
		document.getElementById('method' + index).addEventListener('change',function(){
			var text = document.getElementById('method' + index).value;
			console.log('123');
			console.log(propertyGetter(text));
		});

	});

	console.log(boxArr);
	
	function propertyGetter(value){
		value = value.replace(EnterFliter,"");
		console.log(value);
		var json = [];
		var count = 0;
		// console.log(properDivide.exec(value));
		var RegObject = properDivide.exec(value);
		console.log(RegObject[0]);
		while(RegObject[0]){
			console.log(RegObject[0]);
			json[count] = {};
			json[count].name = RegObject[1];
			json[count].value = RegObject[2];
			count ++;
		}
		console.log(json);
		return json;
	}





})();