const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint Like use api and then tags based on index.

router.get('/', (req, res) => {
Tag.findAll({
  include: [{model: Product}]
}).then(dbTags => {
  res.json(dbTags);
});
   // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
Tag.findOne({
  where: {
    id: req.params.id
  },
  include: [{model: Product}]
}).then(dbTag => {
  res.json(dbTag)
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
