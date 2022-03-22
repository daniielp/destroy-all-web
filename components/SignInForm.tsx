import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import faker from "faker";

var randomUsername = faker.internet.userName();

const SignInForm = () => {
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleClick = () => {
    setHasError(true);
    setErrorText(`This password is already being used by ${randomUsername}`);
  };

  return (
    <Box sx={{ maxWidth: 450, mx: "auto" }}>
      <TextField label="Username" fullWidth margin="normal" variant="filled" />
      <TextField label="Password" fullWidth type="password" error={hasError} helperText={errorText} margin="normal" variant="filled" />
      <Button onClick={handleClick}>Submit</Button>
    </Box>
  );
};

export default SignInForm;
