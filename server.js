const net = require("net");

let server = net.Server();
let ip_address = "127.0.0.1";
let port = 4444;

server.listen({ ip_address, port }, () => {
  console.log(`Server listening on ${ip_address}:${port}`);
});

server.on("connection", (connection) => {
  console.log(`Connection established: ${connection.address}`);
  socket.write(`command` + `\n`);
  console.log(socket.pipe(socket));

  socket.on("end", (endSocket) => {
    console.log(`Client ${socket} failed`);
  });

  socket.on("close", (closeSocket) => {
    console.log(`Connection closed: ${socket}`);
  });
});

server.on("error", (event) => {
  if (event.code === "EADDRINUSE") {
    console.log("Address already in use ");
    setTimeout(() => {
      console.log("Use diffrent address");
      server.close();
    }, 3000);
  }
});

server.on("close", () => {
  console.log("Connection closed by host.");
});
