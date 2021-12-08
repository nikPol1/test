import React from "react";
import io from "socket.io-client";

import { Box, Grid, TextField, ButtonGroup } from "@mui/material";

function App() {
  const [messages, setMessages] = React.useState([]);
  const [txt, stTxt] = React.useState([]);

  React.useEffect(() => {
    const socket = io("ws://localhost:8080");
    socket.on("RANDOM", (num) => {
      console.log(num);
    });
  }, []);

  const chatGetHandler = (msg) => {
    let arr = messages;
    arr.push(msg);
    setMessages(arr);
  }

  const inputTextHandler = (e) => {
    stTxt(e.target.value);
  }
  return <Box>
  <Grid container>
    {messages.map((message) => (
      <Grid item>
        {message.user}: {message.text}
      </Grid>
    ))}
  </Grid>
  <hr/>
  TextField
</Box>

export default App;