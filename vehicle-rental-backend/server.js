const express = require('express');
const app = express();
require('dotenv').config();

const apiRoutes = require('./routes/api');

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
