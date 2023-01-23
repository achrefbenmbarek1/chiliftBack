const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  health: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
   const user = this;
   console.log("Just before saving before hashing  ", user.password);
   if (!user.isModified('password')) {
       return next();
   }
   user.password = await bcrypt.hash(user.password, 8);
   console.log("Just before saving & after hashing", user.password);
   next();
})


mongoose.model("User", userSchema);
