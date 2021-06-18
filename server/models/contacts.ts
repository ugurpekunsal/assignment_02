/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the Mongoose Schema

const ContactSchema = new Schema(
  {
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
  },
  {
    collection: "contacts",
  }
);

const Model = mongoose.model("Contact", ContactSchema);
export default Model;
