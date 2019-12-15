const indexRoute = require('./index');
const authRoute = require('./auth');

module["exports"] = app => {
    app.use('/', indexRoute);
    app.use('/auth', authRoute);
};