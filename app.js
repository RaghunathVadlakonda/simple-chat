const express = require('express'),
      socket = require('socket.io'),
      app = express();
      port = process.env.PORT || 9000;


app.use(express.static('public'));

const server = app.listen(port, (req, res) => {
      console.log(`server started on port: ${port}`);
  });


const io = socket(server);
io.on('connection', (socket) => {
      console.log('socket connection',socket.id);


socket.on('chat', (data) => {
      // console.log(data);
      io.sockets.emit('chat',data); 
});

socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data);
});

});

