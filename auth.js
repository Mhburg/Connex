const token = 'e3SH7aEDCBxdHFgatoK1';

function authLogin(str) {
  if (str != token) {
    return false;
  }
  return true;
}

module.exports = authLogin;
