const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); 
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
