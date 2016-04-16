var express = require('express');
var router = express.Router();

var index = require('../controllers/index');
var sign = require('../controllers/sign');
//var user = require('./controllers/user');


/* GET home page. */
router.get('/', index.index);


//router.post('/signout', sign.signout);  // 登出
//router.get('/signin', sign.showLogin);  // 进入登录页面
//router.post('/signin', sign.login);  // 登录校验
//router.get('/active_account', sign.activeAccount);  //帐号激活



module.exports = router;
