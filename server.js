const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static("public"));

// Default route (optional)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start server and log message
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
