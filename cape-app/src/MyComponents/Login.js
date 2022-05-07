import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MyDashboard } from "./MyDashboard";

const theme = createTheme();

export const Login = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = form.get("username");
    const password = form.get("password");

    if (
      username === undefined ||
      username === "" ||
      username === null ||
      password === undefined ||
      password === "" ||
      password === null
    ) {
      alert("Fields can't be empty");
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: username,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      async function checkData() {
        const response = await fetch(
          "https://lit-stream-06295.herokuapp.com/user/signin",
          requestOptions
        );

        const details = await response.json();
        return details;
      }

      let a = checkData();
      a.then((data) => {
        //console.log(data.data[0].firstName);
        alert(data.message);
        if (data.status === "Success") {
          const dash = document.getElementById("dash");
          //console.log(dash);

          localStorage.setItem("show", true);
          localStorage.setItem("username", username);
          localStorage.setItem("name", data.data[0].firstName + " " + data.data[0].lastName);
          localStorage.setItem("email", data.data[0].email);
          localStorage.setItem("clgName", data.data[0].clgName);
          localStorage.setItem("codechef", data.data[0].codechef);
          localStorage.setItem("codeforces", data.data[0].codeforces);
          localStorage.setItem("github", data.data[0].github);
          dash.click();
        } else {
          localStorage.clear();
          localStorage.setItem("show", false);
        }
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "5rem",
            backgroundColor: "white",
            padding: "2rem",
            zIndex: "2rem",
            borderRadius: "1rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgotpass">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"New User? Sign Up"}</Link>
              </Grid>
              <Grid item style={{ display: "hidden" }}>
                <Link to="/dashboard" id="dash"></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
