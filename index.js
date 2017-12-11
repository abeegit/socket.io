const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

app.set("views", path.resolve("__dirname", "views"));

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("chat-message", function(data) {
    console.log(data);
  });

  socket.on("disconnect", function() {
    console.log("Socket closed");
  });

  socket.on("connect", function() {
    console.log("Connected");
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
