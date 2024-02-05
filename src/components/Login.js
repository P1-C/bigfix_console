import {
    Button,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography,
    Link,
    MenuItem,
    Box,
  } from "@mui/material";
  import React, { useState } from "react";
  import { CheckBox } from "@mui/icons-material";
  import useUserStore from "../stores/userStore";
import { useNavigate } from "react-router";

  
  const Login = () => {
    const { login } = useUserStore()
    const navigate  = useNavigate()

    const paperStyle = {
      padding: "20px 40px",
      height: "50vh",
      width: "25vw",
      margin: "20px auto",
    };
  
    const container = {
      align: "center",
    };
  
    const [server, setServer] = useState("");
    const handleServer = (e) => {
      setServer(e.target.value);
    };

    const handleLogin = (second) => { 
      login()
      navigate('/')
     }
  
    return (
      <Grid style={container}>
        <Paper elevation={5} style={paperStyle}>
          <Grid align="center">
            <h3>Log In to your Account</h3>
          </Grid>
          <TextField
            label="Server Name"
            select
            value={server}
            onChange={handleServer}
            fullWidth
            helperText={
              server.length !== 0
                ? "connected to the server"
                : "Please Enter the server name to connect"
            }
            style={{ marginTop: "10px" }}
          >
            <MenuItem value="S1">WIN-BLVCM8B7N</MenuItem>
            <MenuItem value="S2">WIN-CLVCM8B7M</MenuItem>
            <MenuItem value="S3">WIN-XLVDM8B9P</MenuItem>
            <MenuItem value="S4">WIN-BLSC78B7N</MenuItem>
            <MenuItem value="S5">WIN-ALVC8MB7K</MenuItem>
          </TextField>
          <TextField
            label="Username"
            placeholder="Please Enter user name"
            variant="outlined"
            fullWidth
            required
            style={{ marginTop: "10px" }}
          />
          <TextField
            label="Password"
            placeholder="Please Enter Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            style={{ marginTop: "10px" }}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <FormControlLabel
              control={<CheckBox name="CheckedBox" color="primary" />}
              label="Remember Me"
            />
            <Typography>
              <Link href="#" color="primary.light" underline="none">
                Forgot Password ??
              </Link>
            </Typography>
          </Box>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ margin: "10px 0px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
        <Typography style={{ marginTop: "10px", color: "#fff" }}>
          Do you have any Account?
          <Link
            href="#"
            color="primary.light"
            underline="none"
            style={{ marginLeft: "5px" }}
          >
            Register
          </Link>
        </Typography>
      </Grid>
    );
  };
  
  export default Login;
  