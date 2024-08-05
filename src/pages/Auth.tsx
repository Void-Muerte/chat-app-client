import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Auth() {
  const [formData, setFormData] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      component="form"
      onSubmit={handleRegister}
    >
      <Stack direction="column" spacing={2} sx={{ width: "400px" }}>
        <Typography variant="h5">Please Signup</Typography>
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="outlined" type="submit">
          SignUp
        </Button>
      </Stack>
    </Box>
  );
}

export default Auth;
