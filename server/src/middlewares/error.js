module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
};