const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const addInfoSchema = new Schema({
	title: String,
	category: String,
	subTitle: String,
	createTime: {
		type: Date,
		default: Date.now()
	}
});


module.exports = addInfoSchema;