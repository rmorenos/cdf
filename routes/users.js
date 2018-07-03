var express = require('express');
var router = express.Router();
var User = require('../models/Users');

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
	User.find({ userName: 'admin', password: '123456' }, function (err, docs) {
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

module.exports = router;
