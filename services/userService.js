require('dotenv').config();
const axios = require('axios');

const postRegister = async (req, res) => {
  console.log('postRegister req.body', req.body);
  const result = await axios.post(`${process.env.url}/register`, req.body);
  console.log('postRegister result', result);
  return result;
};

const postLogin = async (req, res) => {
  console.log('postLogin req.body', req.body);
  const result = await axios.post(`${process.env.url}/login`, req.body);
  console.log('postLogin result', result.data);
  return result;
};

module.exports = {
  postRegister,
  postLogin,
};
