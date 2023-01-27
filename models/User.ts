
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  gender: string;
  job: string;
  height: string;
  health: string;
}

const userSchema: Schema = new Schema({
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

userSchema.pre<IUser>('save', async function (next) {
   const user = this;
   console.log("Just before saving before hashing  ", user.password);
   if (!user.isModified('password')) {
       return next();
   }
   user.password = await bcrypt.hash(user.password, 8);
   console.log("Just before saving & after hashing", user.password);
   next();

});

const User = mongoose.model<IUser>("IUser",userSchema)
export default User


