function success(res, status, message, data) {
  return res.status(200).json({ status: 200, message: message, data: data });
}

function fail(res, status, message) {
  return res.status(status).json({ success: false, errorMessage: message });
}

export default { success, fail };
