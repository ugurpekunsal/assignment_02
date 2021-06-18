import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the Mongoose Schema

const UserSchema = new Schema(
  {
    Name: String,
    Password: String,
    Email: String,
  },
  {
    collection: "users",
  }
);

const Model = mongoose.model("User", UserSchema);
export default Model;
