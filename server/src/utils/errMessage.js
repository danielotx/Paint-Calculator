const errMessage = (message = 'Invalid entries. Try again.', statusCode) => ({
  error: {
    message,
    statusCode,
  },
});

module.exports = errMessage;
