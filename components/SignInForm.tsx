import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import faker from "faker";


const SignInForm = () => {
  var randomUsername = faker.internet.userName();
  const [errorText, setErrorText] = useState("");

  const handleClick = () => {
    var randomUsername = faker.internet.userName()
    setErrorText("This password is already being used by " + randomUsername )
  }

  useEffect(() => {
    var randomUsername = faker.internet.userName()
    setErrorText("This password is already being used by " + randomUsername )
  }, [])

  return (
    <Box sx={{ maxWidth: 450, mx: "auto" }}>
      <TextField label="Username" fullWidth margin="normal" variant="filled" defaultValue="Nico.Anderson86" />
      <TextField label="Password" fullWidth type="text" error helperText={errorText} margin="normal" variant="filled" defaultValue="Password123" />
      <Button onClick={handleClick}>Submit</Button>
    </Box>
  );
};

export default SignInForm;
