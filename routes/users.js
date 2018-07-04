var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var AddInfo = require('../models/AddInfo');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.post('/submit', function (req, res, next) {
	const user = new User({
		userName: 'admin',
		password: '123456'
	});
	user.save(function (err) {
		console.log('save status', err ? err : 'success');
	});
	User.find({userName: 'admin', password: '123456'}, function (err, docs) {
		if (err) {
			console.log(err);
		} else {
			console.log('登陆成功用户：' + docs);
			if (docs.length === 0) {
				res.send('用户名或密码有误');
			} else {
				/*req.session.user = {
					_id: docs[0]._id,
					username: docs[0].username
				};*/
				res.send('login success');
			}
		}
	});
});

router.post('/addInfo', function (req, res, next) {
	console.log(req.body);
	const addInfo = new AddInfo({
		title: req.body.title,
		category: req.body.category,
		subTitle: req.body.subTitle,
		createTime: Date.now(),
	});
	addInfo.save(function (err) {
		console.log('save status', err ? err : 'success');
	});
});

router.get('/getInfo', function (req, res, next) {
	AddInfo.find({}, function (err, docs) {
		if (err) throw err;
		res.send({
			code: 200,
			message: '获取数据列表成功',
			data: docs
		});
	});
});


module.exports = router;
