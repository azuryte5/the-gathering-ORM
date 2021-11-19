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
Category.create({
  category_name: req.body.category_name
}).then(dbCategory => {
  res.json(dbCategory)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
Category.update(req.body, {
  where:{
    id: req.params.id
  },
}).then(dbCategory => {
  res.json(dbCategory)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
