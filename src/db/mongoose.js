const mongoose = require("mongoose");
const keys = require("../../config/keys");

mongoose
  .connect(keys.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected");
  })
  .catch(e => console.log("DB error", e));

module.exports = mongoose;
