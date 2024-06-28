const SubmitService = require("../services/submit-service");

class SubmitController {
  static async submitForm(req, res, next) {
    try {
      console.log(req.body);
      const { name, email, identity_number, date_of_birth } = req.body;
      const data = await SubmitService.submitForm(
        name,
        email,
        identity_number,
        date_of_birth
      );

      res.status(201).json({
        status: "SUCCESSFUL",
        content: data,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SubmitController;
