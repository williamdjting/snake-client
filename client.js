const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });


  conn.on('data', (data) => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write("Name: WAT");
  });

  conn.on('connect', () => {
    conn.write("Move: up");
  });

  conn.on('connect', () => {
    setTimeout(() => conn.write("Move: up"), 2000); 
  });

  return conn;
}

module.exports = { connect };

/*
how this works is that if I put the setTimeout function as the call back function when conn.on happens, setTimeout takes its own function which is conn.write and will call conn.write after its callback input of 2000 ms occurs. After the 2000ms wait, setTimeout then fires conn.write which moves the snake up
*/