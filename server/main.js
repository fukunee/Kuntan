#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('./app');
const debug = require('debug')('Kuntan:server');
const http = require('http');
// noinspection JSUnusedLocalSymbols
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

// noinspection JSUnresolvedVariable
/**
 * Import Env
 */
const SERVER_PORT = process.env.PORT || 8080,
    DB_USER = process.env.DB_USER,
    DB_PASS = process.env.DB_PASS,
    DB_URL = process.env.DB_URL,
    DB_COLLECTION = process.env.DB_COLLECTION;

/**
 * MongoDB Client connect
 */
const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_COLLECTION}`;
mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    err => {
        if (err) console.log(err);
    }
).then(r => {
    console.log('MongoDB connection:', r.connections[0].host + '/' + r.connections[0].name);
});

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(SERVER_PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Create Websocket server.
 */
const io = require('socket.io')(server);
require('./io')(io);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// -------------------------------------------------------------------

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
