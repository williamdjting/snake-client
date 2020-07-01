const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
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
    conn.write("Move: up");
  });


  return conn;
}

module.exports = { connect };
