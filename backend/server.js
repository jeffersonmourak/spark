require('module-alias/register');

const SetupRoutes = require('@api/routes/setup');
const express = require('express');

const app = express();

SetupRoutes.start(app);

app.listen(3000, function () {
  console.log('Running Server at port 3000');
});
