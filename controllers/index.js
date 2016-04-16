var User = require('../models/user');



exports.index = function(req, res){
	User.find(function(err, docs){
	    if(err){
	    	console.log(err);
	    }
	    console.log(docs);
	    res.render('index', {title: 'MongoDB', data: docs});
	});
	//res.render('index', { title: 'WeUi' });
}