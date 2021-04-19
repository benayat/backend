const express = require('express');
const path = require('path');
const router = require('./router/router');

const app = express();
const port = process.env.PORT || 5000;
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
