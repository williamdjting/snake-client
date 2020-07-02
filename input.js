let connection;
let sayM;

handleUserInput = function(stdin) {
  stdin.on('data', (key) => {
    process.stdout.write('.');
    
    if (key === '\u0003') {
      process.exit();
    }
    
    if (key === 'w') {
      connection.write("Move: up");
    }

    if (key === 'a') {
      connection.write("Move: left");
      
    }

    if (key === 's') {
      connection.write("Move: down");
    }

    if (key === 'd') {
      connection.write("Move: right");
    }

    if (key === "hello") {
      connection.write("Yeah buddy hello!")
    }

  });
}

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;

}

module.exports = { setupInput };

/*how this works is that setupInput is created to containerize the handleUserInput function.

the handleUserInput function what it does is that for a stdin, when something happens that is registered as 'data' and then the stdin input is then calls the callback function which is key and the stdin input goes into key. and if the key equals 'Ctrl + C', then the process will exit outright.*/