var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	username: String,
	passwd: String
});

module.exports = mongoose.model('User', UserSchema, 'user');