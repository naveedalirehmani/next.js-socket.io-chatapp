const port = process.env.PORT || 4000;
const cors = require('cors')
const Routes = require('./routes/index.js')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const express = require('express')
const app = express();
const http = require('http')

app.use(cors(
{
  origin: true,
  credentials: true
}
));

const server = http.createServer(app);
const Server = require('socket.io')

const io = Server(server,{
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
  }
});


app.use(express.json());

const modalMessage = require("./models/message");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected to mongoDB");
});

app.use("/api/user", Routes);

app.get('/here',(request,response)=>{
  // modalMessage.collection.drop();
  response.json('here')
})

server.listen(port, function () {
  console.log("listening on 4000");
});

io.on("connection", function (socket) {
  console.log("a user connected");  

  modalMessage.find().then(messages => {socket.emit('allMessages',messages)}).catch(error => {console.log(error)})
  
  socket.on("addMessage", async (data) => {

    const { message, userName,picture } = data;
    const newMessage = new modalMessage({ message, userName,picture });
    const response = await newMessage.save();
    io.emit("messageAdded", data);
    
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
