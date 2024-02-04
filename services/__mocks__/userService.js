const postRegister = async () => {
  return Promise.resolve({
    data: {
      message: 'User created successfully',
      user: {
        firstName: 'Alex',
        lastName: 'Bodrov',
        address: '1234 Main St',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94123',
        email: `mockedEmail@gmail.com`,
      },
    },
  });
};

const postLogin = async () => {
  return Promise.resolve({
    data: {
      message: 'Authentication successful',
      token: '1234',
      user: {
        firstName: 'Alex',
        lastName: 'Bodrovius',
      },
    },
  });
};

module.exports = {
  postRegister,
  postLogin,
};
