const mongoose = require("mongoose");
const Memo = require("./memo");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    page_nums: {
      type: Number,
      required: true
    },
    read_pages: {
      type: Number,
      default: 0
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    status: {
      type: String,
      default: "beforeReading"
    },
    evaluation: {
      type: Number,
      default: 0
    },
    purchased_price: {
      type: Number,
      default: 0
    },
    read_time: {
      type: Array
    },
    public: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

// set virtual field to memo
bookSchema.virtual("Memo", {
  ref: "Memo",
  localField: "_id",
  foreignField: "bookId"
});
// when a book was deleted, delete memo related to the book
bookSchema.pre("remove", async function(next) {
  const book = this;
  await Memo.deleteMany({ bookId: book._id });
  next();
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
