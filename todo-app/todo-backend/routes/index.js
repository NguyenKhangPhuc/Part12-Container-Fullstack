const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis/index')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits += 1

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const count = await getAsync('added_todos') || 0
  res.send({
    added_todos: Number(count)
  })
})

module.exports = router;
