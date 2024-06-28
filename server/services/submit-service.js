const { User } = require("../models/index");

class SubmitService {
  static async submitForm(name, email, identity_number, date_of_birth) {
    const user = await User.create({
      name,
      email,
      idNumber: identity_number,
      dob: date_of_birth,
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}

module.exports = SubmitService;
