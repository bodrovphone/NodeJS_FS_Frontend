const userService = require('./userService');

jest.mock('./userService');

describe('userService', () => {
  test('Post register should return a user', async () => {
    const body = {
      firstName: 'Alex',
      lastName: 'Bodrov',
      address: '1234 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94123',
      email: 'mockedEmail@gmail.com',
      password: '123',
    };
    const user = await userService.postRegister({ body });

    expect(user.data.message).toBe('User created successfully');
    expect(user.data.user.firstName).toBe('Alex');
    expect(user.data.user.lastName).toBe('Bodrov');
    expect(user.data.user.address).toBe('1234 Main St');
    expect(user.data.user.city).toBe('San Francisco');
    expect(user.data.user.state).toBe('CA');
    expect(user.data.user.zipCode).toBe('94123');
    expect(user.data.user.email).toBe('mockedEmail@gmail.com');
  });

  test('Post login should return a user', async () => {
    const body = {
      email: 'bodrovius@noemail.com',
      password: 'test1234',
    };

    const user = await userService.postLogin({ body });
    expect(user.data.message).toBe('Authentication successful');
    expect(user.data.user.firstName).toBe('Alex');
    expect(user.data.user.lastName).toBe('Bodrovius');
    expect(user.data.token).toBeTruthy();
  });
});
