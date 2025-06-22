function success(res, status = 200, data, message) {
  if (status === 204) return res.status(status).send();

  return res.status(status).json({
    success: true,
    data,
    message: message,
  });
}

function error(res, status, message, errors) {
  return res.status(status).json({
    success: false,
    message,
    errors,
  });
}

function paginate(res, items, total, page, limit) {
  success(res, 200, {
    items,
    pagination: {
      current_page: page,
      per_page: limit,
      total,
      last_page: Math.ceil(total / limit),
    },
  });
}

module.exports = { success, error, paginate };
