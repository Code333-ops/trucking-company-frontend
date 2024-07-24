// backend/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Import routes
const locationsRouter = require('./routes/locations');
const schedulesRouter = require('./routes/schedules'); // Add this line

// Middleware
app.use(express.json());

// Use routes
app.use('/api', locationsRouter);
app.use('/api', schedulesRouter); // Add this line

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
