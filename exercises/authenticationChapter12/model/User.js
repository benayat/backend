const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
function nameValidator(value) {
  console.log(value);
  return /[a-zA-Z]+/.test(value);
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      validate: {
        validator: nameValidator,
        message: "first name must be only letters and one word",
      },
    },
    lastName: {
      type: String,
      required: true,
      validate: {
        validator: nameValidator,
        message: "last name must contain only letters",
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const user = this;

  console.log(this);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  console.log("middleware is running", user);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
