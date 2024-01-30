const express = require('express');
const { isEmpty } = require('../utils/util');
const { validationRegistration } = require('../validation/validation');
const messages = require('../utils/messages');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    pagename: 'Home',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    pagename: 'About',
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    pagename: 'Register',
  });
});

router.post('/register', (req, res) => {
  const errors = validationRegistration(req.body) || {};
  if (isEmpty(errors)) {
    res.render('register', {
      pagename: 'Register',
      body: req.body,
      errors,
      message: messages.success_registration,
    });
  } else {
    res.render('login', {
      pagename: 'Login',
      message: messages.success_registration,
    });
  }
});

router.get('/login', (req, res) => {
  res.render('login', {
    pagename: 'Login',
  });
});

router.post('/login', (req, res) => {
  console.log('Logging in');
  res.render('about', {
    pagename: 'About',
  });
});

module.exports = router;
