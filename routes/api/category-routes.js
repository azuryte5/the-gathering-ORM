const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // USE THE ORM TO do these things.
  // be sure to include its associated Products
  Category.findAll({
    include:[{model: Product}]
  }).then(dbCategories => {
    res.json(dbCategories);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{model:Product}]    
    // find one category by its `id` value
  // be sure to include its associated Products
  }).then(dbCategory => {
  res.json(dbCategory);
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
