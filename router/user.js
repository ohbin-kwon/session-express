const express = require('express');
const router = express.Router();
const Animal = require("../db/schema/animal")

router.get('/', async (req, res) => {
  const user = {
    id: "abc1234"
  }
  
  res.send(user)
})

module.exports = router;
