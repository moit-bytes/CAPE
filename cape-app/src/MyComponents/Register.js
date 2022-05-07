import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Register = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  //Handling inputs

  // 1. Handling First Name
  const [fname, updateFirstName] = useState("");

  const fhandler = (e) => {
    //console.log(e.target.value);
    updateFirstName(e.target.value);
  };

  // 2. Handling Last Name
  const [lname, updateLastName] = useState("");

  const lhandler = (e) => {
    //console.log(e.target.value);
    updateLastName(e.target.value);
  };

  // 3. Handling username
  const [username, updateUserName] = useState("");

  const UserNameHandler = (e) => {
    //console.log(e.target.value);
    updateUserName(e.target.value);
  };

  // 4. Handling Email
  const [email, updateEmail] = useState("");

  const Emailhandler = (e) => {
    //console.log(e.target.value);
    updateEmail(e.target.value);
  };

  // 5. Handling pass1
  const [pass1, updatePass1] = useState("");

  const Pass1handler = (e) => {
    //console.log(e.target.value);
    updatePass1(e.target.value);
  };

  // 6. Handling pass2
  const [pass2, updatePass2] = useState("");

  const Pass2handler = (e) => {
    //console.log(e.target.value);
    updatePass2(e.target.value);
  };

  // 7. Handling College Name
  const [clgName, updateCollegeName] = useState("");

  const ClgNamehandler = (e) => {
    //console.log(e.target.value);
    updateCollegeName(e.target.value);
  };

  // 8. Handling Codechef
  const [codechef, updateCodechef] = useState("");

  const CodechefHandler = (e) => {
    //console.log(e.target.value);
    updateCodechef(e.target.value);
  };

  // 9. Handling Codeforces
  const [codeforces, updateCodeforces] = useState("");

  const CodeforcesHandler = (e) => {
    //console.log(e.target.value);
    updateCodeforces(e.target.value);
  };

  // 10. Handling Github
  const [github, updateGithub] = useState("");

  const GithubHandler = (e) => {
    //console.log(e.target.value);
    updateGithub(e.target.value);
  };

  // 11. Button Handling

  const onButtonClick = (e) => {
    e.preventDefault();

    //removing unnecessary spaces from the ends
    updateFirstName(fname.trim());
    updateLastName(lname.trim());
    updateUserName(username.trim());
    updateEmail(email.trim());
    updatePass1(pass1.trim());
    updatePass2(pass2.trim());
    updateCollegeName(clgName.trim());
    updateCodechef(codechef.trim());
    updateCodeforces(codeforces.trim());
    updateGithub(github.trim());

    if (
      fname === "" ||
      lname === "" ||
      username === "" ||
      email === "" ||
      pass1 === "" ||
      pass2 === "" ||
      clgName === "" ||
      codechef === "" ||
      codeforces === "" ||
      github === ""
    ) {
      alert(
        "All the input fields are required. Please dont leave any input as blank."
      );
    } else if (!/^[a-zA-Z ]*$/.test(fname)) {
      alert("Please enter a proper first name");
    } else if (!/^[a-zA-Z ]*$/.test(lname)) {
      alert("Please enter a proper last name");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Invalid Email Address! Please enter a valid one.");
    } else if (pass1.length < 8 || pass2.length < 8) {
      alert("Password length can't be less than 8 characters. ");
    } else if (pass1 !== pass2) {
      alert("Password Mismatch. Please check both the passwords.");
    } else {
      //Its time to add users:

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // myHeaders.append("Access-Control-Allow-Origin", "*");
      // myHeaders.append("Access-Control-Allow-Methods", "*");
      // myHeaders.append("Access-Control-Allow-Headers", "*");

      var raw = JSON.stringify({
        firstName: fname,
        lastName: lname,
        username: username,
        email: email,
        password: pass1,
        clgName: clgName,
        codechef: codechef,
        codeforces: codeforces,
        github: github,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      async function loadData() {
        const response = await fetch(
          "https://lit-stream-06295.herokuapp.com/user/signup",
          requestOptions
        );
        //console.log('before response');
        const users = await response.json();
        //console.log('users resolved')
        return users;
      }

      let a = loadData();
      a.then((data) => {
        console.log(data);
        alert(data.message);
        if (data.status === "Success") {

          localStorage.setItem("show", true);
          localStorage.setItem("username", username);
          localStorage.setItem("name", fname + " " + lname);
          localStorage.setItem("email", email);
          localStorage.setItem("clgName", clgName);
          localStorage.setItem("codechef", codechef);
          localStorage.setItem("codeforces", codeforces);
          localStorage.setItem("github", github);

          updateFirstName("");
          updateLastName("");
          updateUserName("");
          updateEmail("");
          updatePass1("");
          updatePass2("");
          updateCollegeName("");
          updateCodechef("");
          updateCodeforces("");
          updateGithub("");

          const dash = document.getElementById("dash");
          //console.log(dash);

          
          
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
      <Container component="main" maxWidth="sm">
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
            <AssignmentTurnedInIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register Yourself
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fname}
                  onChange={fhandler}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lname}
                  onChange={lhandler}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={UserNameHandler}
                  type="text"
                  autoComplete="username"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={Emailhandler}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={pass1}
                  onChange={Pass1handler}
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="rePassword"
                  label="Re-enter Password"
                  type="password"
                  id="rePassword"
                  value={pass2}
                  onChange={Pass2handler}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="CollegeName"
                  label="College Name"
                  type="text"
                  id="college"
                  value={clgName}
                  onChange={ClgNamehandler}
                  autoComplete="new-college"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="codechef"
                  label="CodeChef Username"
                  type="text"
                  id="codechef"
                  value={codechef}
                  onChange={CodechefHandler}
                  autoComplete="new-codechef"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="codeforces"
                  label="Codeforces Username"
                  type="text"
                  id="codeforces"
                  value={codeforces}
                  onChange={CodeforcesHandler}
                  autoComplete="new-codeforces"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="github"
                  label="Github Username"
                  type="text"
                  id="github"
                  value={github}
                  onChange={GithubHandler}
                  autoComplete="new-github"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onButtonClick}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">{"Already have an account? Sign in"}</Link>
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
