import React from "react";
import io from "socket.io-client";

import Header from "./components/Header"
import { Box, Grid, TextField, Button } from "@mui/material";
import { Input } from '@mui/material';

const socket = io("ws://localhost:8080");

function App() {
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    socket.on("CHAT", (msg) => {
      const arr = messages;
      arr.push(msg);
      setText(arr);
    });
  }, []);

  const inputTextHandler = (e) => {
    setText(e.target.value);
  };

  const chatSendHandler = (e) => {
    socket.emit("CHAT", text);
  };

  return (
    <Box
      sx={{
        fontSize: "20px",
      }}
    >
      <Header />
      <Grid container spacing={2} direction="column">
        {messages.map((message, i) => (
          <Grid item key={i}>
            {message}
          </Grid>
        ))}
      </Grid>
      <hr />
      <TextField onChange={inputTextHandler} variant="outlined" />
      <Input>тест</Input>
      <Input>тест</Input>
      <Button onClick={chatSendHandler} variant="outlined">
        send
      </Button>
    </Box>
  );
}

export default App;