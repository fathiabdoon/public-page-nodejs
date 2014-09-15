/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	
	login: function(req, res){
		var username = req.body.username;
		var password = res.body.password;
		
		User.findOneByUsername(username, function(err, user){
			if(user){
				bcrypt.compare(password, user.password, function(userErr, match){
					if(match){
						req.session.user = user;
						res.view('home/index', {user:user});
					}
				})
				
			}
		})
	},
	
	logout : function(req, res){
		req.session.user = null;
		res.view('home/index',{user:false, error:false })
	}
};

