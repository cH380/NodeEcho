const express = require('express');
const router = express.Router();

// session设置
router.get('/login', (req, res) => {
	req.session.username = 'admin';
	res.send('已登录');
});

// session读取
router.get('/cart', (req, res) => {
	if (req.session.username) {
		res.send(`欢迎${req.session.username}来到此页面`);
	} else {
		res.send('请登录注册');
	}
});

// session销毁
router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.send('已成功退出登录');
	});
});

module.exports = router;
