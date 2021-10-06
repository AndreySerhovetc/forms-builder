const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/users');
const router = express.Router();
const db = "mongodb+srv://admin:CQHlIa2eemzNyiDe@cluster0.ovnen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db, err => {
  if(err) {
    console.error(`Error ${err}`);
  } else {
    console.log('Connected')
  }
})

router.get('/', (req, res) => {
  res.send('From API route')
})

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);

    user.save((error, registeredUser) => {
      if (error) {
        console.error(error);
      } else {
        let payload = { subject: registeredUser._id }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token })
      }
    })
})

router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (error, user) => {
    if(error) {
      console.error(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password')
        } else {
          let payload = { subject: user._id }
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({ token })
        }
      }
    }
  })
})

module.exports = router
