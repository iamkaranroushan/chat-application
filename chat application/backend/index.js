import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/user.js";
import messageRoutes from "./src/routes/messageRoutes.js"
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./src/config/database.js";
import jwt from "jsonwebtoken";
import MongoStore from 'connect-mongo';
import  session  from "express-session";
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
  // Add other CORS options if needed
};

const app = express();
const port = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret:'keyboard cat',
  resave:'false',
  saveUninitialized:'true',
  store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
  })

}))
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", authRoutes);
app.use("/user", userRoutes);
app.use("/messages", messageRoutes);

// Create HTTP server using Express app
const server = createServer(app);

// Create Socket.IO server instance attached to the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", // Allowing CORS from any origin
  },
});


// Handle Socket.IO events
io.on("connect", (socket) => {
 

  
  // Authentication successful, associate the user with the socket connection
  
  console.log("A user connected");
  console.log("this is socket Id after try catch :", socket.id);
  
 
  // Broadcast a message when a new user joins
  socket.broadcast.emit("message", {
    id: socket.id,
    message: "Hello, I just joined",
  });



  // Listen for incoming messages from clients
  socket.on("message", (message) => {
    console.log(`Message sent by: ${socket.id}`, message);
    // Broadcast the message to all connected clients
    io.emit("message", message);
  });



  // Listen for disconnection events
  socket.on("disconnect", () => {
    io.emit("message", { id: socket.id, message: "left" });
    console.log("A user disconnected");
  });
});

connectDb()
  .then(() =>
    server.listen(port, () => {
      console.log(`Server is running on port:${port}`);
    })
  )
  .catch((err) => console.log(err));

// Start the server
