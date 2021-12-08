const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.get("/", async function (req, res) {
  res.status(200).json({ text: "hello" }).end();
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("RANDOM", Math.floor(Math.random() * (1000 - 1)) + 1);
  }, 500);
});

server.listen(8080, console.log("server started"));