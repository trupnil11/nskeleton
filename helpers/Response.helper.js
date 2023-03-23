//Helper is created successfully....
function success(res, status, message, data) {
  return res.status(status).json({ status: 200, message: message, data: data });
}

function fail(res, status, message) {
  return res.status(status).json({ success: false, errorMessage: message });
}

module.exports = {
  success,
  fail,
};
