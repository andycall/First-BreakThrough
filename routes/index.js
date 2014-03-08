
/*
 * GET home page.
 */

// function checkUser(req,res,next){
// 	if(!req.session.user){
// 		res.redirect('index');
// 	}
// 	next();
// }
module.exports = function(app){

	// 	checkUser('/level:page',checkUser);
	app.get('/level:page',function(req,res){
		var page = parseInt(req.params.page);
		// var name = req.session.user.name
		res.render('level' + page,{
			title : "第" + page  + "关",
			user: "andycall"
		});
	});
	app.get('/',function(req,res){
		res.render('index',{
			title : "红岩网校智勇大闯关（一）"
		})
	});
	app.post('/',function(req,res){
		var level = req.body.level;
		//....
		res.redirect('/level' + (parseInt(level) + 1));
	})
};