const SubmitController = require("../controllers/submit-controller");
const errorHandler = require("../middlewares/error-handler");

const router = require("express").Router();

router.post("/submit", SubmitController.submitForm);
router.use(errorHandler);

module.exports = router;
