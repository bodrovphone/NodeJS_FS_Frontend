require('dotenv').config();
const express = require('express');
const { isEmpty } = require('../utils/util');
const { validationRegistration, validationLogin } = require('../validation/validation');
const messages = require('../utils/messages');
const { postRegister, postLogin } = require('../services/userService');
let session = require('express-session');


const router = express.Router();

// using middleware to create session
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));


router.get('/', (req, res) => {
    session = req.session;
  res.render('home', {
    pagename: 'Home',
    session
  });
});



router.get('/register', (req, res) => {
  res.render('register', {
    pagename: 'Register',
  });
});

router.post('/register', async (req, res) => {
  const errors = validationRegistration(req.body) || {};
  let result;
  if (isEmpty(errors)) {
    try {
        result = await postRegister(req);

    } catch (error) {
        res.render('register', {
            pagename: 'Register',
            body: req.body,
            errors,
            message: error.message,
          });
    }
    console.log('here is result', result)
    res.render('login', {
      pagename: 'Login',
      body: req.body,
      errors,
      message: result && result.data ? result.data.message : messages.success_registration,
    });
  } else {
    console.log('here is errors', errors);
    res.render('register', {
      pagename: 'Register',
      errors,
      errorMessage: messages.failed_registration,
    });
  }
});

router.get('/login', (req, res) => {
  session = req.session;
  res.render('login', {
    pagename: 'Login',
  });
});

router.post('/login', async (req, res) => {
    console.log('here is req.body', req.body);
    let result = {};
    const errors = validationLogin(req.body) || {};
    if (isEmpty(errors)) {
        try {
            result = await postLogin(req); 
            session.name = result.data?.user?.firstName;
            session.logged = true;
            session.token = result.data?.token;
            console.log('user data', result.data?.user);
             res.render('home', {
               pagename: 'Home',
               message: result.data?.message || messages.success_login,
               session
             });
        } catch (error) {
            res.render('login', {
                pagename: 'Login',
                body: req.body,
                errors,
                message: error.message,
              });
        } 
    } else {
      res.render('login', {
        pagename: 'Login',
        body: req.body,
        errors,
        errorMessage: messages.success_registration,
      });
    }
});

router.get('/about', (req, res) => {
    session = req.session;
    res.render('about', {
      pagename: 'About',
      session
    });
  });

  router.get('/logout', (req, res) => {
    req.session.destroy(null);
    res.render('home', {
      pagename: 'Home',
    });
  });

module.exports = router;
