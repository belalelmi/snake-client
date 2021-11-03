const net = require("net");
const { host, port } = require('./client');
const stdin = process.stdin;

// would be import ed host/port from client.js here 
// establishes a connection with the game server
const connect = () => {
  const name = 'Name: BHE';
  const conn = net.createConnection({
    host,
    port,
  });

  conn.write(`${name}`)

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log("Incoming: \n" + data);
    // console.log(data);
  })
  conn.on('data', (input) => {
    client.write(`${name}: ${input}`);
  })
  return conn;
};
connect();






// stdin.setEncoding('utf8');

// client.write(`${name} has connected!!!`);



// stdin.on('data', (input) => {
//   client.write(`${name}: ${input}`);
// })