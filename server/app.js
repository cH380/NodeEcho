var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
// 引入 express-session connect-mongo
const session = require('express-session');
const MongoStore = require('connect-mongo');

var indexRouter = require('./routes/web/index');
//导入 account 接口路由文件
const accountRouter = require('./routes/api/account');

const sessionRouter = require('./routes/api/session');

var app = express();

app.use(cors());

// 设置 session 的中间件
app.use(
	session({
		secret: 'cH', //参与加密的字符串（又称签名）
		name: 'sid', //设置cookie的name，默认值是： connect.sid
		saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
		resave: true, //是否在每次请求时重新保存session
		store: MongoStore.create({
			mongoUrl: 'mongodb://127.0.0.1:27017/project' //数据库的连接配置
		}),
		cookie: {
			httpOnly: true, // 开启后前端无法通过 JS 操作
			maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
		}
	})
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', accountRouter);
app.use('/session', sessionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
