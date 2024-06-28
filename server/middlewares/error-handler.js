const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal server error";

  switch (err.name) {
    case "SequelizeValidationError":
      code = 400;
      msg = err.errors.map((el) => el.message);
      break;
    case "SequelizeUniqueConstraintError":
      code = 400;
      msg = err.errors.map((el) => el.message).join();
      break;
    case "noInput":
      code = 400;
      msg = "Email/password required";
      break;
  }

  res.status(code).json({
    status: "ERROR",
    message: msg,
  });
};

module.exports = errorHandler;
