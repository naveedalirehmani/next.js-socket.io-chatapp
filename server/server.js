const port = 4000;
const cors = require("cors");
const Routes = require("./routes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(cors(
{
  origin: true,
  credentials: true
}
));

app.use(express.json());

const http = require("http").Server(app);
const io = require("socket.io")(http);

const modalMessage = require("./models/message");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected to mongoDB");
});

app.use("/api/user", Routes);

http.listen(port, function () {
  console.log("listening on 4000");
});

io.on("connection", function (socket) {
  console.log("a user connected");  

  modalMessage.find().then(messages => {socket.emit('allMessages',messages)}).catch(error => {console.log(error)})
  
  socket.on("addMessage", async (data) => {

    const { message, userName } = data;
    console.log(message,userName)
    const newMessage = new modalMessage({ message, userName });
    const response = await newMessage.save();
    io.emit("messageAdded", data);
    
  });



  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
