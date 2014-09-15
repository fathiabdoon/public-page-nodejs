/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
	username: 'string',
	password: 'string',
	loggedIn: 'boolean'
  },
  
  beforeCreate: function(values, nextCallback){
  	bcrypt.hash(values.password, 8, function(err, hash){
  		console.log(err);
  		console.log(hash);
  		
  		if(err) return nextCallback(err);
  		
  		values.password = hash;
  		nextCallback();
  	})
  }
};

