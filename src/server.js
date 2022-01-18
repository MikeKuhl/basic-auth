const express = require('express');

const signIn = require('./routes/signin.js');
const signUp = require('./routes/signUp.js');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(signIn);
app.use(signUp);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  },
};
