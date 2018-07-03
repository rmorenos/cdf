const mongoose = require('mongoose');
const baseUrl = 'mongodb://127.0.0.1:27017/wen';

module.exports = function () {
	mongoose.connect(baseUrl);
	const db = mongoose.connection;
	db.on('open', function (err) {
		if (err) {
			console.log(err);
		}
		console.log('数据库连接成功');
	})
};