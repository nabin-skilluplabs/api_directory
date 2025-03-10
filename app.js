
import express from 'express'
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import jobRouter from './routes/job.js'
import roomRouter from './routes/room.js'

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)
app.use('/room', roomRouter)
app.use('/job', jobRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app  