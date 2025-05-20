// Load environment variables
require('dotenv').config();

// Get port from environment or use default
const PORT = process.env.PORT || 8000;

const io = require('socket.io')(PORT, {
  cors: {
    origin: "*"
  }
});

const users = {};

io.on('connection', socket => {
    // When a new user joins
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // When a message is sent
    socket.on('send', message => {
        socket.broadcast.emit('receive', {
            message: message,
            name: users[socket.id]
        });
    });

    // When a user disconnects
    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});
