import { useState, useEffect } from "react";
import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import faker from "faker";

interface SignInProps {
  step: number
}

const SignInForm = ({ step = 1 }: SignInProps) => {
  var randomUsername = faker.internet.userName();
  const [errorText, setErrorText] = useState("");

  const handleClick = () => {
    var randomUsername = faker.internet.userName()
    setErrorText("This password is already being used by " + randomUsername)
  }

  useEffect(() => {
    var randomUsername = faker.internet.userName()
    setErrorText("This password is already being used by " + randomUsername)
  }, [])

  const yearList = Array(12)

  return (
    <Box sx={{ maxWidth: 450, mx: "auto" }}>
      <Typography align="center" variant="h5" component="h3" gutterBottom> Sign in</Typography>
      <TextField label="Username" fullWidth margin="normal" variant="filled" defaultValue="Nico.Anderson86" />
      <TextField label="Password" fullWidth type="text" error helperText={errorText} margin="normal" variant="filled" defaultValue="Password123" />
      {step > 1 ? (
        <>
          <TextField label="Credit Card Number*" type="number" fullWidth margin="none" variant="filled" helperText="*This field is very secure" />
          
        </>
      ) : null}
      <Button onClick={handleClick}>{step == 3 ? "Are you sure you want to submit?" : "Submit"}</Button>
    </Box>
  );
};

export default SignInForm;
