import mongoose, { SchemaOptions } from "mongoose";

interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
}
const schemaOption: SchemaOptions<User> = {
  timestamps: { createdAt: true, updatedAt: true },
};
const contactSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  schemaOption
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
