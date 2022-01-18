const express = require('express');
const { UserModel } = require('../models/index.js');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UserModel.create(req.body);
    res.status(200).send(record);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
});

module.exports = router;
