const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("client:message", (data) => {
    data.fromMe = false;
    console.log(data);
    socket.broadcast.emit("server:message", data);
  });
});

server.listen("4000", () => {
  console.log("port runnning");
});
