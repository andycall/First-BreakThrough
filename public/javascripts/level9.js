(function(){
	function level9Check(that){
		var result = that.test8.value;
		console.log(eval('var f=function(){return true;};var g=function(){return false;};(function(){if('+ result + '){f=function f(){return false;};function g(){return true;}}})();f.call(this)'));
	}	
});
