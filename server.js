const express = require("express");
const app = express();

const cors = require("cors");

// Cross-Origin Resource Sharing
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.ORIGIN],
  })
);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
