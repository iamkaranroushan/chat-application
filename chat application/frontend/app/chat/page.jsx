"use client";

import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "@/styles/styles.css";
import { Button } from "@/components/ui/button";
import axios from "axios";

let socket;

const getToken = async () => {
  try {
    const response = await fetch("../api/getToken");
    if (response.ok) {
      const data = await response.json();
      const token = data.message;
      console.log(token);
      return token;
    } else {
      console.error("Failed to fetch token:", response.data);
      return null;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};
const getUser = async () => {
  try {
    const response = await fetch("http://localhost:8080/user/getUser");
    const data = await response.json();
    const user = await data.user;

    return user;
  } catch (error) {
    console.log(error.message);
  }
};
const ChatPage = () => {
  const [message, setMessage] = useState(""); // State to store the input message
  const [messages, setMessages] = useState([]); // State to store the chat messages
  const [data, setData] = useState(null);
  // const [socket, setSocket] = useState(null); // State to store the socket connection
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const messagesEndRef = useRef(null);
  const ENDPOINT = "http://localhost:8080";

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Establish a socket connection when the component mounts
  useEffect(() => {
    // Connect to the server's WebSocket endpoint
    socket = io(ENDPOINT);
    // Listen for incoming messages from the server
    socket.on("message", (msg) => {
      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    const fetchUser = async () => {
      try {
        const user = await getUser();
        console.log(user);
        setData(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();

    const fetchToken = async () => {
      try {
        const token = await getToken();
        console.log(token);
        socket.emit("authenticate", token);
        socket.emit("reconnect", token);
      } catch (err) {
        console.log(err);
      }
    };

    fetchToken();

    // Listen for the "connect" event to indicate successful connection
    socket.on("connect", () => {
      // Set isLoading to false when connected
      setIsLoading(false);
    });
    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages change
  }, [messages]);

  // Function to send a message to the server
  const sendMessage = (e) => {
    e.preventDefault();
    // Check if the socket connection exists and the message is not empty
    if (socket && message.trim()) {
      // Prepare the message data with message content and user ID
      const messageData = {
        message: message.trim(),
        id: socket.id, // Socket ID is unique to each client
      };
      // Emit the message event to the server with the message data
      socket.emit("message", messageData);
      // Clear the input field after sending the message
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-10">
        <h1>Chat Room</h1>
        {/* Show loading message if still connecting to the server */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          // Show user ID once connected to the server
          <h2>
            USER ID: <strong>{socket.id}</strong>
          </h2>
        )}
      </div>
      {/* Display the chat messages */}
      <div
        id="chat-window"
        className=" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700"
      >
        {messages.map((msg, index) => (
          <p
            key={index}
            className="text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2"
          >
            <strong className="text-zinc-500">{msg.id}:</strong> {msg.message}
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input field for typing messages */}
      <div className="flex space-x-2 p-10">
        <input
          className="text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 "
          type="text"
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* Button to send messages */}
        <Button variant="outline" onClick={(e) => sendMessage(e)}>
          Send
        </Button>
      </div>

      {
        <div>
        <h1>
          available rooms:
          {data && data.map((user, index) => (
            <p className="text-white" key={index}>{user[0]}</p>
          ))}
        </h1>
        </div>
      }
    </div>
  );
};

export default ChatPage;
