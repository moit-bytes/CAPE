const express = require("express");
const router = express.Router();

const User = require('./../models/User');

//Password Encryption/Decryption
const bcrypt = require('bcrypt');

//Sign Up
router.post("/signup", (req, res) => {
  let { firstName, lastName, username, email, password, clgName, codechef, codeforces, github} = req.body;
  //console.log(req.body);
  firstName = firstName.trim();
  lastName = lastName.trim();
  clgName = clgName.trim();
  codechef = codechef.trim();
  codeforces = codeforces.trim();
  github = github.trim();
  username = username.trim();
  email = email.trim();
  password = password.trim();

  if(firstName == "" || lastName == "" || username == "" || email == "" || password == "" || clgName == "" || codechef == "" || codeforces == "" || github == "")
  {
      res.json({
          status: "Failed",
          message: "Empty Input Fields!"
      });
  }
  else if(!/^[a-zA-Z ]*$/.test(firstName))
  {
    res.json({
        status: "Failed",
        message: "Invalid first name entered!"
    });
  }
  else if(!/^[a-zA-Z ]*$/.test(lastName))
  {
    res.json({
        status: "Failed",
        message: "Invalid last name entered!"
    });
  }
  else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
  {
    res.json({
        status: "Failed",
        message: "Invalid email address!"
    });
  }
  else if(password.length < 8)
  {
    res.json({
        status: "Failed",
        message: "Password length should be greater than 8!"
    });
  }
  else
  {
      //Check if there is an existing user with same username

      User.find({username}).then(result => {

        if(result.length)
        {
            //the username already exists
            res.json({
                status: "Failed",
                message: "User with provided username already exists!"
            });
        }
        else
        {
            //create a new user

            //password handling
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds).then(hashedPassword => {
                const newUser = new User({
                    firstName,
                    lastName,
                    username,
                    email,
                    password: hashedPassword,
                    clgName,
                    codechef,
                    codeforces,
                    github
                });

                newUser.save().then(result => {
                    res.json({
                        status: "Success",
                        message: "User registered sucessfully",
                        data: result
                    });
                }).catch(err =>{
                    res.json({
                        status: "Failed",
                        message: "An error occurred while saving the user!"
                    });
                })

            }).catch(err => {
                res.json({
                    status: "Failed",
                    message: "An error occurred while encrypting the password!"
                });
            })
        }

      }).catch(err => {
          console.log(err);
          res.json({
            status: "Failed",
            message: "An error occurred while checking for an existing user!"
        });
      })

  }

});

//Sign In
router.post("/signin", (req, res) => {
    let {username, password} = req.body;

    if(username == "" || password == "")
    {
        res.json({
            status: "Failed",
            message: "Empty Input Fields!"
        });
    }
    else{
        User.find({username}).then(data => {
            if(data.length)
            {
                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if(result)
                    {
                        res.json({
                            status: "Success",
                            message: "Sign in Successful",
                            data: data
                        });
                    }
                    else
                    {
                        res.json({
                            status: "Failed",
                            message: "Invalid username or password!"
                        });
                    }
                }).catch(err => {
                    res.json({
                        status: "Failed",
                        message: "An error occurred while comparing passwords!"
                    });
                })
            }
            else{
                res.json({
                    status: "Failed",
                    message: "Invalid credentials!"
                });
            }
        }).catch(err => {
            res.json({
                status: "Failed",
                message: "An error occurred while checking the user!"
            });
        })
    }

});

module.exports = router;
