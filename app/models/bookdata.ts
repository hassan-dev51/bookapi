import mongoose from "mongoose";

interface Book {
  booktitle: string;
  bookauthor: string;
  description: string;
  price: number;
  available: boolean;
}
const bookdata = new mongoose.Schema<Book>({
  booktitle: {
    type: String,
    required: true,
  },
  bookauthor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
});

const BookData =
  mongoose.models.BookData || mongoose.model("BookData", bookdata);

export default BookData;
