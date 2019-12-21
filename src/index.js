const app = require("../app");
const keys = require("../config/keys");
const port = keys.PORT || 8000;

app.listen(port, () => {
  console.log(`listening port ${port}`);
});
