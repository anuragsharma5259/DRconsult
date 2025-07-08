import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
 expiry: {
  type: Date,
  required: true,
  index: { expires: 0 } 
}

}, { timestamps: true });




export default mongoose.model("Otp", otpSchema);
