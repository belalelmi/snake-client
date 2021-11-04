const net = require('net');

const host = '165.227.47.243'
const port = 50541

const connect = () => {
  const name = 'Name: BHE';
  const conn = net.createConnection({
    host,
    port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write(`${name}`)

  conn.on('connect', () => {
    conn.write('Connected!');
  })

  conn.on('data', (data) => {
    console.log("Incoming: " + data);
    // console.log(data);

  });
  return conn;

};

module.exports = connect;