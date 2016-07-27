module.exports = function (io) { 
// io stuff here... io.on('conection..... 

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('ctext', function(msg){
    console.log('message: ' + msg);
    io.emit('ctext',msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

}
