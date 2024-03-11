const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();

// Cross-Origin Resource Sharing
app.use(
  cors({
    origin: [process.env.ORIGIN],
  })
);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
